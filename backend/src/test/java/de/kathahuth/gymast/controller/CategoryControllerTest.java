package de.kathahuth.gymast.controller;

import de.kathahuth.gymast.db.CategoryMongoDb;
import de.kathahuth.gymast.model.Category;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class CategoryControllerTest {

    @LocalServerPort
    private int port;

    private String getUrl() {
        return "http://localhost:" + port + "/api/category";
    }

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private CategoryMongoDb categoryMongoDb;

    @BeforeEach
    public void setup() {
        categoryMongoDb.deleteAll();
    }

    private Category createPushUpCategory() {
        return Category.builder()
                .id("push-up-category")
                .name("Push Up Category")
                .categoryNames(List.of("Push Up"))
                .build();
    }

    @Test
    @DisplayName("Get Category By Id should return CategoryId")
    public void getCategoryByIdShouldReturnCategoryId(){

        //Given
        String categoryId = "push-up-category";
        categoryMongoDb.save(createPushUpCategory());

        //When
        ResponseEntity<Category> response = testRestTemplate.getForEntity(getUrl() + "/" + categoryId, Category.class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(createPushUpCategory()));
    }

    @Test
    @DisplayName("Get non existing Category Difficulty Id should return not found")
    public void getNonExistingCategoryByIdReturnsNotFound() {

        //Given
        String categoryId = "456789";

        //When
        ResponseEntity<Void> response = testRestTemplate.getForEntity(getUrl() + "/" + categoryId, Void.class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.NOT_FOUND));
    }

}