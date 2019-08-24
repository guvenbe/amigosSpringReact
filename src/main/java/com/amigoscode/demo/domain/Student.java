package com.amigoscode.demo.domain;

import java.util.UUID;

public class Student {
    private final UUID studentId;
    private final String firstName;
    private final String lastName;
    private final String email;
    private final Gender gender;

    public Student(UUID studendId,
                   String firstName,
                   String lastName,
                   String email,
                   Gender gender)
    {
        this.studentId = studendId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
    }

    public enum Gender{MALE, FEMALE}

    public UUID getStudentId() {
        return studentId;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public Gender getGender() {
        return gender;
    }

}
