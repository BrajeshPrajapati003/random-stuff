package actuator;

@Component
public class ExternalServiceHealthIndicator implements HealthIndicator{
    
    @Override
    public Health health(){
        boolean serviceUp = checkService();
        if(serviceUp){
            return Health.up().withDetail("ExternalService", "Available");
        }
        return Health.down().withDetail("ExternalService", "Not reachable");
    }
}

// ! Secure Actuator Endpoints
// .requestMatchers("/actuator/health").permitAll()
// .requestMatchers("/actuator/**").hasRole("ADMIN")

// health endpoint => public (needed by infra)
// Other endpoints => admin-only


// Logs -> What happened
// Actuator -> Current state
// Metrics -> Trends & Performance
// Tracing -> Request flow

