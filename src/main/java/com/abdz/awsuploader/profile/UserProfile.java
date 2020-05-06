package com.abdz.awsuploader.profile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;

import java.util.Optional;
import java.util.UUID;

@Data
public class UserProfile {

    private UUID profileId;
    private String username;
    private String profileImageLink;

    public Optional<String> getProfileImageLinkIfExist() {
        return Optional.ofNullable(profileImageLink);
    }
}
