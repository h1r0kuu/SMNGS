package com.smnas.backend.entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "teacher")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@PrimaryKeyJoinColumn(name="user_id")
public class Teacher extends User {

    @Column(name = "qualification")
    private String qualification;

    @ManyToMany(mappedBy = "teachers")
    @ToString.Exclude
    private List<Group> groups;

    @OneToMany(mappedBy = "teacher")
    @ToString.Exclude
    private List<TeacherSubject> teacherSubjects;
}
