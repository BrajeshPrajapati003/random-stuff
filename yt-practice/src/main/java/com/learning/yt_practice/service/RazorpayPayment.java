package com.learning.yt_practice.service;

import org.springframework.stereotype.Component;

@Component
public class RazorpayPayment {

    public String pay(){
        String payment = "Razorpay Payment";
        System.out.println(payment);
        return payment;
    }
}
