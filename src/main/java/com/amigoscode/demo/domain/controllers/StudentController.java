package com.amigoscode.demo.domain.controllers;

import com.amigoscode.demo.domain.Student;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("students")
public class StudentController {

    @GetMapping
    public List <Student> getAllStudent() {

        return List.of(
                new Student(
                        UUID.randomUUID(),
                        "Bora",
                        "Guven",
                        "guvenbe@gamil.com",
                        Student.Gender.MALE
                ),
                new Student(
                        UUID.randomUUID(),
                        "Brittney",
                        "Guven",
                        "guvenbe@gamil.com",
                        Student.Gender.MALE
                )
        );
    }

}

