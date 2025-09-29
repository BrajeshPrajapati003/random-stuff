package commandlinrunner;

@Component
public class MyApplicationRunner implements ApplicationRunner {
    
    @Override
    public void run(ApplicationArguments args) throws Exception{
        System.out.println("ApplicationRunner executed");
        System.out.println("Option names: "+ args.getOptionNames());
        System.out.println("Non-option args: " + args.getNonOptionArgs());
    }
}
