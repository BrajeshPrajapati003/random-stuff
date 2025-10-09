package scenario5.fullstack.demo.demo.src.main.java.com.example.demo.service;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepository repo;

    @Transactional
    public EmployeeDto addEmployee(Employee emp){
        Employee saved = repo.save(emp);
        return EmployeeDto.builder()
            .id(saved.getId())
            .name(saved.getName())
            .department(saved.getDepartment())
            .salary(saved.getSalary())
            .build();
    }

    public Page<EmployeeDto> listEmployees(Pageable pageable){
        return repo.findAll(pageable)
            .map(emp -> EmployeeDto.builder()
            .id(emp.getId())
            .department(emp.getDepartment())
            .name(emp.getName())
            .salary(emp.getSalary())
            .build())
    }
}
