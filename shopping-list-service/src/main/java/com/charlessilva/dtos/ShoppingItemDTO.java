package com.charlessilva.dtos;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class ShoppingItemDTO {
    private Long id;
    private String name;
    private Double price;
    private LocalDateTime purchaseTimestamp;
}
