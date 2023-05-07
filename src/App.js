import React, { useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';

/***** 
•	Using what you’ve learned this week, create a page of an application that enables users
  to vote and leave reviews on movies.
•	You should include at least the following components: 
  •	MovieList: a container for all the Movie components and their data.
  •	Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…)
  •	Stars: a one to five-star rating component that allows users to rate something 
  (movies in this case, but remember that components are reusable, so you could use it elsewhere!)
  •	ReviewList: a container inside of a Movie that houses Review components.
  •	Review: A text review a user can leave on a movie.
  •	ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews. 
    When submitted, the review should be added to the movie. All this data can be stored in an array, 
    no networking or database needed for this assignment.
 *****/

function App() {
  // Create a state object and hardcode data for now.
  const [movies, setMovies] = useState([{
    "title": "The Lion King",
    "year": "2019",
    "id": 10,
    "description": "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
    "runtime": "118 min",
    "poster": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg",
    
  },
  {
    "title": "Mowgli: Legend of the Jungle",
    "year": "2018",
    "id": 11,
    "description": "A human child raised by wolves must face off against a menacing tiger named Shere Khan, as well as his own origins.",
    "runtime": "104 min",
    "poster": "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg",
    
  },
  {
    "title": "Doctor Strange",
    "year": "2016",
    "id": 12,
    "description": "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
    "runtime": "115 min",
    "poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg",
  
  },
  {
    "title": "John Wick",
    "year": "2014",
    "id": 13,
    "description": "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took his car.",
    "runtime": "101 min",
    "poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg",
   
  } ])

  // Render the MovieList Component
  return (
    <div>
        <MovieList className="movies" movieList={movies} />
    </div>
  )
}

export default App;