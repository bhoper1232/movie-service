package com.bhoper.service;

import com.bhoper.persistance.domain.movies.Movie;
import com.bhoper.persistance.repository.MovieRepository;
import lombok.RequiredArgsConstructor;
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
