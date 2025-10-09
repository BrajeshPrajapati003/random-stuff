package scenario5.fullstack.demo.src.main.java.com.example.demo.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {
    @Bean
    public new WebMvcConfigurer(){
        @Override
        public void addCorsMappings(CorsRegistry registry){
            registry.addMapping("/**").allowedOrigins("http://localhost:3000");
        }
    }
}
