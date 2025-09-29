package scenario2.service;

import java.lang.module.ResolutionException;
import java.util.List;
import java.util.stream.Collectors;

import scenario2.dto.OrderResponseDTO;
import scenario2.entity.Customer;
import scenario2.entity.Product;
import scenario2.entity.Order;
import scenario2.entity.OrderItem;
import scenario2.repository.CustomerRepository;
import scenario2.repository.OrderRepository;
import scenario2.repository.ProductRepository;
import scenario2.dto.OrderRequestDTO;
import scenario2.dto.OrderResponseDTO;

@Service
public class OrderService {
    @Autowired
    private CustomerRepository customerRepo;
    @Autowired
    private ProductRepository productRepo;
    @Autowired
    private OrderRepository orderRepo;
    @Autowired
    private EmailService emailService;
    @Autowired
    private InvoiceService invoiceService;

    public OrderResponseDTO placeOrder(OrderRequestDTO request){
        Customer customer = customerRepo.findById(request.getCustomerId())
            .orElseThrow(()-> new RuntimeException("Customer not found"));

        Order order = new Order();
        order.setCustomer(customer);

        List<OrderItem> items = request.getItems().stream().map(dto -> {
            Product product = productRepo.findById(dto.getProductId())
                .orElseThrow(() -> new RuntimeException("Product not found"));

        OrderItem item = new OrderItem();
        item.setOrder(order);
        item.setProduct(product);
        item.setQuantity(dto.getQuantity());
        return item;
        }).collect(Collectors.toList());


        order.setItems(items);
        Order savedOrder = orderRepo.save(order);

        // Fire async tasks
        emailService.sendOrderConfirmation(customer.getEmail());
        invoiceService.generateInvoice(savedOrder.getId());

        // Build DTO response
        OrderResponseDTO response = new OrderResponseDTO();
        response.setOrderId(savedOrder.getId());
        response.setCustomerName(customer.getName());
        response.setEmail(customer.getEmail());
        response.setItems(savedOrder.getItems().stream().map(i -> {
            OrderResponseDTO.ItemDetail detail = new OrderResponseDTO.ItemDetail();
            detail.setProductName(i.getProduct().getName());
            detail.setQuantity(i.getProduct().getPrice().doubleValue());
            return detail;
        })).collect(Collectors.toList());

        return response;
    }
}
