package de.kathahuth.gymast.db;

import de.kathahuth.gymast.model.Category;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface CategoryMongoDb extends PagingAndSortingRepository <Category, String> {

    List<Category> findAll();
}
