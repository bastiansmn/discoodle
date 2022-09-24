package com.discoodle.api.request;

import com.discoodle.api.model.User;
import lombok.*;

@Getter
@NoArgsConstructor
@Builder
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class RegistrationRequest {

    private String mail;

    private String username;

    private String password;

    private String name;

    private String last_name;

    private String link_to_avatar;

    private User.Role role;

}
