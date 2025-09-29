package real-world-scenario-1.service;

import org.springframework.stereotype.Service;
import org.springframework.scheduling.annotation.Async;
import java.util.concurrent.CompletableFuture;

@Service
public class DataService {
    
    @Async("tastExecutor")
    public CompletableFuture<String> fetchProfile() throws InterruptedException{
        Thread.sleep(2000);
        return CompletableFuture.completedFuture("Profile loaded by " + Thread.currentThread().getName());
    }

    @Async("taskExecutor")
    public CompletableFuture<String> fetchTransactions() throws InterruptedException{
        Thread.sleep(3000);
        return CompletableFuture.completedFuture("Transactions loaded by " + Thread.currentThread().getName());
    }

    @Async
    public CompletableFuture<String> fetchRecommendations() throws InterruptedException{
        Thread.sleep(1000);
        return CompletableFuture.completedFuture("Recommendations loaded by " + Thread.currentThread().getName());
    }
}
