package com.smnas.backend.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "\"group\"")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Group {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "group_term")
    private Integer groupTerm;

    @OneToMany(mappedBy = "group")
    private List<Student> students;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getGroupTerm() {
        return groupTerm;
    }

    public void setGroupTerm(Integer groupTerm) {
        this.groupTerm = groupTerm;
    }
}
