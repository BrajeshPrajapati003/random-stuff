package kafka.model3;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class Configuration {

    // NOTE: prevents duplicates even under retry storms
    
    @Bean
    public ProducerFactory<String, String> producerFactory(){
        Map<String, Object> config = new HashMap<>();
        config.put(producerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        config.put(ProducerConfig.ENABLE_IDEMPOTENCE_CONFIG, true);
        config.put(ProducerConfig.ACKS_CONFIG, "all");
        config.put(ProducerConfig.RETRIES_CONFIG, Integer.MAX_VALUE);
        config.put(ProducerConfig.MAX_IN_FLIGHT_REQUESTS_PER_CONNECTION, 1);

        return new DefaultKafkaProducerFactory<>(config);
    }
}
