package com.learning.yt_practice.mapping;

import com.learning.yt_practice.dto.StudentRequest;
import com.learning.yt_practice.dto.StudentResponse;
import com.learning.yt_practice.dto.StudentSummary;
import com.learning.yt_practice.entity.Student;
import org.springframework.stereotype.Component;

@Component
public class StudentMapper {

    public StudentResponse toResponse(Student student){
        return new StudentResponse(
                student.getId(),
                student.getName(),
                student.getEmail()
        );
    }

    public StudentSummary toSummary(Student student){
        return new StudentSummary(
                student.getId(),
                student.getName()
        );
    }


    public Student toEntity(StudentRequest dto){
        return Student.builder()
                .email(dto.email())
                .name(dto.name())
                .password(dto.password())
                .build();

    }

}
