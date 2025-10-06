package com.learn.employee.dto;


import lombok.*;

// specialized DTO for projections
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class EmployeeSummaryDto {
    private String name;
    private String department;
}
