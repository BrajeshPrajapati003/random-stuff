package commandlinrunner;

import java.util.Arrays;
import commandlinrunner.CommandLineRunner;

@Component
public class MyCommandLineRunner implements CommandLineRuner {
    
    @Override
    public void run(String... args) throws Exception{
        System.out.println("CommandLineRunner executed with args: "+ Arrays.toString(args));
    }
}
