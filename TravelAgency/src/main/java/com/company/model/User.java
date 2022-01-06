package com.company.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "age")
    private int age;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "role_id")
    @JsonIgnore
    private Role role;

    @JsonProperty
    public void setRole(Role role) {
        this.role = role;
    }

    @JsonIgnore
    public Role getRole() {
        return role;
    }
}
