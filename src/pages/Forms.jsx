import React from 'react';
import forms from '../styles/pages/Forms.module.css';

const Forms = () => {
  return (
    <div className={forms.container}>
      <h1>Forms</h1>

      <form className={forms.form}>
        <input type="text" placeholder="Titulo" />
        <input type="date" placeholder="Fecha de publicación" />
        <input type="text" placeholder="Director" />
        <input type="text" placeholder="Género" />
        <input type="text" placeholder="Duración" />
        <button type="submit">Submit</button>
      </form>

    </div>
  );
};

export default Forms;