package com.charlessilva.repositories;

import java.time.LocalDateTime;
import java.util.List;

import com.charlessilva.models.ShoppingItem;

public interface ShoppingItemRepository {
    ShoppingItem save(ShoppingItem item);
	ShoppingItem findById(Long id);
	Boolean delete(Long id);
	List<ShoppingItem> findAll();
	Boolean updateTimestamp(Long id, LocalDateTime dt);
}
