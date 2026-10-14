// Enable Async support
@SpringBootApplication
@EnableAsync
public class MyApplication{
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}

@Service
public class EmailService{
    
    @Async
    public void sendEmail(String to){
        System.out.println("Sending email to " + to + " in thread: " + Thread.currentThread().getName());
    }
}


@RestController
public class MyController{
    
    @Autowired
    private EmailService emailservice;

    @GetMapping("/send")
    public String sendMail(){
        emailservice.sendEmail("prajapatibrajesh003@gmail.com");
        return "Mail triggered!";
    }
}

// Request will return immediately, while the email task runs in a separate thread.

// Custom ThreadPool

@Configuration
public class AsyncConfig{

    @Bean(name = "taskExecutor")
    public Executor taskExecutor(){
        ThreadPoolExecutor executor = new ThreadPoolExecutor();
        executor.setCorePoolSize(5);
        executor.setMaxPoolSize(10);
        executor.setQueueCapacity(100);
        executor.setThreadNamePrefix("MyApp-Async-");
        executor.initialize();
        return executor;
    }
}

@Async("taskExecutor")
public void sendEmail(String to){...}

