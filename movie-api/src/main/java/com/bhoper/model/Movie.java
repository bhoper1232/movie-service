package com.bhoper.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "movies")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Movie {

    @Id
    private ObjectId id;
    private String imdbId;
    private String title;
    private String releaseDate;
    private String trailerLink;
    private String overview;
    private Integer runtime;
    private Double rating;
    private Integer budget;
    private String revenue;
    private Double popularity;
    private List<String> cast;
    private String poster;
    private List<String> genres;
    @DocumentReference
    private List<Review> reviewIds;

}
