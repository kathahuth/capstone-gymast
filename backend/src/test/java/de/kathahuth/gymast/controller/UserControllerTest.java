package de.kathahuth.gymast.controller;

import de.kathahuth.gymast.db.UserMongoDb;
import de.kathahuth.gymast.model.User;
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
class UserControllerTest {

    @LocalServerPort
    private int port;

    private String getUrl() {
        return "http://localhost:" + port + "api/gymnast";
    }

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private UserMongoDb userMongoDb;

    @BeforeEach
    public void setup() {
        userMongoDb.deleteAll();
    }

    private User createUserOne() {
        return User.builder()
                .username("firstUser")
                .gymnastname("Firstname1 Lastname1")
                .build();
    }

    private User createUserTwo() {
        return User.builder()
                .username("secondUser")
                .gymnastname("Firstname2 Lastname2")
                .build();
    }

    @Test
    @DisplayName("Get user should return a list of all users")
    public void getAllUsers(){
        //Given
        userMongoDb.save(createUserOne());
        userMongoDb.save(createUserTwo());

        //When
        HttpHeaders headers = new HttpHeaders();
        HttpEntity<Void> entity = new HttpEntity<>(headers);
        ResponseEntity<User[]> response = testRestTemplate.exchange(getUrl(), HttpMethod.GET, entity, User[].class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), arrayContainingInAnyOrder(createUserOne(), createUserTwo()));
    }

    @Test
    @DisplayName("Get user by username should return user from Db")
    public void getUserByUsername() {
        //Given
        userMongoDb.save(createUserOne());
        userMongoDb.save(createUserTwo());

        //When
        HttpHeaders headers = new HttpHeaders();
        HttpEntity<Void> entity = new HttpEntity<>(headers);
        ResponseEntity<User> response = testRestTemplate.exchange(getUrl() + "/secondUser", HttpMethod.GET, entity, User.class);

        //THEN
        assertThat(response.getStatusCode(), is(HttpStatus.OK));
        assertThat(response.getBody(), is(createUserTwo()));
    }

    @Test
    @DisplayName("Get user by username should return not found 404 when user does not exist in Db")
    public void getUserByUsernameNotFound() {
        //Given
        userMongoDb.save(createUserOne());
        userMongoDb.save(createUserTwo());

        //When
        HttpHeaders headers = new HttpHeaders();
        HttpEntity<Void> entity = new HttpEntity<>(headers);
        ResponseEntity<Void> response = testRestTemplate.exchange(getUrl() + "/unknownUser", HttpMethod.GET, entity, Void.class);

        //Then
        assertThat(response.getStatusCode(), is(HttpStatus.NOT_FOUND));
    }
}