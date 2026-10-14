package com.learning.yt_practice;

import com.learning.yt_practice.service.RazorpayPayment;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class YtPracticeApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(YtPracticeApplication.class, args);
	}

    private RazorpayPayment razorpayPayment;

    public YtPracticeApplication(RazorpayPayment razorpayPayment) {
        this.razorpayPayment = razorpayPayment;
    }

    @Override
    public void run(String... args) throws Exception{
        String payment = razorpayPayment.pay();
        System.out.println("Payment done");
    }

}
