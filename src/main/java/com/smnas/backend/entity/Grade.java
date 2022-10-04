package com.smnas.backend.entity;

import com.smnas.backend.enums.GradeType;
import lombok.*;
import org.hibernate.Hibernate;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name = "grade")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Grade grade = (Grade) o;
        return id != null && Objects.equals(id, grade.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
