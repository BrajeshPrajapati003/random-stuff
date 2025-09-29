package multithreadingspringboot.service;

import org.springframework.stereotype.Service;
import org.springframework.scheduling.annotation.Async;

@Service
public class EmailService {
    
    @Async("taskExecutor")
    public void sendEmail(String to){
        System.out.println("Sending email to " + to + " on thread: " + Thread.currentThread().getName());
        try {
            Thread.sleep(3000); // Simulate delay
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("Email send to " + to);
    }
}
