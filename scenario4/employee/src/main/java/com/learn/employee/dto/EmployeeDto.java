package com.learn.employee.dto;

import lombok.*;

// We don't expose full entity -> instead use DTOs
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
public class EmployeeDto {
    private Long id;
    private String name;
    private String department;
    private Double salary;
}
