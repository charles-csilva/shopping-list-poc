package com.charlessilva.dtos;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class ProductDTO {
    private Long id;
    private String name;
    private Double price;
}
