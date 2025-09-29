package com.real-world-scenario-1.controller;


import com.learning-stuff.real_world_scenario_1.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/order")
public class OrderController{
    
    @Autowired
    private EmailService emailService;

    @PostMapping("/place")
    public String placeOrder(@RequestParam String email){
        emailService.sendOrderConfirmation(email); // Async call
        return "Order placed successfully! Confirmation will be sent to " + email;
    }
}

// Immediate response to user, email sends in background