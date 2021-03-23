package de.kathahuth.gymast.controller;

import de.kathahuth.gymast.model.Group;
import de.kathahuth.gymast.service.GroupService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/difficulty")
@AllArgsConstructor
public class GroupController {

    private final GroupService groupService;

    @GetMapping
    public List<Group> listGroups(){
        return groupService.listGroups();
    }
}
