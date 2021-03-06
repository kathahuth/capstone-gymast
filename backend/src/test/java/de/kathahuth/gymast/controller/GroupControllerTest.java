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

import java.util.Arrays;
import java.util.List;

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
    private GroupMongoDb groupMongoDb;

    @BeforeEach
    public void setup() {
        groupMongoDb.deleteAll();
    }

    private Group createDynamicGroup() {
        return Group.builder()
                .id("dynamic-strength")
                .name("Dynamic Strength")
                .familyNames(List.of("Push Up Family"))
                .build();
    }

    private Group createJumpGroup() {
        return Group.builder()
                .id("jump-and-leaps")
                .name("Jump & Leaps")
                .familyNames(List.of("Straight Jump Family"))
                .build();
    }

    @Test
    @DisplayName("Get group should return a list of all difficulty groups")
    public void getAllGroups() {
        //Given
        groupMongoDb.save(createDynamicGroup());
        groupMongoDb.save(createJumpGroup());

        //When
        HttpHeaders headers = new HttpHeaders();
        HttpEntity<Void> entity = new HttpEntity<>(headers);
        ResponseEntity<Group[]> response = testRestTemplate.exchange(getUrl(), HttpMethod.GET, entity, Group[].class);


        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(createDynamicGroup(), createJumpGroup()));
    }

    @Test
    @DisplayName("Get Group By Id should return GroupId")
    public void getGroupByIdShouldReturnGroupId(){
        //Given
        String groupId = "dynamic-strength";
        groupMongoDb.save(createDynamicGroup());

        //When
        ResponseEntity<Group> response = testRestTemplate.getForEntity(getUrl() + "/" + groupId, Group.class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(createDynamicGroup()));
    }

    @Test
    @DisplayName("Get non existing Group Difficulty Id should return not found")
    public void getNonExistingGroupByIdReturnsNotFound(){
        //Given
        String groupId = "123456";

        //When
        ResponseEntity<Void> response = testRestTemplate.getForEntity(getUrl() + "/" + groupId, Void.class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.NOT_FOUND));
    }
}