package com.discoodle.api.repository;

import com.discoodle.api.model.Groups;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;


@Repository
public interface GroupsRepository extends JpaRepository<Groups, Long> {

    @Query("SELECT group FROM Groups group where group.groups_id = :group_ID")
    Optional<Groups> findGroupsByID(@Param("group_ID") Long group_ID);

    @Query(value = "SELECT groups FROM Groups groups where groups.depth=:depth")
    Optional<Groups> findAllGroupsByDepth(@Param("depth") Integer depth);

    @Query(value = "SELECT groups FROM Groups groups where groups.name=:name")
    Optional<Groups> findAllGroupsByName(@Param("name") String name);

    @Query(value = "SELECT groups FROM Groups groups where groups.type=:type")
    Optional<Groups> findAllGroupsByType(@Param("type") String type);

    @Query(value = "SELECT groups FROM Groups groups where groups.name=:name AND groups.depth=:depth")
    Optional<Groups> findAllGroupsByNameAndDepth(@Param("name") String name, @Param("depth") Integer depth);

    @Transactional
    @Modifying
    @Query(value = "UPDATE \"groups\" g SET g.name=:name,g.description=:description WHERE g.groups_id=:groups_id", nativeQuery = true)
    Optional<Groups> updateNameAndDescGroup(@Param("groups_id") Long id, @Param("name") String name, @Param("description") String description);

    @Query(value = "SELECT groups_id FROM link_groups_to_group g where g.son_id=?1", nativeQuery = true)
    Long findParentOfGroup(Long son_id);

    @Transactional
    @Modifying
    @Query(value = "DELETE r FROM link_groups_to_user as r where r.groups_id = :groups_id AND r.user_id = :user_id", nativeQuery = true)
    void deleteLinkGroupsToUser(@Param("groups_id") Long groups_id, @Param("user_id") Long user_id);

    @Transactional
    @Modifying
    @Query(value = "DELETE r FROM link_groups_to_group as r where r.groups_id = :groups_id AND r.son_id = :son_id", nativeQuery = true)
    void deleteLinkGroupsToGroup(@Param("groups_id") Long groups_id, @Param("son_id") Long son_id);

    @Modifying
    @Query(value = "insert into link_groups_to_user (user_id, groups_id) VALUES (:user_id,:groups_id)", nativeQuery = true)
    @Transactional
    int addNewMemberInGroup(@Param("user_id") Long user_id, @Param("groups_id") Long groups_id);

    @Modifying
    @Query(value = "insert into link_groups_to_group (groups_id, son_id) VALUES (:groups_id,:son_id)", nativeQuery = true)
    @Transactional
    void addNewGroupsInGroup(@Param("groups_id") Long groups_ID, @Param("son_id") Long son_ID);

    @Modifying
    @Query(value = "DELETE r FROM link_groups_to_user AS r WHERE r.groups_id = :group_id AND r.user_id = :user_id", nativeQuery = true)
    @Transactional
    void removeMember(@Param("group_id") Long group_id, @Param("user_id") Long user_id);

    @Modifying
    @Query(value = "insert into link_groups_to_server (groups_id, server_id) VALUES (:groups_id,:server_id)", nativeQuery = true)
    @Transactional
    void addNewServInGroup(@Param("groups_id") Long groups_id, @Param("server_id") Long server_id);

    @Modifying
    @Query(value = "insert into link_group_to_roles (groups_id, role_id) VALUES (:group_id,:role_id)", nativeQuery = true)
    @Transactional
    void addRoleForGroup(@Param("group_id") Long groups_id, @Param("role_id") Long role_id);

    @Modifying
    @Query(value = "insert into link_role_to_users (user_id, role_id) VALUES (:user_id,:role_id)", nativeQuery = true)
    @Transactional
    void addRoleForUser(@Param("user_id") Long user_id, @Param("role_id") Long role_id);

    @Modifying
    @Query(value = "DELETE r FROM link_role_to_users AS r WHERE r.user_id = :user_id AND r.role_id = :role_id", nativeQuery = true)
    @Transactional
    void removeRoleForUser(@Param("user_id") Long user_id, @Param("role_id") Long role_id);

    @Transactional
    @Modifying
    @Query(value = "UPDATE roles r SET r.rights=?2 WHERE r.role_id=?1", nativeQuery = true)
    int modifyRightsForRole(@Param("role_id") Long role_id, @Param("rights") String rights);

    @Query("SELECT group.groups_id FROM Groups group WHERE group.type = 'DISCOODLE'")
    Optional<Long> findIDOfDiscoodle();
}
