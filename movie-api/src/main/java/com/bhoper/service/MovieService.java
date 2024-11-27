package com.bhoper.service;

import com.bhoper.model.Movie;
import com.bhoper.repository.MovieRepository;
import lombok.RequiredArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MovieService {

    private final MovieRepository movieRepository;

    public List<Movie> allMovies() {
        return this.movieRepository.findAll();
    }

    public Optional<Movie> singleMovie(String imdbId) {
        return this.movieRepository.findMovieByImdbId(imdbId);
    }

}
