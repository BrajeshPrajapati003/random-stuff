package scenario3.src.main.java.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "employees")
public class Employee {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String firstName;
    private String lastName;
    private String department;
    private Double salary;

    // Constructors
    public Employee(){}
    
    public Employee(String firstName, String lastName, String department, Double salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = department;
        this.salary = salary;
    }


    // Getters and Setters
}
