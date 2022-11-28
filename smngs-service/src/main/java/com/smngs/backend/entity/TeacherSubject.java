package com.smngs.backend.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "teacher_subject")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class TeacherSubject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;

    @ManyToOne
    @JoinColumn(name = "subject_id")
    private Subject subject;
}
