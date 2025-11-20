package kafka.model2;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderEvent {
    private String orderId;
    private String status;
    private long timestamp;
}
