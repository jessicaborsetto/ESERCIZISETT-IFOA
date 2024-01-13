import React from "react";
import { Carousel } from 'react-bootstrap';

const Movies = (props) => {
    const moviesPerRow = 5;
    const items = [];

    // stato per far mostrare il titolo all'hover del mouse
    const [hoveredMovie, setHoveredMovie] = React.useState(null);
    
    for (let i = 0; i < props.movies.length; i += moviesPerRow) {
        const movieGroup = props.movies.slice(i, i + moviesPerRow);

        items.push(
            <Carousel.Item key={i} className="movie-carousel-item movieCarousel">
                <div className="d-flex justify-content-between movieCarousel">
                    {movieGroup.map((movie, index) => (
                        <div key={index} className="movieContainer" onMouseOver={() => setHoveredMovie(movie.Title)}
                        onMouseOut={() => setHoveredMovie(null)}>
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                className="movie-poster"
                            />
                             {/* c'è l'hover? allora mostra il titolo*/}
                             {hoveredMovie === movie.Title && (
                                <div className="movieTitle">
                                    {movie.Title}
                                </div>
                            )}

                        </div>
                    ))}
                </div>
            </Carousel.Item>
        );
    }

    return (
        <Carousel interval={null} className=" movieCarousel">
            {items}
        </Carousel>
    );
};

export default Movies;