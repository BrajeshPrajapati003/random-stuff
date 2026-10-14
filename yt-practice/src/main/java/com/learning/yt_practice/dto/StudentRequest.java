package com.learning.yt_practice.dto;

public record StudentRequest(
        String name,
        String email,
        String password
) {
}
