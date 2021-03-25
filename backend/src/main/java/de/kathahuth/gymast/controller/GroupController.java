package de.kathahuth.gymast.controller;

import de.kathahuth.gymast.model.Group;
import de.kathahuth.gymast.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("api/difficulty")
public class GroupController {

    private final GroupService groupService;

    @Autowired
    public GroupController(GroupService groupService) {
        this.groupService = groupService;
    }

    @GetMapping
    public List<Group> listGroups(){
        return groupService.listGroups();
    }

    @GetMapping("{groupId}")
    public Group getGroupById(@PathVariable String groupId) {
        return groupService.getGroupById(groupId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Group Difficulty could not be found"));
    }
}
