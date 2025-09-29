package real-world-scenario-1.configs;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class ReportScheduler {
    @Scheduled(cron = " 0 0 0 * * ?") // every midnight
    public void generateDailyReport(){
        System.out.println("Generating report at " + LocalDateTime.now() + " by thread: " + Thread.currentThread().getName());

        // generate PDF, push to S3, etc....
    }

    @Scheduled(fixedRate = 10000) // every 10s (for demo)
    public void heartbeat(){
        System.out.println("Heartbeat check at " + LocalDateTime.now());
    }
}

// Runs automatically without API Call