package com.charlessilva.repositories.inmem;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.charlessilva.models.ShoppingItem;
import com.charlessilva.repositories.ShoppingItemRepository;

import org.springframework.stereotype.Repository;

@Repository
public class ShoppingItemRepositoryInMem implements ShoppingItemRepository {

	//initial data
	private static List<ShoppingItem> records = new ArrayList<ShoppingItem>(
			Arrays.asList(
					ShoppingItem.builder().id(1L).name("Product A").price(1.23).build(),
					ShoppingItem.builder().id(2L).name("Product B").price(2.23).build(),
					ShoppingItem.builder().id(3L).name("Product C").price(3.23).build()
			));

	public ShoppingItem save(ShoppingItem item) {
		Long id = System.currentTimeMillis();
		item.setId(id);
		records.add(item);
		return item;
	}

	public ShoppingItem findById(Long id) {
		return records.stream().filter(r -> r.getId().equals(id)).findFirst().orElse(null);
	}

	public Boolean delete(Long id) {
		var record = findById(id);
		if (record != null) {
			records.remove(record);
			return true;
		}
		return false;
	}

	public List<ShoppingItem> findAllActive() {
		return records.stream().filter(r -> r.getPurchaseTimestamp() == null).toList();
	}

	public List<ShoppingItem> findAllPurchased() {
		return records.stream().filter(r -> r.getPurchaseTimestamp() != null).toList();
	}

	public Boolean updateTimestamp(Long id, LocalDateTime dt) {
		var record = findById(id);
		if (record == null) {
			return false;
		}
		record.setPurchaseTimestamp(dt);
		return true;
	}
}
