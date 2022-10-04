package com.smnas.backend.entity;

import com.smnas.backend.enums.GradeType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

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

    @Column(name = "updated_at")
    @UpdateTimestamp
    private LocalDateTime updatedAt;
}
