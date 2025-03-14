package com.bhoper.controller;

import com.bhoper.persistance.domain.reviews.Review;
import com.bhoper.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/reviews")
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService reviewService;

    @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Map<String, String> payload) {
        return new ResponseEntity<>(this.reviewService.createReview(payload.get("reviewBody"),
                payload.get("imdbId")), HttpStatus.CREATED);
    }
}
