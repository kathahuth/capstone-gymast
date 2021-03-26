package de.kathahuth.gymast.service;

import de.kathahuth.gymast.db.FamilyMongoDb;
import de.kathahuth.gymast.model.Family;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FamilyService {

    private final FamilyMongoDb familyMongoDb;

    @Autowired
    public FamilyService(FamilyMongoDb familyMongoDb) {
        this.familyMongoDb = familyMongoDb;
    }

    public List<Family> listFamilies() {
        return familyMongoDb.findAll();
    }

    public Optional<Family> getFamilyById(String familyId) {
        return familyMongoDb.findById(familyId);
    }
}
