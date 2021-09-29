package com.charlessilva.controllers;

import java.time.LocalDateTime;
import java.util.List;

import com.charlessilva.dtos.ShoppingItemDTO;
import com.charlessilva.mappers.ShoppingListItemMapper;
import com.charlessilva.repositories.ShoppingItemRepository;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("shopping-item")
@CrossOrigin(origins = "*")
public class ShoppingItemController {

    @Autowired
    private ShoppingItemRepository shoppingItemRepository;

    @GetMapping()
    public List<ShoppingItemDTO> getAllShopListItems(
            @RequestParam(name = "completed", defaultValue = "false") Boolean completed) {
        var data = completed ? shoppingItemRepository.findAllPurchased() : shoppingItemRepository.findAllActive();
        return data.stream().map(p -> ShoppingListItemMapper.toDTO(p)).toList();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ShoppingItemDTO createNewShopListItem(@RequestBody ShoppingItemDTO dto) {
        var item = ShoppingListItemMapper.fromDTO(dto);
        return ShoppingListItemMapper.toDTO(shoppingItemRepository.save(item));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteShopListItem(@PathVariable Long id) {
        if (!shoppingItemRepository.delete(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PatchMapping("/{id}/purchased")
    public ResponseEntity markAsPurchased(@PathVariable Long id) {
        var record = shoppingItemRepository.findById(id);

        if (record == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        if (record.getPurchaseTimestamp() != null) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        shoppingItemRepository.updateTimestamp(id, LocalDateTime.now());
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
