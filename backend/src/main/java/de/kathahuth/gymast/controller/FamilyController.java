package de.kathahuth.gymast.controller;

import de.kathahuth.gymast.model.Family;
import de.kathahuth.gymast.service.FamilyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("api/difficulty")
public class FamilyController {

    private final FamilyService familyService;

    @Autowired
    public FamilyController(FamilyService familyService){
        this.familyService = familyService;
    }

    @GetMapping("{groupId}/{familyId}")
    public Family getFamilyById(@PathVariable String groupId, @PathVariable String familyId) {
        return familyService.getFamilyById(familyId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Family Difficulty could not be found"));
    }
}
