package de.kathahuth.gymast.db;

import de.kathahuth.gymast.model.Family;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface FamilyMongoDb extends PagingAndSortingRepository <Family, String> {

    List<Family> findAll();
}
