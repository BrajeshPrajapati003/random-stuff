package com.learn.employee.service;

import com.learn.employee.dto.EmployeeDto;
import com.learn.employee.dto.EmployeeSummaryDto;
import com.learn.employee.entity.Employee;
import com.learn.employee.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeService {

    private final EmployeeRepository employeeRepo;

    @Transactional
    public EmployeeDto createEmployee(Employee emp){
        Employee saved = employeeRepo.save(emp);
        return EmployeeDto.builder()
                .id(saved.getId())
                .name(saved.getName())
                .department(saved.getDepartment())
                .salary(saved.getSalary())
                .build();
    }

    public Page<EmployeeDto> getAllEmployees(Pageable pageable){
        return employeeRepo.findAll(pageable)
                .map(emp -> new EmployeeDto(emp.getId(), emp.getName(), emp.getDepartment(), emp.getSalary()));
    }

    public List<EmployeeSummaryDto> getHighPaidEmployees(double salary){
        return employeeRepo.findEmployeeWithSalaryGreaterThan(salary);
    }

}
