import React from "react";

const Movies = (props) => {
    return(
        <>
        {props.movies.map((movie, index) =>(
            <img className="moviePoster" src={movie.Poster} alt="movie" key={index}></img>
        )
        )}
        </>
    )
}

export default Movies