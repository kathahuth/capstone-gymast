package de.kathahuth.gymast.db;

import de.kathahuth.gymast.model.Group;
import org.springframework.data.repository.PagingAndSortingRepository;
import java.util.List;

public interface DifficultyGroupMongoDB extends PagingAndSortingRepository<Group, String> {

    List<Group>
}
