package com.discoodle.api.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
@ToString
@Table(name = "groups")
public class Groups {

    public Groups(Integer depth, String name,String description, TypeOfGroup type) {
        this.depth = depth;
        this.name = name;
        this.description=description;
        this.type = type;
    }

    @Id
    @GeneratedValue
    @Column(name = "groups_id", unique = true, nullable = false)
    private Integer groups_id;

    @Column(name = "depth")
    private Integer depth;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(name = "type_of_group")
    private TypeOfGroup type;

    @OneToMany
    @JoinTable( name = "link_groups_to_group",
            joinColumns = @JoinColumn( name = "groups_id"),
            inverseJoinColumns = @JoinColumn( name = "son_id", referencedColumnName = "groups_id"))
    private List<Groups> underGroups = new ArrayList<>();

    @ManyToMany
    @JoinTable( name = "link_groups_to_user",
            joinColumns = @JoinColumn( name = "groups_id" ),
            inverseJoinColumns = @JoinColumn( name = "user_id" ) )
    private List<User> users = new ArrayList<>();

    @OneToOne
    @JoinColumn(name="groups_rights_id")
    private GroupRights groupRights;

    public enum TypeOfGroup{
        DISCOODLE,
        ESTABLISHMENT,
        FACULTY,
        ADMINISTRATION,
        SUBJECTS,
        CLASS
    }
}
