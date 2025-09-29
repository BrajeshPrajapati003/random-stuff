package multithreadingspringboot.configs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

import java.util.concurrent.Executor;

@Configuration
public class AsyncConfig {
    
    @Bean(name = "taskExecutor")
    public Executor taskExecutor(){
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(5); // min threads
        executor.setMaxPoolSize(10); // max thread
        executor.setQueueCapacity(100); // queue before new threads
        executor.setThreadNamePrefix("MyApp-Async-");
        executor.initialize();
        return executor;

    }
}
