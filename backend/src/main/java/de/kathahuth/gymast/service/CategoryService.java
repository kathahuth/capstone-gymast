package de.kathahuth.gymast.service;

import de.kathahuth.gymast.db.CategoryMongoDb;
import de.kathahuth.gymast.model.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {

    private final CategoryMongoDb categoryMongoDb;

    @Autowired
    public CategoryService(CategoryMongoDb categoryMongoDb) {
        this.categoryMongoDb = categoryMongoDb;
    }

    public List<Category> listCategories() {
        return categoryMongoDb.findAll();
    }

    public Optional<Category> getCategoryById(String categoryId) {
        return categoryMongoDb.findById(categoryId);
    }
}
