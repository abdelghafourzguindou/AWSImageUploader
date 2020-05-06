package com.abdz.awsuploader.bucket;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public enum BucketName {

    PROFILE_IMAGE("name--");

    @Getter
    private final String bucketName;
}
