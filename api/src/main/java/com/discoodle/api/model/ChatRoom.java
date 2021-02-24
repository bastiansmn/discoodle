package com.discoodle.api.model;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@Entity
@ToString
@Table(name = "chat_room")
public class ChatRoom {

    public ChatRoom(String name) {
        this.name = name;
    }

    @Id
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID", strategy = "org.hibernate.id.UUIDGenerator")
    @Column(name = "room_id",unique = true, nullable = false)
    private UUID id;
    @Column(name = "name")
    private String name;

}