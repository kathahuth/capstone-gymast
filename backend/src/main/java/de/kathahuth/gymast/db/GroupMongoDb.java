package de.kathahuth.gymast.db;


import de.kathahuth.gymast.model.Group;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface GroupMongoDb extends PagingAndSortingRepository<Group, String> {
}
