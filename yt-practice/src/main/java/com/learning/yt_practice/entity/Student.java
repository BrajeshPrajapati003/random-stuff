package com.learning.yt_practice.entity;

import com.learning.yt_practice.dto.StudentRequest;
import com.learning.yt_practice.dto.StudentUpdateRequest;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter @Builder
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true, updatable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    public void updateDetails(StudentUpdateRequest dto){

        if(dto.name() != null){
            this.name = dto.name();
        }

        if(dto.password() != null){
            this.password = dto.password();
        }
    }
}
