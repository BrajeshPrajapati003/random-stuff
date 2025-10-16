// 6th October 2k25

import java.lang.annotation.Inherited;

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


// 7 OCTOBER 2K25


// Dynamic User Tracking

@Component
public class SpringSecurityAuditorAware implements AuditorAware<String> {
    @Override
    public Optional<String> getCurrentAuditor(){
        return Optional.ofNullable(
            SecurityContextHolder.getContext().getAuthentication().getName()
        );
    }
}


@MappedSuperClass
@EntityListeners(AuditingEntityListener.class)
public abstract class Auditable<U>{
    @CreatedBy
    private U createdBy;

    @LastModifiedBy
    private U lastModifiedBy;

    @CreateDate
    private LocalDateTime createdDate;

    @LastModifiedDate
    private LocalDateTime lastModifiedDate;
}

public class Employee extends Auditable<String>{
    @Id @GeneratedValue
    private Long id;
    private String name;
}


// 9 OCT 2K25


@Entity 
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Inheritance(strategy = Inheritance.SINGLE_TABLE)
@DiscriminatorColumn(name = "employee_table", discriminatorType = @DiscriminatorType.STRING)
public abstract class Employee{
    @Id GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String department;
    private Double salary;
}

@Entity @DiscriminatorValue("FULL_TIME")
@Getter @Setter
@NorArgsConstructor @AllArgsConstructor
public class FullTimeEmployee extends Employee{
    private Double bonus;
}


@Entity
@DiscriminatorValue("INTERN")
@Getter @Setter
@NorArgsConstructor
@AllArgsConstructor
public class InternEmployee extends Employee{
    private String collegeName;
}


@Transactional
public EmployeeDto createEmployee(Employee emp){
    Employee empDto = empRepo.save(emp);
    return empDto.builder()
    .id(empDto.getId())
    .name(empDto.getName())
    .department(empDto.getDepartment())
    .salary(empDto.getSalary())
    .build();
}


@PostMapping("fulltime")
public EmployeeDto addFullTimeEmployee(@RequestBody FullTimeEmployee emp){
    return empService.createEmployee(emp);
}


@SuperEmployee // Regular @Builder doesn't handle inheritance well; @SuperBuilder does.
public abstract class Employee{

}

@SuperEmployee
public class FullTimeEmployee extends Employee{

}


Pageable pageable = PageRequest.of(page, size, sort.by(sortBy).ascending());

// Dynamic sorting by multiple fields
Sort sort = Sort.by(Sort.Order.asc("title"), Sort.Order.desc("duration"));
Pageable pageable = PageRequest.of(page, size, sort);

Page<Workout> findByDifficultyLevel(String level, Pageable pageable);

public Page<WorkoutDto> getWorkoutsFiltered(String difficulty, Pageable pageable){
    return repo.findByDifficultyLevel(difficulty, pageable)
        .map(this::mapToDto);
}

// Searching
@GetMapping("/search")
public List<WorkoutDto> searchWorkouts(@RequestParam String keyword){
    return service.searchWorkouts(keyword);
}


// service
public List<WorkoutDto> searchWorkouts(String keyword){
    return repo.findByTitleContaininigIgnoreCase(keyword)
        .stream()
        .map(this::mapToDto)
        .toList();
}

// repository
List<Workout> findByTitleContainingIgnoreCase(String title);


// using record instead of a normal class for DTOs
public record EmployeeDto(Long id, String department, String name, Double salary){

}

public EmployeeDto getEmployee(Long id){
    Employee emp = employeeDto.findById(id).orElseThrow();
    return new EmployeeDto(emp.getId(), emp.getName(), emp.getDepartment());
}


EmployeeDto dto = service.getEmployee(1L);
System.out.println(dto.name()); // not getName(), just name()



public record EmployeeDto(Long id, String name, String department, Double salary){
    public EmployeeDto{
        if(salary < 0) throw new IllegalArgumentException("Salary can't be negative");
    }
}


@PostMapping("/employees")
public ResponseEntity<EmployeeDto> create(@RequestBody EmployeeDto dto){
    Employee saved = employeeService.create(dto);
    return ResponseEntity.ok(new EmployeeDto(saved.getId(), saved.getName(), saved.getDepartment(), saved.getSalary()));
}


// Interface based DTO
public interface EmployeeView{
    String getName();
    string getDepartment();
}

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    List<EmployeeView> findAllByDepartment(String department);
}


// Class based DTO
public class EmployeeDto{
    private final String name;
    private final String department;

    public EmployeeDto(String name, String department){
        this.name = name;
        this.department = department;
    }

    // getters
}


@Query("SELECT new com.fitinspiration.dto.EmployeeDto(e.name, e.department) FROM Employee e")
List<EmployeeDto> findEmployeeDetails();


// MapStruct
@Mapper(ComponentModel = "spring")
public interface EmployeeMapper{
    EmployeeDto toDto(Employee entity);
    Employee toEntity(EmployeeDto dto);
}

@Compile 
public class EmployeeMapperImpl implements EmployeeMapper{
    public EmployeeDto toDto(Employee entity){
        if(entity == null) return null;
        return new EmployeeDto(entity.getName(), entity.getDepartment());
    }
}


// ModelMapper
ModelMapper mapper = new ModelMapper();
EmployeeDto dto = mapper.map(employee, EmployeeDto.class);


@Entity
public class User{
    @Id @GeneratedValue
    private Long id;
    private String name;
    private String email;
    private String goal;
}


// Dto
public record UserDto(String name, String email, String goal){}


// Mapper(MapStruct)
public interface UserMapper{
    UserDto toDto(User user);
    User toEntity(UserDto dto);
}


// Service
@Service
public class UserService{
    @Autowired
    private UserRepository repo;
    @Autowired
    private UserMapper mapper;

    public List<UserDto> getAllUsers(){
        return repo.findAll()
            .stream()
            .map(mapper::toDto)
            .toList();
    }
}


// Controller
@RestController
@RequestMapping("/api/users")
public class UserController{
    @Autowired
    private UserService service;

    @GetMapping
    public List<UserDto> getAll(){
        return service.getAllUsers();
    }
}
