package com.discoodle.api;

import com.discoodle.api.model.User;
import com.discoodle.api.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class UserTests {
    @Autowired
    private UserRepository userRepository;

//    @Test
//    public void testCreateUser() {
//        User test = userRepository.save(new User("dylan_alexandre@outlook.fr", "TBH", "test", "Dylan", "ALEXANDRE", User.Role.STUDENT));
//        assertNotNull(test);
//        assertEquals("Dylan", test.getName());
//    }
//
//    @Test
//    public void testChangeUsername() {
//        userRepository.save(new User("dylan_alexandre@outlook.fr", "TBH", "test", "Dylan", "ALEXANDRE", User.Role.STUDENT));
//        var temp = userRepository.getUserByMail("dylan_alexandre@outlook.fr");
//        if (temp.isPresent()) {
//            userRepository.changeUsername(
//                    temp.get().getId(), "TBHTest"
//            );
//            assertEquals("TBHTest", temp.get().getUsername());
//        } else {
//            fail();
//        }
//    }
//
//    @Test
//    public void testChangeMail() {
//        userRepository.save(new User("dylan_alexandre@outlook.fr", "TBH", "test", "Dylan", "ALEXANDRE", User.Role.STUDENT));
//        var temp = userRepository.getUserByUserName("TBH");
//        if (temp.isPresent()) {
//            userRepository.changeMail(temp.get().getId(), "test@outlook.fr");
//            assertEquals("test@outlook.fr", temp.get().getMail());
//        } else {
//            fail();
//        }
//    }
//
//    @Test
//    public void testChangePassword() {
//        userRepository.save(new User("dylan_alexandre@outlook.fr", "TBH", "test", "Dylan", "ALEXANDRE", User.Role.STUDENT));
//        var temp = userRepository.getUserByUserName("TBH");
//        if (temp.isPresent()) {
//            userRepository.changePassword(temp.get().getId(), "Bastian");
//            assertEquals("Bastian", temp.get().getPassword());
//        } else {
//            fail();
//        }
//    }
//
//    @Test
//    public void testChangeName() {
//        userRepository.save(new User("dylan_alexandre@outlook.fr", "TBH", "test", "Dylan", "ALEXANDRE", User.Role.STUDENT));
//        var temp = userRepository.getUserByUserName("TBH");
//        if (temp.isPresent()) {
//            userRepository.changeName(temp.get().getId(), "Jylan");
//            assertEquals("Jylan", temp.get().getName());
//        } else {
//            fail();
//        }
//    }
//
//    @Test
//    public void testChangeLastName() {
//        userRepository.save(new User("dylan_alexandre@outlook.fr", "TBH", "test", "Dylan", "ALEXANDRE", User.Role.STUDENT));
//        var temp = userRepository.getUserByUserName("TBH");
//        if (temp.isPresent()) {
//            userRepository.changeLastName(temp.get().getId(), "CLIPAL");
//            assertEquals("CLIPAL", temp.get().getLast_name());
//        } else {
//            fail();
//        }
//    }
//
//    @Test
//    public void testChangeLinkAvatar() {
//        userRepository.save(new User("dylan_alexandre@outlook.fr", "TBH", "test", "Dylan", "ALEXANDRE", User.Role.STUDENT));
//        var temp = userRepository.getUserByUserName("TBH");
//        if (temp.isPresent()) {
//            userRepository.changeLinkToAvatar(temp.get().getId(), "discoodle.fr/mon-image.png");
//            assertEquals("discoodle.fr/mon-image.png", temp.get().getLink_to_avatar());
//        } else {
//            fail();
//        }
//    }
}
