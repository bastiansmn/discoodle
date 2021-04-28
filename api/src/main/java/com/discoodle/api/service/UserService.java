package com.discoodle.api.service;

import com.discoodle.api.model.Friendships;
import com.discoodle.api.model.Room;
import com.discoodle.api.model.User;
import com.discoodle.api.repository.FriendshipsRepository;
import com.discoodle.api.repository.UserRepository;
import com.discoodle.api.security.token.ConfirmationToken;
import com.discoodle.api.security.token.ConfirmationTokenService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final FriendshipsRepository friendshipsRepository;
    private final RoomService roomService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final ConfirmationTokenService confirmationTokenService;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserByUserName(String username) {
        return userRepository.findUserByUserName(username);
    }

    public Optional<User> getUserByID(Long user_id) {
        return userRepository.findById(user_id);
    }

    public Optional<User.Role> findUserByRole(User.Role role) {
        return userRepository.findUserByRole(role);
    }

    public void addNewUser(User user) {
        Optional<User> TestPseudo = userRepository.findUserByUserName(user.getUsername());
        Optional<User> TestMail = userRepository.findUserByMail(user.getMail());

        if (TestPseudo.isPresent() || TestMail.isPresent()) {
            throw new IllegalStateException("Le pseudo est déjà pris.");
        }
        userRepository.save(user);
    }

    public void deleteUser(Long user_id) {
        User delete = userRepository.findById(user_id).get();
        if (userRepository.existsById(user_id)) {
            userRepository.removeToken(user_id);
            for(Room test_room : delete.getRooms()) {
                roomService.removeMember(test_room.getRoom_id(), user_id);
            }
            List<Long> list = userRepository.getFriendListForSender(user_id);
            list.addAll(userRepository.getFriendListForReceiver(user_id));
            List<Friendships> friendships = friendshipsRepository.getALlRelations(user_id);
            for(Friendships test_friendships : friendships) {
                friendshipsRepository.deleteById(test_friendships.getFriendships_id());
            }
            userRepository.deleteById(user_id);
        }
    }

    @Override
    public UserDetails loadUserByUsername(String mail) throws UsernameNotFoundException {
        return (UserDetails) userRepository.findUserByMail(mail).orElseThrow(() ->
                new UsernameNotFoundException("L'utilisateur avec l'email " + mail + " n'a pas été trouvé."));
    }

    public String signUpUser(User user) {
        boolean userExist = userRepository.findUserByMail(user.getMail()).isPresent();

        if (userExist) {
            return "L'email est déjà utilisé.";
        }

        userExist = userRepository.findUserByUserName(user.getUsername()).isPresent();

        if (userExist) {
            return "Le nom d'utilisateur est déjà utilisé.";
        }

        String passwordEncoded = bCryptPasswordEncoder.encode(user.getPassword());
        user.setPassword(passwordEncoded);

        userRepository.save(user);

        String token = UUID.randomUUID().toString();
        ConfirmationToken confirmationToken = new ConfirmationToken(
                token,
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(15),
                user
        );

        confirmationTokenService.saveConfirmationToken(confirmationToken);
        return token;
    }

    public String login(String username, String password) {
        if (userRepository.findUserByUserName(username).isPresent() /*&& userRepository.findUserByUserName(username).get().isEnabled()*/) {
            if (!bCryptPasswordEncoder.matches(password, userRepository.findUserByUserName(username).get().getPassword()))
                return "Mot de passe ou nom d'utilisateur incorrect";
            else
                return "";
        }
        return "Mot de passe ou nom d'utilisateur incorrect";
    }

    public int enableUser(String mail) {
        return userRepository.enableUser(mail);
    }

    public List<User> getFriendList(Long user_id) {
        if(!userRepository.existsById(user_id))
            return List.of();
        List<Long> list = userRepository.getFriendListForReceiver(user_id);
        list.addAll(userRepository.getFriendListForSender(user_id));
        return list.stream().filter(userRepository::existsById).map(elt -> userRepository.findById(elt).get()).collect(Collectors.toList());
    }

    public Optional<User> changeUsername(Long user_id, String username) {
        if (userRepository.findUserByUserName(username).isEmpty() && userRepository.changeUsername(user_id, username) == 1)
            return userRepository.findById(user_id);
        return Optional.empty();
    }

    public Optional<User> changeMail(Long user_id, String mail) {
        if (mail.matches("^(.+)@(.+)$") && userRepository.findUserByMail(mail).isEmpty() && userRepository.changeMail(user_id, mail) == 1)
            return userRepository.findById(user_id);
        return Optional.empty();
    }

    public Optional<User> changePassword(Long user_id, String password) {
        if (password.matches("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}")) {
            String passwordEncoded = bCryptPasswordEncoder.encode(password);
            if (userRepository.changePassword(user_id, passwordEncoded) == 1)
                return userRepository.findById(user_id);
        }
        return Optional.empty();
    }

    public Optional<User> changeName(Long user_id, String name) {
        if (userRepository.changeName(user_id, name) == 1)
            return userRepository.findById(user_id);
        return Optional.empty();
    }

    public Optional<User> changeLastName(Long user_id, String last_name) {
        if (userRepository.changeLastName(user_id, last_name) == 1)
            return userRepository.findById(user_id);
        return Optional.empty();
    }

    public Optional<User> changeLinkToAvatar(Long user_id, String link_to_avatar) {
        if (userRepository.changeLinkToAvatar(user_id, link_to_avatar) == 1)
            return userRepository.findById(user_id);
        return Optional.empty();
    }
}
