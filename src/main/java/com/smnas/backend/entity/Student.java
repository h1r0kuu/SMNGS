package com.smnas.backend.entity;

import com.smnas.backend.enums.StudentStatus;
import lombok.*;
import org.hibernate.Hibernate;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name = "student")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@PrimaryKeyJoinColumn(name="user_id")
public class Student extends User {

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private StudentStatus status;

    @Column(name = "term")
    private Integer term;

    @Column(name = "specialization")
    private String specialization;

    @Column(name = "degree_course")
    private String degreeCourse;

    @Column(name = "birth_date")
    private LocalDate birthDate;

    @Column(name = "father_name")
    private String fatherName;

    @Column(name = "father_mobile")
    private String fatherMobile;

    @Column(name = "father_email")
    private String fatherEmail;

    @Column(name = "mother_name")
    private String motherName;

    @Column(name = "mother_mobile")
    private String motherMobile;

    @Column(name = "mother_email")
    private String motherEmail;

    @Column(name = "present_address")
    private String presentAddress;

    @Column(name = "permanent_address")
    private String permanentAddress;

    @ManyToOne
    @JoinColumn(name = "group_id")
    private Group group;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Student student = (Student) o;
        return getId() != null && Objects.equals(getId(), student.getId());
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
