import React, { useState } from 'react';
import forms from '../styles/pages/Forms.module.css';

const Forms = () => {

  const [movie, setMovie] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí pondre la lógica para buscar la película usando la api
    // ejemplo con laland
    setMovie({
      Title: "La La Land",
      Year: "2016",
      Director: "Damien Chazelle",
      Plot: "A jazz musician and an aspiring actress fall in love while pursuing their dreams in Los Angeles.",
      Poster: "https://via.placeholder.com/400x250"
    });
  };

  return (
    <div className={forms.container}>
      <h2>Movie Search</h2>
      <h3>Find your favorite movie</h3>

      <form className={forms.form} onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" placeholder="Movie/Series title" />

        <label htmlFor="releaseDate">Release Year:</label>
        <input type="number" placeholder="Release year" />

        <label htmlFor="type">Type:</label>
        <select id="type">
         <option value="">Select an option</option>
         <option value="movie">Movie</option>
         <option value="series">Series</option>
        </select>

        <label htmlFor="Genero">Genre:</label>
        <select id="Genero">
         <option value="">Select an option</option>
         <option value="action">Action</option>
         <option value="comedy">Comedy</option>
         <option value="drama">Drama</option>
         <option value="horror">Horror</option>
         <option value="sci-fi">Science Fiction</option>
         <option value="romance">Romance</option>
         <option value="thriller">Thriller</option>
         <option value="animation">Animation</option>
        </select>

        <label htmlFor="Nombre">Your Name:</label>
        <input type="text" placeholder="Enter your name" />

        <button type="submit">🔍 Search Movie</button>
      </form>

      {movie && (
        <div className={forms.movieCard}>

          <img
            src={movie.Poster}
            alt={movie.Title}
            className={forms.poster}
          />

          <div className={forms.movieInfo}>
            <h3>{movie.Title}</h3>

            <div className={forms.details}>
              <span>Year: {movie.Year}</span>
              <span>Director: {movie.Director}</span>
            </div>

            <p>{movie.Plot}</p>
          </div>

        </div>
      )}

    </div>
  );
};

export default Forms;