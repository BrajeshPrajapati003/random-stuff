package com.learn.employee.controller;


import com.learn.employee.dto.EmployeeDto;
import com.learn.employee.dto.EmployeeSummaryDto;
import com.learn.employee.entity.ContractEmployee;
import com.learn.employee.entity.Employee;
import com.learn.employee.entity.FullTimeEmployee;
import com.learn.employee.entity.InternEmployee;
import com.learn.employee.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
@RequiredArgsConstructor
public class EmployeeController {
    private final EmployeeService employeeService;

    @PostMapping("/fulltime")
    public EmployeeDto addFullTimeEmployee(@RequestBody FullTimeEmployee employee){
        return employeeService.createEmployee(employee);
    }

    @PostMapping("/intern")
    public EmployeeDto addInternEmployee(@RequestBody InternEmployee employee){
        return employeeService.createEmployee(employee);
    }

    @PostMapping("/contract")
    public EmployeeDto addContractEmployee(@RequestBody ContractEmployee employee){
        return employeeService.createEmployee(employee);
    }

    @GetMapping
    public Page<EmployeeDto> listEmployees(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "asc") String direction){

        Pageable pageable = PageRequest.of(page, size,
                direction.equalsIgnoreCase("asc") ?
                        Sort.by(sortBy).ascending() : Sort.by(sortBy).descending()
        );

        return  employeeService.getAllEmployees(pageable);
    }

    @GetMapping("/high-salary")
    public List<EmployeeSummaryDto> highPaidEmployees(@RequestParam double salary){
        return employeeService.getHighPaidEmployees(salary);
    }
}
