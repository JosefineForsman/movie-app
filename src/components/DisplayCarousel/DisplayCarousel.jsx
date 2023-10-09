import "./DisplayCarousel.scss";
import { useRef } from "react";
import arrowRight from "../../assets/arrowRight.svg";
import arrowLeft from "../../assets/arrowLeft.svg";
import SingleMovie from "../SingleMovie/SingleMovie";

function DisplayCarousel({ genreMovies }) {
  const gridRef = useRef(null);
  

  const scrollLeft = () => {
    if (gridRef.current) {
      gridRef.current.scrollLeft -= 500; // how much the movies will move to the side when clicking on button
    }
  };

  const scrollRight = () => {
    if (gridRef.current) {
      gridRef.current.scrollLeft += 500; // how much the movies will move to the side when clicking on button
    }
  };

  return (
    <div className="display-carousel">
      <img
        className="arrow arrow-left"
        onClick={scrollLeft}
        src={arrowLeft}
        alt="arrow-right-icon"
      />
      <div className="grid" role="categories__title" ref={gridRef}>
        {genreMovies ? (
          genreMovies.map((movie, index) => (
            <SingleMovie
              key={index}
              className="grid__item"
              title={movie.title}
              year={movie.year}
              thumbnail={movie.thumbnail}
              genre={movie.genre}
              actors={movie.actors}
              synopsis={movie.synopsis}
            />
          ))
        ) : (
          <p>error</p>
        )}
      </div>
      <img
        className="arrow arrow-right"
        onClick={scrollRight}
        src={arrowRight}
        alt="arrow-right-icon"
      />
    </div>
  );
}

export default DisplayCarousel;
