package com.charlessilva.controllers;

import java.util.ArrayList;
import java.util.List;

import com.charlessilva.dtos.ShoppingListItemDTO;
import com.charlessilva.mappers.ShoppingListItem;
import com.charlessilva.models.ShoppingListItem;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("products")
public class ShoppingListItemController {

    private static List<ShoppingListItem> data = new ArrayList<ShoppingListItem>();

    @GetMapping()
	public List<ShoppingListItemDTO> getAllProducts() {
		return data.stream().map(p -> ShoppingListItem.toDTO(p)).toList();
	}

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ShoppingListItemDTO createNewProduct(@RequestBody ShoppingListItemDTO dto) {
        var product = ShoppingListItem.fromDTO(dto);
        product.setId(System.currentTimeMillis());
        data.add(product);
        return ShoppingListItem.toDTO(product);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProduct(@PathVariable Long id) {
        data.removeIf(p -> p.getId().equals(id));
    }
}
