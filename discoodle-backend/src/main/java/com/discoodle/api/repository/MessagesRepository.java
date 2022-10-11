package com.discoodle.api.repository;

import com.discoodle.api.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;


public interface MessagesRepository extends JpaRepository<Message, Long> {

   @Query(value = "SELECT messages FROM Message messages WHERE messages.conv_uuid = :conv_uuid")
   List<Message> getMessagesOfRoom(@Param("conv_uuid") Integer conv_uuid);

   @Transactional
   @Modifying
   @Query("UPDATE Message messages SET messages.pinned = true WHERE messages.message_id = :message_id")
   void pinMessage(@Param("message_id") Long message_id);

   @Transactional
   @Modifying
   @Query("UPDATE Message messages SET messages.pinned = false WHERE messages.message_id = :message_id")
   void unpinMessage(@Param("message_id") Long message_id);

   @Transactional
   @Modifying
   @Query("UPDATE Message messages SET messages.content = :content WHERE messages.message_id = :message_id")
   void editMessage(@Param("message_id") Long message_id, @Param("content") String content);

   @Transactional
   @Modifying
   @Query("UPDATE Message messages SET messages.edited = true WHERE messages.message_id = :message_id")
   void setEdited(@Param("message_id") Long message_id);

   @Query("SELECT messages FROM Message messages WHERE messages.sender = :username")
   List<Message> getMessagesOfUser(@Param("username") String username);
}
