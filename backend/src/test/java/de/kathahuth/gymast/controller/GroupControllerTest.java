package de.kathahuth.gymast.controller;

import de.kathahuth.gymast.db.GroupMongoDb;
import de.kathahuth.gymast.model.Group;
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
class GroupControllerTest {

    @LocalServerPort
    private int port;

    private String getUrl() {
        return "http://localhost:" + port + "api/difficulty";
    }

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private GroupMongoDb groupDb;

    @BeforeEach
    public void setup() {
        groupDb.deleteAll();
    }

    @Test
    @DisplayName("Get group should return a list of all difficulty groups")
    public void getAllGroups() {
        //Given
        groupDb.save(new Group("difficultygroup1"));
        groupDb.save(new Group("difficultygroup2"));

        //When
        HttpHeaders headers = new HttpHeaders();
        HttpEntity<Void> entity = new HttpEntity<>(headers);
        ResponseEntity<Group[]> response = testRestTemplate.exchange(getUrl(), HttpMethod.GET, entity, Group[].class);


        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(
                new Group("difficultygroup1"),
                new Group("difficultygroup2")));

    }
}