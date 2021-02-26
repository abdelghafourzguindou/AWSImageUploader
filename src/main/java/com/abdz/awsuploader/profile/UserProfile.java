package com.abdz.awsuploader.profile;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Optional;
import java.util.UUID;

@Data
@AllArgsConstructor
public class UserProfile {

    private UUID profileId;
    private String username;
    private String profileImageLink;

    public Optional<String> getProfileImageLinkIfExist() {
        return Optional.ofNullable(profileImageLink);
    }
}
