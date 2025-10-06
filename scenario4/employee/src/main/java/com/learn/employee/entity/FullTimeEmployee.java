package com.learn.employee.entity;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@DiscriminatorValue("FULL_TIME")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FullTimeEmployee extends Employee {
    private Double bonus;
}
