package real-world-scenario-1.controller;

import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping("/data")
public class DataController {
    
    @Autowired
    private DataService dataService;

    @GetMapping("/fetchAll")
    public String fetchAllData() throws Exception{
        CompletableFuture<String> profile = dataService.fetchProfile();
        CompletableFuture<String> transactions = dataService.fetchTransactions();
        CompletableFuture<String> recommendations = dataService.fetchRecommendations();

        // Wait until all tasks are done
        CompletableFuture.allOf(profile, transactions, recommendations);

        return profile.get() + " | " + transactions.get() + " | " + recommendations.get();
    }
}
