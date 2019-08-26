package com.amigoscode.demo.service;

import com.amigoscode.demo.domain.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public class StudentDataAccessService {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public StudentDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    List<Student> selectAllStudents(){
//        return List.of(
//                new Student(
//                        UUID.randomUUID(),
//                        "Bora",
//                        "Guven",
//                        "guvenbe@gamil.com",
//                        Student.Gender.MALE
//                ),
//                new Student(
//                        UUID.randomUUID(),
//                        "Brittney",
//                        "Guven",
//                        "guvenbe@gamil.com",
//                        Student.Gender.MALE
//                )
//        );

        String sql="" +
                "  SELECT student_id, " +
                "  first_name, " +
                "  last_name, " +
                "  email, "+
                "  gender " +
                "FROM student";

        return jdbcTemplate.query(sql, mapStudentFromDB());

    }

    private RowMapper <Student> mapStudentFromDB() {
        return (resultSet, i) -> {
            String studentIdStr = resultSet.getString("student_id");
            UUID studentId = UUID.fromString(studentIdStr);

            String firstName = resultSet.getString("first_name");
            String lastName = resultSet.getString("last_name");
            String email = resultSet.getString("email");
            String genderStr = resultSet.getString("gender").toUpperCase();
            Student.Gender gender = Student.Gender.valueOf(genderStr);
            return new Student(studentId, firstName, lastName, email, gender);
        };
    }
}
