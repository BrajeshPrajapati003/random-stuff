package scenario7;

@Entity
public class IdempotencyRecord {
    
    @Id
    private String idempotencyKey;

    private String reponseBody;
}
