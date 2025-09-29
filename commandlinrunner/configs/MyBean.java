package commandlinrunner.configs;

@Component
public class MyBean {
    
    @PostConstruct
    public void init(){
        System.out.println("Bean initialized with @PostConstruct");
    }
}
