package com.smnas.backend.entity;

import com.smnas.backend.enums.GradeType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "grade")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Grade {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "grade")
    private Float grade;

    @Column(name = "grade_date")
    private LocalDate gradeDate;

    @Column(name = "type")
    @Enumerated(EnumType.STRING)
    private GradeType gradeType;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student students;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Float getGrade() {
        return grade;
    }

    public void setGrade(Float grade) {
        this.grade = grade;
    }

    public LocalDate getGradeDate() {
        return gradeDate;
    }

    public void setGradeDate(LocalDate gradeDate) {
        this.gradeDate = gradeDate;
    }

    public GradeType getGradeType() {
        return gradeType;
    }

    public void setGradeType(GradeType gradeType) {
        this.gradeType = gradeType;
    }
}
