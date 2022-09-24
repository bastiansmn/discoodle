package com.discoodle.api.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
public class MessageRequest {

   private Integer conv_uuid;
   private String content;
   private String sender;
   private Long message_date;

}
