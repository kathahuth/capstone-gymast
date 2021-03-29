package de.kathahuth.gymast.service;

import de.kathahuth.gymast.db.FamilyMongoDb;
import de.kathahuth.gymast.model.Family;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class FamilyServiceTest {

    private final FamilyMongoDb mockFamilyMongoDb = mock(FamilyMongoDb.class);
    private final FamilyService familyService = new FamilyService(mockFamilyMongoDb);

    private Family createPushUpFamily() {
        return Family.builder()
                .id("push-up-family")
                .name("Push Up Family")
                .childrenNames(Arrays.asList("Push Up Category"))
                .build();
    }

    private Family createExplosivePushUpFamily() {
        return Family.builder()
                .id("explosive-push-up-family")
                .name("Explosive Push Up Family")
                .childrenNames(Arrays.asList("Test Category"))
                .build();
    }

    @Test
    @DisplayName("List family should return list of difficulty family from mongo db")
    public void listFamilies() {

        //Given
        when(mockFamilyMongoDb.findAll()).thenReturn(List.of(
                createPushUpFamily(),
                createExplosivePushUpFamily()));

        //When
        List<Family> families = familyService.listFamilies();

        //Then
        assertThat(families, containsInAnyOrder(
                createPushUpFamily(),
                createExplosivePushUpFamily()));
    }

    @Test
    @DisplayName("getFamilyById should return family by Id")
    public void getFamilyById(){

        //Given
        String familyId = "push-up-family";
        when(mockFamilyMongoDb.findById("push-up-family")).thenReturn(
                Optional.of(createPushUpFamily())
        );

        //When
        Optional<Family> result = familyService.getFamilyById(familyId);

        //Then
        assertThat(result.get(), is(createPushUpFamily()));
    }

    @Test
    @DisplayName("getFamilyById should return empty Optional for non existing ID")
    public void getFamilyByIdShouldReturnEmptyOptional(){

        //Given
        String familyId = "push-up-family";

        when(mockFamilyMongoDb.findById("push-up-family")).thenReturn(
                Optional.empty()
        );

        //When
        Optional<Family> result = familyService.getFamilyById(familyId);

        //Then
        assertTrue(result.isEmpty());
    }
}