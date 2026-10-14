package com.learning.yt_practice.service;

import com.learning.yt_practice.dto.StudentRequest;
import com.learning.yt_practice.dto.StudentResponse;
import com.learning.yt_practice.dto.StudentSummary;
import com.learning.yt_practice.dto.StudentUpdateRequest;
import com.learning.yt_practice.entity.Student;
import com.learning.yt_practice.mapping.StudentMapper;
import com.learning.yt_practice.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentService {

    private final StudentRepository studentRepository;
    private final StudentMapper mapper;

    public List<StudentResponse> getStudents(){
        return studentRepository.findAll()
                .stream()
                .map(mapper::toResponse)
                .toList();
    }

    public List<StudentSummary> getStudentSummaries(){
        return studentRepository.findAll()
                .stream()
                .map(mapper::toSummary)
                .toList();
    }

    @Transactional
    public void createStudents(List<StudentRequest> requests){
        List<Student> students = requests.stream()
                .map(mapper::toEntity)
                .toList();

        studentRepository.saveAll(students);
    }

    @Transactional
    public StudentResponse updateStudent(StudentUpdateRequest request){
        Student student = studentRepository.findByEmail(request.email());
        student.updateDetails(request);

        return mapper.toResponse(studentRepository.save(student));
    }
}
