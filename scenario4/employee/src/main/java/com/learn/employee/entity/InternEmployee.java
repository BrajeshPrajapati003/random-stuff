package com.learn.employee.entity;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@DiscriminatorValue("INTERN")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class InternEmployee extends Employee {
    private String collegeName;
}
