package scenario2.service;

import java.util.concurrent.CompletableFuture;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class InvoiceService {
    @Async("taskExecutor")
    public CompletableFuture<String> generateInvoice(Long orderId){
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {}

        String invoice = "Invoice generated for order: " + orderId + " on thread: "+ Thread.currentThread().getName();
        System.out.println(invoice);
        
        return CompletableFuture.completedFuture(invoice);
    }
}
