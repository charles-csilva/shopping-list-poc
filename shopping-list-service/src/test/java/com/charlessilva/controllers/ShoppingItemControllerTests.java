package com.charlessilva.controllers;

import com.charlessilva.models.ShoppingItem;
import com.charlessilva.repositories.ShoppingItemRepository;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.*;

import java.util.Arrays;
import java.util.List;

import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import static org.junit.Assert.*;

@ExtendWith(SpringExtension.class)
@SpringBootTest
class ShoppingItemControllerTest {

    @Mock
    private ShoppingItemRepository repository;

    @InjectMocks
    private ShoppingItemController controller;

    private List<ShoppingItem> mockItems = Arrays.asList(ShoppingItem.builder().id(1L).name("Product A").price(1.23).build());

    @Test
    void getAllCompleted() {
        when(repository.findAllPurchased())
                .thenReturn(mockItems);
        var response = controller.getAllShopListItems(true);
        verify(repository, Mockito.times(0)).findAllActive();
        verify(repository, Mockito.times(1)).findAllPurchased();
        assertTrue(response.size() == 1);
        var item = mockItems.get(0);
        assertTrue(response.get(0).getId().equals(item.getId()));
        assertTrue(response.get(0).getName().equals(item.getName()));
        assertTrue(response.get(0).getPrice().equals(item.getPrice()));
    }

    @Test
    void getAllActive() {
        when(repository.findAllActive())
                .thenReturn(mockItems);
        var response = controller.getAllShopListItems(false);
        verify(repository, Mockito.times(1)).findAllActive();
        verify(repository, Mockito.times(0)).findAllPurchased();
        assertTrue(response.size() == 1);
        var item = mockItems.get(0);
        assertTrue(response.get(0).getId().equals(item.getId()));
        assertTrue(response.get(0).getName().equals(item.getName()));
        assertTrue(response.get(0).getPrice().equals(item.getPrice()));
    }

}