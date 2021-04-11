package de.kathahuth.gymast.service;

import de.kathahuth.gymast.db.UserMongoDb;
import de.kathahuth.gymast.model.User;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.*;

class UserServiceTest {

    private final UserMongoDb mockUserMongoDb = mock(UserMongoDb.class);
    private final UserService userService = new UserService(mockUserMongoDb);

    private User createUserOne() {
        return User.builder()
                .username("firstUser")
                .gymnastname("Firstname1 Lastname1")
                .difficultyList(List.of("difficulty1, difficulty2"))
                .build();
    }

    private User createUserTwo() {
        return User.builder()
                .username("secondUser")
                .gymnastname("Firstname2 Lastname2")
                .difficultyList(List.of("difficulty3, difficulty4"))
                .build();
    }

    @Test
    @DisplayName("List users should return list of users from db")
    public void listUsers() {
        //GIVEN
        when(mockUserMongoDb.findAll()).thenReturn(List.of(
                createUserOne(),
                createUserTwo()));
        //WHEN
        List<User> users = userService.listUsers();

        //THEN
        assertThat(users, containsInAnyOrder(
                createUserOne(),
                createUserTwo()));
    }

    @Test
    @DisplayName("getUserByUsername should return existing user by username from Db")
    public void getExistingUserByUserName() {
        //GIVEN
        String username = "firstUser";
        when(mockUserMongoDb.findById(username)).thenReturn(
                Optional.of(createUserOne()));

        //WHEN
        Optional<User> userByUsername = userService.getUserByUsername(username);

        //THEN
        assertThat(userByUsername.get(), is(createUserOne()));
        verify(mockUserMongoDb).findById(username);
    }

    @Test
    @DisplayName("getUserByUsername should return empty user when username does not exist in Db")
    public void getNotExistingUser() {
        //GIVEN
        String username = "notExistingUserName";
        when(mockUserMongoDb.findById(username)).thenReturn(
                Optional.empty());

        //WHEN
        Optional<User> userByUsername = userService.getUserByUsername(username);

        //THEN
        assertThat(userByUsername.isEmpty(), is(true));
    }
}