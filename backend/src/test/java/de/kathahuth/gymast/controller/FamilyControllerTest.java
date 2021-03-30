package de.kathahuth.gymast.controller;

import de.kathahuth.gymast.db.FamilyMongoDb;
import de.kathahuth.gymast.model.Family;
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
class FamilyControllerTest {

    @LocalServerPort
    private int port;

    private String getUrl() {
        return "http://localhost:" + port + "api/family";
    }

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private FamilyMongoDb familyMongoDb;

    @BeforeEach
    public void setup() {
        familyMongoDb.deleteAll();
    }

    private Family createPushUpFamily() {
        return Family.builder()
                .id("push-up-family")
                .name("Push Up Family")
                .categoryNames(List.of("Push Up Category"))
                .build();
    }

    @Test
    @DisplayName("Get Family By Id should return FamilyId")
    public void getFamilyByIdShouldReturnFamilyId(){
        //Given
        String familyId = "push-up-family";
        familyMongoDb.save(createPushUpFamily());

        //When
        ResponseEntity<Family> response = testRestTemplate.getForEntity(getUrl() + "/" + familyId, Family.class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(createPushUpFamily()));
    }

    @Test
    @DisplayName("Get non existing Family Difficulty Id should return not found")
    public void getNonExistingFamilyByIdReturnsNotFound() {
        //Given
        String familyId = "234567";

        //When
        ResponseEntity<Void> response = testRestTemplate.getForEntity(getUrl() + "/" + familyId, Void.class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.NOT_FOUND));
    }
}