package com.charlessilva.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Builder
@Setter
public class Product {
    private Long id;
    private String name;
    private Double price;
}
