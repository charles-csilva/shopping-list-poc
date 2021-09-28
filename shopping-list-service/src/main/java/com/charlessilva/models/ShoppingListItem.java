package com.charlessilva.models;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Builder
@Setter
public class ShoppingListItem {
    private Long id;
    private String name;
    private Double price;
}