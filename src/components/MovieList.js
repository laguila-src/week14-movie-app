import React from "react";

import Movie from "./Movie";

// MovieList: a container for all the Movie components and their data.

const MovieList = (props) => {
	// Returns a list of movies. For each of the movies, render a div with 
	// an img tag to display the movie poster.
	return (
		<div className="movie-container">
			{props.movieList.map((movie) => (
				<Movie className="movieCard" key={movie.id} {...movie}/>
			))}
		</div>
	)
}

export default MovieList;