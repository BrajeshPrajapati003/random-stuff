package scenario5.fullstack.demo.demo.src.main.java.com.example.demo.entity;

@Entity
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@DiscriminatorValue("fulltime")
public class FullTimeEmployee extends Employee {
    private Double bonus;
}
