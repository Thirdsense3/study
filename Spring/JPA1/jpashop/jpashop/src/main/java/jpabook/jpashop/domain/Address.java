package jpabook.jpashop.domain;

import lombok.Getter;

import javax.persistence.Embeddable;

@Embeddable
@Getter
public class Address {

    private String city;
    private String name;
    private String zipcode;

    protected Address() {
        
    }

    public Address(String city, String name, String zipcode) {
        this.city = city;
        this.name = name;
        this.zipcode = zipcode;
    }
}
