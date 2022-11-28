package com.smngs.backend.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "group_subject")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class GroupSubject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "group_id")
    private Group group;

    @ManyToOne
    @JoinColumn(name = "teacher_subject_id")
    private TeacherSubject teacherSubject;
}
