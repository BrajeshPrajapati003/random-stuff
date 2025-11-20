package kafka.model1;

@RestController
@RequestMapping("/orders")
public class OrderController {
    
    @Autowired
    private OrderProducer producer;

    @PostMapping
    public String createOrder(@RequestParam String orderId){
        producer.sendOrder(orderId, "Order Created");
        return "Order event sent!";
    }
}
