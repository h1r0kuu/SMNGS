package com.smnas.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "lesson_date")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class LessonDate {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

//    TODO: one group to many lesson date
//    TODO: one teacher to many lesson date
//
}
