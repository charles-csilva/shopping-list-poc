package com.charlessilva.controllers;

import java.util.ArrayList;
import java.util.List;

import com.charlessilva.dtos.ProductDTO;
import com.charlessilva.mappers.ProductMapper;
import com.charlessilva.models.Product;

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
public class ProductController {

    private static List<Product> data = new ArrayList<Product>();

    @GetMapping()
	public List<ProductDTO> getAllProducts() {
		return data.stream().map(p -> ProductMapper.toDTO(p)).toList();
	}

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ProductDTO createNewProduct(@RequestBody ProductDTO dto) {
        var product = ProductMapper.fromDTO(dto);
        product.setId(System.currentTimeMillis());
        data.add(product);
        return ProductMapper.toDTO(product);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProduct(@PathVariable Long id) {
        data.removeIf(p -> p.getId().equals(id));
    }
}
