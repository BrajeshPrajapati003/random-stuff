package scenario3.src.main.java.controller;

import java.security.Provider;

import scenario3.src.main.java.service.EmployeeService;
import scenario3.src.main.java.dto.EmployeeDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    
    private final EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService){
        this.employeeService = employeeService;
    }

    @GetMapping
    public Page<EmployeeDTO> getEmployees(
        @RequestParam String department,
        @RequestParam(defaultValue = "0") int page,
        @RequestParam(defaultValue = "10") int size,
        @RequestParam(defaultValue = "firstName") String sortBy,
        @RequestParam(defaultValue = "asc") String sortDir
    ){
        Sort sort = sortDir.equals("asc") ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending();
        PageRequest pageRequest = PageRequest.of(page, size, sort);
        return employeeService.getEmployeesByDepartment(department, pageRequest);
    }
}
