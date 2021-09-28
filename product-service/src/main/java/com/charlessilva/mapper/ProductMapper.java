package com.charlessilva.mapper;

import com.charlessilva.dto.ProductDTO;
import com.charlessilva.model.Product;

public class ProductMapper {
    public static ProductDTO toDTO(Product p) {
        return ProductDTO.builder()
        .id(p.getId())
        .name(p.getName())
        .price(p.getPrice())
        .build();
    }

    public static Product fromDTO(ProductDTO p) {
        return Product.builder()
            .id(p.getId())
            .name(p.getName())
            .price(p.getPrice())
            .build();
    }
}
