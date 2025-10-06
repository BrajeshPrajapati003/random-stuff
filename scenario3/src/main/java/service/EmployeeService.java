package scenario3.src.main.java.service;

import scenario3.src.main.java.dto.EmployeeDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface  EmployeeService {
    Page<EmployeeDTO> getEmployeesByDepartment(String dept, Pageable pageable);
}
