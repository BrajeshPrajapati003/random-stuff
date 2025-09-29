package commandlinrunner;

// lower order has higher priority -> executed first

@Component
@Order(1)
public class FirstRunner implements CommandLineRunner{
    
    @Override
    public void run(String... args){
        System.out.println("First runner executed");
    }
}


@Component
@Order(2)
public class SecondRunner implements CommandLineRunner{

    @Override
    public void run(String... args){
        System.out.println("Second runner executed");
    }
}