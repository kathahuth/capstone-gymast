package de.kathahuth.gymast.service;

import de.kathahuth.gymast.db.GroupMongoDb;
import de.kathahuth.gymast.model.Group;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class GroupServiceTest {

    private final GroupMongoDb mockGroupMongoDb = mock(GroupMongoDb.class);
    private final GroupService groupService = new GroupService(mockGroupMongoDb);

    private Group createDynamicGroup() {
        return Group.builder()
                .id("dynamic-strength")
                .name("Dynamic Strength")
                .build();
    }

    private Group createJumpGroup() {
        return Group.builder()
                .id("jump-and-leaps")
                .name("Jump & Leaps")
                .build();
    }

    @Test
    @DisplayName("List group should return list of difficulty group from mongo db")
    public void listGroups(){

        //Given
        when(mockGroupMongoDb.findAll()).thenReturn(List.of(
                createDynamicGroup(),
                createJumpGroup()));

        //When
        List<Group> groups = groupService.listGroups();

        //Then
        assertThat(groups, containsInAnyOrder(
                createDynamicGroup(),
                createJumpGroup()));
    }

    @Test
    @DisplayName("getGroupById should return group by Id")
    public void getGroupById(){

        //Given
        String groupId = "dynamic-strength";
        when(mockGroupMongoDb.findById("dynamic-strength")).thenReturn(
                Optional.of(createDynamicGroup())
        );

        //When
        Optional<Group> result = groupService.getGroupById(groupId);

        //Then
        assertThat(result.get(), is(createDynamicGroup()));
    }

    @Test
    @DisplayName("getGroupById should return empty Optional for non existing ID")
    public void getGroupByIdShouldReturnEmptyOptional(){

        //Given
        String groupId = "dynamic-strength";
        when(mockGroupMongoDb.findById("dynamic-strength")).thenReturn(
                Optional.empty()
        );

        //When
        Optional<Group> result = groupService.getGroupById(groupId);

        //Then
        assertTrue(result.isEmpty());
    }
}