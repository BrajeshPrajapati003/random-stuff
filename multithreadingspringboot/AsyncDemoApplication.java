package multithreadingspringboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class AsyncDemoApplication {
    SpringApplication.run(AsyncDemoApplication.class, args);
}
