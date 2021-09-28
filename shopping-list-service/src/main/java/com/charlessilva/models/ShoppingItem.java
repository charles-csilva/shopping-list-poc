package com.charlessilva.models;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Builder
@Setter
public class ShoppingItem {

    private Long id;
    private String name;
    private Double price;
    private LocalDateTime purchaseTimestamp;
}
