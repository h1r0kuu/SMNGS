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
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User info;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private StudentStatus status;

    @Column(name = "term")
    private Integer term;

    @Column(name = "specialization")
    private String specialization;

    @Column(name = "degree_course")
    private String degreeCourse;

    @Column(name = "birh_date")
    private LocalDate birthDate;

    @Column(name = "address")
    private String address;

    @ManyToOne
    @JoinColumn(name = "group_id")
    private Group group;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Student student = (Student) o;
        return id != null && Objects.equals(id, student.id);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
