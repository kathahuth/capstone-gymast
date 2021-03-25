package de.kathahuth.gymast.service;

import de.kathahuth.gymast.db.GroupMongoDb;
import de.kathahuth.gymast.model.Group;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GroupService {

    private GroupMongoDb groupDb;

    public GroupService(GroupMongoDb groupDb) {
        this.groupDb = groupDb;
    }

    public List<Group> listGroups() {
        return groupDb.findAll();
    }
}
