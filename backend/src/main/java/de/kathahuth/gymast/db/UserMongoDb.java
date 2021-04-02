package de.kathahuth.gymast.db;

import de.kathahuth.gymast.model.User;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface UserMongoDb extends PagingAndSortingRepository <User, String> {

    List<User> findAll();
}
