package kafka.model2;

@service
public class JsonConsumer {
    
    @KafkaListener(topics = "order-events", groupId = "analytics")
    public void consume(OrderEvent event){
        System.out.println("Received JSON: " + event);
    }
}
