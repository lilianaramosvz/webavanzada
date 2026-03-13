import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import forms from "../styles/pages/Forms.module.css";
import { buscarPelicula } from "../services/service";

const Forms = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombreUsuario: "",
    titulo: "",
    anio: "",
    tipo: "",
    genero: "",
  });
  const [movie, setMovie] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);
    setError(null);
    setMovie(null);
    try {
      const { nombreUsuario, titulo, anio, tipo, genero } = formData;
      const data = await buscarPelicula(
        nombreUsuario,
        titulo,
        anio,
        tipo,
        genero,
      );
      setMovie(data);
    } catch (err) {
      console.log(formData);
      setError("Not found. Please try different filters.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className={forms.container}>
      <button
        type="button"
        className={forms.backArrow}
        aria-label="Volver al dashboard"
        onClick={() => navigate("/")}
      >
        &larr;
      </button>

      <h2 className={forms.title}>Find your favorite movie or series</h2>

      <form className={forms.form} onSubmit={handleSubmit}>
        <label className={forms.label} htmlFor="titulo">
          Title:
        </label>
        <input
          id="titulo"
          type="text"
          name="titulo"
          placeholder="Movie/Series title"
          value={formData.titulo}
          onChange={handleChange}
          required
        />

        <label className={forms.label} htmlFor="anio">
          Release Year:
        </label>
        <input
          id="anio"
          type="number"
          name="anio"
          placeholder="Release year"
          value={formData.anio}
          onChange={handleChange}
        />

        <label className={forms.label} htmlFor="tipo">
          Type:
        </label>
        <select
          id="tipo"
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
        >
          <option value="">Select an option</option>
          <option value="movie">Movie</option>
          <option value="serie">Series</option>
        </select>

        <label className={forms.label} htmlFor="genero">
          Genre:
        </label>
        <select
          id="genero"
          name="genero"
          value={formData.genero}
          onChange={handleChange}
        >
          <option value="">Select an option</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Romance">Romance</option>
          <option value="Thriller">Thriller</option>
          <option value="Animation">Animation</option>
        </select>

        <label className={forms.label} htmlFor="nombreUsuario">
          Your Name:
        </label>
        <input
          id="nombreUsuario"
          type="text"
          name="nombreUsuario"
          placeholder="Enter your name"
          value={formData.nombreUsuario}
          onChange={handleChange}
          required
        />

        <button className={forms.button} disabled={cargando}>
          {cargando ? "Searching..." : "Search"}
        </button>
      </form>

      {error && <p style={{ color: "red", marginTop: "1rem" }}> {error}</p>}

      {movie && (
        <div className={forms.movieCard}>
          <div className={forms.movieInfo}>
            <h3 className={forms.movieTitulo}>{movie.titulo}</h3>
            <div className={forms.details}>
              <p>
                <strong>Release Year:</strong> {movie.anio}
              </p>
              <p>
                <strong>Type:</strong> {movie.tipo}
              </p>
              <p>
                <strong>Genre:</strong> {movie.genero}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forms;
