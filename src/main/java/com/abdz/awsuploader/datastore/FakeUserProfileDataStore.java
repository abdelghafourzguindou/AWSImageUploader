package com.abdz.awsuploader.datastore;

import com.abdz.awsuploader.profile.UserProfile;
import lombok.Getter;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository
public class FakeUserProfileDataStore {

    private static final List<UserProfile> USER_PROFILE = new ArrayList<>();

    static {
        USER_PROFILE.add(new UserProfile(UUID.fromString("955ed685-954e-446e-9980-a4a8a8f4c609"), "User1", null));
        USER_PROFILE.add(new UserProfile(UUID.fromString("b737766b-8335-4947-bd65-1bebe089749d"), "User2", null));
    }

    public static List<UserProfile> getUserProfile() {
        return USER_PROFILE;
    }
}
