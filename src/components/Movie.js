import React from "react";
import ReviewForm from "./ReviewForm";
import Stars from "./Stars";

// Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…)

// Need to pass all the movie information rom the props here:
const Movie = ({title, year, id, description, runtime, poster }) => (

		<div className="movie">
			<div className="movie-header">
				<img src={poster} alt={title}/>
				<div className="movie-info">
					<h4>{title}</h4>
					<span>{year}, {runtime}</span>
				</div>

				<div className="movie-synopsis">
				
					<p>{description}</p>
				</div>
			</div>
			<div className="review">
				<h5>Leave a review</h5>
				<Stars/>
				<ReviewForm/>
	
			</div>

		</div>
);

export default Movie;