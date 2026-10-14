package com.learning.yt_practice.repository;

import com.learning.yt_practice.dto.StudentUpdateRequest;
import com.learning.yt_practice.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {

    public Student findByEmail(String email);
}

