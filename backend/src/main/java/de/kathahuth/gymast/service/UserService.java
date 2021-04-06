package de.kathahuth.gymast.service;

import de.kathahuth.gymast.db.UserMongoDb;
import de.kathahuth.gymast.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserMongoDb userMongoDb;

    @Autowired
    public UserService(UserMongoDb userMongoDb) {
        this.userMongoDb = userMongoDb;
    }

    public List<User> listUsers(){
        return userMongoDb.findAll();
    }

    public Optional<User> getUserByUsername(String username) {
        return userMongoDb.findById(username);
    }

}
