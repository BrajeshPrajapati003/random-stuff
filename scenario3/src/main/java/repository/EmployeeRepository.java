package scenario3.src.main.java.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import scenario3.src.main.java.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Page<Employee> findByDepartment(String department, Pageable pageable);
}
