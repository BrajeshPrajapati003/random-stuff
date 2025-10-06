package com.learn.employee.entity;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("CONTRACT")
public class ContractEmployee extends Employee {
    private Integer contractDuration; // Months
}
