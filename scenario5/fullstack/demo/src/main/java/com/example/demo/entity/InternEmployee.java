package scenario5.fullstack.demo.demo.src.main.java.com.example.demo.entity;

@Entity
@DiscriminatorValue("intern")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class InternEmployee extends Employee {
    private String collegeName;
    private Integer internshipMonths;
}
