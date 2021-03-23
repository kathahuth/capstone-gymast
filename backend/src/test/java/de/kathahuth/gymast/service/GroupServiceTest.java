package de.kathahuth.gymast.service;

import de.kathahuth.gymast.db.GroupMongoDb;
import de.kathahuth.gymast.model.Group;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class GroupServiceTest {

    private final GroupMongoDb groupDb = mock(GroupMongoDb.class);
    private final GroupService groupService = new GroupService(groupDb);

    @Test
    @DisplayName("List group should return list of difficulty group from mongo db")
    public void listGroups(){
        //Given
        when(groupDb.findAll()).thenReturn(List.of(
                new Group("difficultygroup1"),
                new Group("difficultygroup2")));

        //When
        List<Group> groups = groupService.listGroups();

        //Then
        assertThat(groups, containsInAnyOrder(
                new Group("difficultygroup1"),
                new Group("difficultygroup2")));
    }
}