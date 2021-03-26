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

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.arrayContainingInAnyOrder;
import static org.hamcrest.Matchers.is;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class FamilyControllerTest {

    @LocalServerPort
    private int port;

    private String getUrl() {
        return "http://localhost:" + port + "api/difficulty/groupId";
    }

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private FamilyMongoDb familyMongoDb;

    @BeforeEach
    public void setup() {
        familyMongoDb.deleteAll();}

    private Family createPushUpFamily() {
        return Family.builder()
                .id("push-up-family")
                .name("Push Up Family")
                .build();
    }

    private Family createExplosivePushUpFamily() {
        return Family.builder()
                .id("explosive-push-up-family")
                .name("Explosive Push Up Family")
                .build();
    }

    @Test
    @DisplayName("Get family should return a list of all difficulty families")
    public void getAllFamilies(){
        //Given
        familyMongoDb.save(createPushUpFamily());
        familyMongoDb.save(createExplosivePushUpFamily());

        //When
        HttpHeaders headers = new HttpHeaders();
        HttpEntity<Void> entity = new HttpEntity<>(headers);
        ResponseEntity<Family[]> response = testRestTemplate.exchange(getUrl(), HttpMethod.GET, entity, Family[].class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(createPushUpFamily(), createExplosivePushUpFamily()));
    }

    @Test
    @DisplayName("Get Family By Id should return FamilyId")
    public void getFamilyById(){
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