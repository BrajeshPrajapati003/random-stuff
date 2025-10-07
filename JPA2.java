// 6th October 2k25

public class JPA2 {
    
}

@Configuration
@EnableJpaAuditing(AuditorAwareRef = "auditorProvider")
public class JpaConfig{ }


@Configuration
@EnableJpaAuditing(AuditorAwareRef = "auditorProvider")
public class JpaConfig{ }


@Component
public class AuditorAwareImpl implements AuditorAware<String> {
    @Override
    public Optional<String> getCurrentAuditor(){
        return Optional.of("system-user"); // or fetch form SecurityContext
    }
}

@Bean
public AuditorAware<String> auditorProvider(){
    return new AuditorAwareImpl();
}

@Entity
public class Student{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private string name;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @PrePersist
    public void onCreate(){
        createdAt = LocalDateTime.now();
    }

    @PreUpdate
    public void onUpdate(){
        updatedAt = LocalDateTime.now();
    }
}


public class AuditListener{
    @PrePersist
    public void prePersist(Object e){
        System.out.println("Before insert: " + e);
    }
}

@Entity
@EntityListeners(AuditListener.class)
public class Student{
    @Id
    @GeneratedValue
    private Long id;
    private String name;
}


Student s = new Student("John"); // Transient

em.persistent(s); // Becomes managed
s.setName("Johnny"); // Managed -> dirty checking -> update on commit

em.detach(s); // Detached
s.setName("Mike"); // Won't update DB

em.merge(s); // Back to managed, update is tracked again
em.remove(s); // removedl, will be deleted on commit


