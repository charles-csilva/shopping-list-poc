package com.charlessilva.mappers;

import com.charlessilva.dtos.ShoppingListItemDTO;
import com.charlessilva.models.ShoppingListItem;

public class ShoppingListItem {
    public static ShoppingListItemDTO toDTO(ShoppingListItem p) {
        return ShoppingListItemDTO.builder()
        .id(p.getId())
        .name(p.getName())
        .price(p.getPrice())
        .build();
    }

    public static ShoppingListItem fromDTO(ShoppingListItemDTO p) {
        return ShoppingListItem.builder()
            .id(p.getId())
            .name(p.getName())
            .price(p.getPrice())
            .build();
    }
}
