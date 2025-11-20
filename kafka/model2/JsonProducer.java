package kafka.model2;

@Service
public class JsonProducer {
    
    @Autowired
    private KafkaTemplate<String, OrderEvent> template;

    public void sendEvent(OrderEvent event){
        template.send("order-events", event.getOrderId(), event);
    }
}
