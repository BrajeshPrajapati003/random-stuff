package scenario2.service;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class EmailService {
    @Async("taskExecutor")
    public void sendOrderConfirmation(String email){
        try{
            Thread.sleep(2000);
        }catch(InterruptedException e){
            System.out.println("Order confirmation sent to: " + email + " on thread: " + Thread.currentThread().getName());
        }
    }
}
