package com.discoodle.api.service;

import com.discoodle.api.ApiApplication;
import com.discoodle.api.model.GroupRights;
import com.discoodle.api.request.EditGroupRequest;
import com.discoodle.api.request.GroupRightsRequest;
import com.discoodle.api.model.Groups;
import com.discoodle.api.request.GroupsRequest;
import com.discoodle.api.repository.GroupRightsRepository;
import com.discoodle.api.repository.GroupsRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.File;


@Service
@AllArgsConstructor
public class GroupsService {
    private final GroupsRepository groupsRepository;
    private final GroupRightsRepository rightsRepository;

    public Groups createNewGroup(GroupsRequest request) {
        GroupRights rights = new GroupRights(false, false, false);
        rights = rightsRepository.save(rights);
        Groups group = new Groups(
                request.getDepth(),
                request.getName(),
                request.getDescription(),
                request.getType()
        );
        Groups finalGroup = groupsRepository.save(group);
        groupsRepository.addNewRightsInGroup(finalGroup.getGroups_id(), rights.getRightsId());
        groupsRepository.addNewGroupsInGroup(request.getParent_id(), finalGroup.getGroups_id());
        groupsRepository.addNewMemberInGroup(request.getUser_id(), finalGroup.getGroups_id());

        if (finalGroup.getType().equals(Groups.TypeOfGroup.SUBJECTS)) {
            try {
                File dossier = new File((String.format("%sstatic/common/json/Groups/", ApiApplication.RESSOURCES)));
                dossier.mkdirs();
                File fichier = new File((String.format("%sstatic/common/json/Groups/%s.json", ApiApplication.RESSOURCES,finalGroup.getGroups_id())));
                fichier.createNewFile();
            } catch (Exception e){
                System.out.println("Groups non crée !");
            }
        }
        return finalGroup;
    }

    public boolean editRights(GroupRightsRequest request) {
        try {
            GroupRights ofParent = groupsRepository.findGroupsById(groupsRepository.findParentOfGroup(request.getGroupId())).get().getGroupRights();
            GroupRights r = groupsRepository.findGroupsById(request.getGroupId()).get().getGroupRights();
            if (ofParent.isCanAddUser())
                rightsRepository.updateRightsAdd(r.getRightsId(), request.isAddUser());
            if (ofParent.isCanDeleteUser())
                rightsRepository.updateRightsDelete(r.getRightsId(), request.isDeleteUser());
            if (ofParent.isCanModify())
                rightsRepository.updateRightsModify(r.getRightsId(), request.isModify());
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    public boolean editGroup(EditGroupRequest request) {
        try {
            groupsRepository.updateNameAndDescGroup(request.getGroups_id(), request.getName(), request.getDescription());
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    public void deleteGroupByID(Integer groups_ID) {
        groupsRepository.deleteGroupsByID(groups_ID);
    }
}
