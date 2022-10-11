package com.discoodle.api.repository;

import com.discoodle.api.model.EstablishmentRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EstablishmentRequestRepository extends JpaRepository<EstablishmentRequest, Long> {

    @Query("SELECT er FROM EstablishmentRequest er where er.user_id = :user_id")
    List<EstablishmentRequest> getEstablishmentRequestByUser(@Param("user_id") Long user_id);

    @Query("SELECT er FROM EstablishmentRequest er where er.status = 'COURS' ")
    List<EstablishmentRequest> findAllBeingProcessed();
}
