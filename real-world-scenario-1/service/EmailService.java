package real-world-scenario-1.service;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    
    @Async("taskExecutor")
    public void sendOrderConfirmation(String email){
        System.out.println("Sending email to " + email + " on thread: " + Thread.currentThread().getName());
        try {
            Thread.sleep(3000); // simulate delay
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("Email sent to " + email);
    }

}
