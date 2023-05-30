const mongoose = require("mongoose");
import React, { useState, useEffect } from 'react';

const libroSchema = new mongoose.Schema({
    name: String,
    autor: String,
    editorial: String,
    isdn: Number,
    genero: String,
    paginas: Number,
    precio: Number,
    año: Number,
});

module.exports = mongoose.model("Libros", libroSchema);


function App() {
    const [libros, setLibros] = useState([]);
  
    useEffect(() => {
      fetch('/libros')
        .then(response => response.json())
        .then(data => setLibros(data))
        .catch(error => console.error(error));
    }, []);
  
    return (
      <div>
        <h1>Libros:</h1>
        <ul>
          {libros.map(libro => (
            <li key={libro._id}>
              <style>Nombre:</style> {libro.name}<br/>
              <style>Autor:</style> {libro.autor}<br/>
              <style>Editorial:</style> {libro.editorial} <br/>
              <style>isdn:</style> {libro.isdn}<br/>
              <style>genero:</style> {libro.genero}<br/>
              <style>paginas:</style> {libro.paginas} <br/>
              <style>Precio:</style> {libro.precio}<br/>
              <style>Año:</style> {libro.año}<br/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default App;
