package scenario3.src.main.java.service;

import scenario3.src.main.java.dto.EmployeeDTO;
import scenario3.src.main.java.repository.EmployeeRepository;

@Service
public class EmployeeServiceImp implements EmployeeService{
    private final EmployeeRepository employeeRepository;
    
    @Autowired
    public EmployeeServiceImp(EmployeeRepository employeeRepository){
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Page<EmployeeDTO> getEmployeesByDepartment(String dept, Pageable pageable){
        return EmployeeRepository.findByDepartment(dept, pageable)
            .map(emp -> new EmployeeDTO(
                emp.getFirstName() + " " + emp.getLastName(), 
                emp.getDepartment(), 
                emp.getSalary()
            ));
    }
}
