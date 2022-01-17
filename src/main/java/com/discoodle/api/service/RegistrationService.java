package com.discoodle.api.service;

import com.discoodle.api.model.User;

import com.discoodle.api.request.RegistrationRequest;
import com.discoodle.api.security.token.ConfirmationToken;
import com.discoodle.api.security.token.ConfirmationTokenService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Optional;

@Service
@AllArgsConstructor
public class RegistrationService {

   private final UserService userService;
   private final ConfirmationTokenService confirmationTokenService;

   public String register(RegistrationRequest request) {
      // Check if username or/and mail entered exist already.
      if (userService.getUserByUserName(request.getUsername()).isEmpty() || userService.getUserByMail(request.getMail()).isEmpty()) {
         // Regex for password with at least 8 characters constitued from at least 1 number, 1 letter to lowercase, 1 letter to uppercase, 1 special character.
         if (request.getPassword().matches("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}")) {
            // Regex for mail with at (@).
            if (request.getMail().matches("^(.+)@(.+)$")) {
               // Create a token with user's inputs and add user in database.
               return userService.signUpUser(
                     new User(
                           request.getMail(),
                           request.getUsername(),
                           request.getPassword(),
                           request.getName(),
                           request.getLast_name(),
                           User.Role.STUDENT
                     )
               );
            }
            return "Votre mail n'est pas valide.\n";
         }
      }

      return """
            Votre mot de passe doit contenir :
            - au moins 8 caractères
            - un chiffre
            - une minuscule
            - une majuscule
            - un caractère spécial
            - pas d'espace, retour à la ligne, etc
            """;
   }

   public String login(RegistrationRequest request) {
      Optional<User> user = userService.getUserByUserName(request.getUsername());
      if (user.isPresent()) {
         return userService.login(request.getUsername(), request.getPassword());
      }
      return "Votre compte n'est pas activé ou il n'existe pas.";
   }

   @Transactional
   public String confirmToken(String token, HttpServletResponse response) throws IOException {
      // Try to find token if it exists in database.
      ConfirmationToken confirmationToken = confirmationTokenService
            .getToken(token)
            .orElseThrow(() ->
                  new IllegalStateException("Le token n'a pas été trouvé."));

      // Check if token has been already confirmed.
      if (confirmationToken.getConfirmedAt() != null) {
         throw new IllegalStateException("L'adresse mail a déjà été confirmée.");
      }

      LocalDateTime expiredAt = confirmationToken.getExpiresAt();

      // Control if token hasn't expired.
      if (expiredAt.isBefore(LocalDateTime.now())) {
         throw new IllegalStateException("Le token a expiré.");
      }

      // Refresh token's informations with time activation.
      confirmationTokenService.setConfirmedAt(token);
      // Activate account.
      userService.enableUser(
            confirmationToken.getUser().getMail());
      // Redirect user on login page.
      response.sendRedirect("/compte");
      return "Vous pouvez désormais vous connecter à notre plateforme discoodle ! :)";
   }
}
