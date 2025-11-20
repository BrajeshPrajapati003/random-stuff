package kafka.model1;

@Service
public class OrderProducer {
    
    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    public void sendOrder(String orderId, String payload){
        kafkaTemplate.send("orders-topic", orderId, payload);
    }
}
