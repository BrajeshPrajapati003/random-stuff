package com.learning.yt_practice.dto;

public record StudentUpdateRequest(
        String email,
        String name,
        String password
) {
}
