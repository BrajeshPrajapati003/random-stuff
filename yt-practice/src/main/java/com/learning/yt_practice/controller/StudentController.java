package com.learning.yt_practice.controller;

import com.learning.yt_practice.dto.StudentResponse;
import com.learning.yt_practice.entity.Student;
import com.learning.yt_practice.mapping.StudentMapper;
import com.learning.yt_practice.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class StudentController {

    private final StudentRepository repository;
    private final StudentMapper mapper;

    @GetMapping("/student/{id}")
    public StudentResponse getStudent(
            @PathVariable Long id
    ){
        Student student = repository.findById(id)
                .orElseThrow(IllegalArgumentException::new);
        return mapper.toResponse(student);
    }

    @GetMapping("/students")
    public List<StudentResponse> getStudents(){
        return repository.findAll()
                .stream()
                .map(mapper::toResponse) // .map(student -> new StudentDto(...)
                .toList();
    }

    @PatchMapping("/me")
    public StudentResponse updateStudent(

    )

}

