package de.kathahuth.gymast.service;

import de.kathahuth.gymast.db.GroupMongoDb;
import de.kathahuth.gymast.model.Group;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GroupService {

    private final GroupMongoDb groupMongoDb;

    @Autowired
    public GroupService(GroupMongoDb groupMongoDb) {
        this.groupMongoDb = groupMongoDb;
    }

    public List<Group> listGroups() {
        return groupMongoDb.findAll();
    }

    public Optional<Group> getGroupById(String groupId) {
        return groupMongoDb.findById(groupId);
    }
}
