package kafka.model1;

@Service
public class OrderConsumer {
    
    @KafkaListener(topics = "orders-topics", groupId = "order-service")
    public void consumerOrder(String message){
        System.out.println("Received -> " + message);
    }
}
