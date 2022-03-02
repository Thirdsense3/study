package com.msh.stockChart.Dao;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Member {

    public Member(Long id, String pw, String name) {
        this.id = id;
        this.pw = pw;
        this.name = name;
    }

    private Long id;
    private String pw;
    private String name;

}