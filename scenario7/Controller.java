package scenario7;

import java.util.Optional;

@RestController("/api/v1/")
public class Controller {
    
    @PostMapping
    public ResponseEntity<String> makePayment(
        @RequestHeader("Idempotency-key") String key
    ){

        Optional<IdempotencyRecord> existing = repo.findById(key);

        if(existing.isPresent()){
            return ResponseEntity.ok(existing.get().getResponseBody());
        }

        // Process payment logic
        String response = "Payment Successful";

        repo.save(new IdempotencyRecord(key, response));

        return ResponseEntity.ok(response);
    }

}
