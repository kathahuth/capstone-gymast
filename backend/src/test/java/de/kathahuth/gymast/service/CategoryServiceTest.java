package de.kathahuth.gymast.service;

import de.kathahuth.gymast.db.CategoryMongoDb;
import de.kathahuth.gymast.model.Category;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.*;

class CategoryServiceTest {

    private final CategoryMongoDb mockCategoryMongoDb = mock(CategoryMongoDb.class);
    private final CategoryService categoryService = new CategoryService(mockCategoryMongoDb);

    private Category createPushUpCategory() {
        return Category.builder()
                .id("push-up-category")
                .name("Push Up Category")
                .categoryNames(List.of("Push Up"))
                .build();
    }

    private Category createAFrameCategory() {
        return Category.builder()
                .id("a-frame-category")
                .name("A-Frame Category")
                .categoryNames(List.of("Explosive A-Frame"))
                .build();
    }

    @Test
    @DisplayName("List category should return list of difficulty category from mongo db")
    public void listCategories() {

        //Given
        when(mockCategoryMongoDb.findAll()).thenReturn(List.of(
              createPushUpCategory(),
              createAFrameCategory()));

        //When
        List<Category> categories = categoryService.listCategories();

        //Then
        assertThat(categories, containsInAnyOrder(
                createPushUpCategory(),
                createAFrameCategory()));
    }

    @Test
    @DisplayName("getCategoryById should return category by Id")
    public void getCategoryById(){

        //Given
        String categoryId = "push-up-category";
        when(mockCategoryMongoDb.findById(categoryId)).thenReturn(
                Optional.of(createPushUpCategory()));

        //When
        Optional<Category> result = categoryService.getCategoryById(categoryId);

        //Then
        assertThat(result.get(), is(createPushUpCategory()));
        verify(mockCategoryMongoDb).findById(categoryId);
    }

    @Test
    @DisplayName("getCategoryById should return empty Optional for non existing ID")
    public void getCategoryByIdShouldReturnEmptyOptional(){

        //Given
        String categoryId = "push-up-category";

        when(mockCategoryMongoDb.findById(categoryId)).thenReturn(
                Optional.empty());

        //When

        Optional<Category> result = categoryService.getCategoryById(categoryId);

        //Then
        assertTrue(result.isEmpty());
    }

}