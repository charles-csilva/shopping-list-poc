package com.charlessilva.mappers;

import com.charlessilva.dtos.ShoppingItemDTO;
import com.charlessilva.models.ShoppingItem;

public class ShoppingListItemMapper {
    public static ShoppingItemDTO toDTO(ShoppingItem p) {
        return ShoppingItemDTO.builder()
        .id(p.getId())
        .name(p.getName())
        .price(p.getPrice())
        .purchaseTimestamp(p.getPurchaseTimestamp())
        .build();
    }

    public static ShoppingItem fromDTO(ShoppingItemDTO p) {
        return ShoppingItem.builder()
            .id(p.getId())
            .name(p.getName())
            .price(p.getPrice())
            .build();
    }
}
