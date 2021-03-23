package com.discoodle.api.controller;

import com.discoodle.api.configuration.DiscoodleJsonFileWriter;
import com.discoodle.api.model.*;
import com.discoodle.api.service.RoomService;
import lombok.AllArgsConstructor;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
public class RoomController {
	private final RoomService roomService;


	@PostMapping(path = "/api/room/addNewRoom")
	public Room addNewRoom(@RequestBody RoomRequest request){
		return roomService.createNewRoom(request);
	}

	@MessageMapping("/{roomUUID}/room.send")
	@SendTo("/conversations/rooms/{roomUUID}")
	public Message sendMessage(@DestinationVariable String roomUUID, @Payload Message message) {
		try{
			DiscoodleJsonFileWriter.runWriter(message, roomUUID);
		}catch (Exception e){
			e.printStackTrace();
		}
		return message;
	}


}