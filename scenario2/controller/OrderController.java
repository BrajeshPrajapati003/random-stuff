package scenario2.controller;

import scenario2.dto.OrderRequestDTO;
import scenario2.dto.OrderResponseDTO;
import scenario2.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/orders")
public class OrderController {
    
    @Autowired
    private OrderService orderService;

    @PostMapping("/place")
    public OrderResponseDTO placeOrder(@RequestBody OrderRequestDTO request) throws Exception{
        return orderService.placeOrder(request);
    }
}
