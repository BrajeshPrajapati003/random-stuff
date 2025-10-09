package scenario5.fullstack.demo.demo.src.main.java.com.example.demo.dto;

@Getter @Setter 
@Builder
@NoArgsConstructor
@AllArgsConstructor
public record EmployeeDto {
    private Long id;
    private String name;
    private String department;
    private Double salary;
}
