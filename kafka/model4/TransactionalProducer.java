package kafka.model4;

@Service
public class TransactionalProducer {
    private final KafkaTemplate<String, String> template;

    public TransactionalProducer(KafkaTemplate<String, String> template){
        this.template = template;
        this.template.setTransactionIdPrefix("order-txn-");
    }

    public void sendEventTransactionally(String key, String value){
        template.executeInTransaction(operations -> {
            operations.send("order-txn-topic", key, value);
            return true;
        });
    }
}
