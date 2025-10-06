package com.learn.employee.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.learn.employee.entity.Employee;
import com.learn.employee.dto.EmployeeSummaryDto;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface  EmployeeRepository extends JpaRepository<Employee, Long> {
    
    // Derived query
    List<Employee> findByDepartment(String department);

    // Custom JPQL query + DTO Projection
    @Query("SELECT new com.learn.employee.dto.EmployeeSummaryDto(e.name, e.department) FROM Employee e WHERE e.salary > :salary")
    List<EmployeeSummaryDto> findEmployeeWithSalaryGreaterThan(@Param("salary") Double salary);
}
