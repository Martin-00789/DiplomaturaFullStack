import React from 'react'
import "../styles/components/pages/HomePage.css";

const HomePage = () => {
  return (
    <main className="holder">
      <div className="homeimg-container">
        <img src="images/4.jpg" alt="home-image" className="homeimg"/>
      </div>
      <div className="columnas">
        <div className="bienvenidos">
          <h2>Bienvenidos</h2>
          <p>Bienvenido a Nutricion.com, tu destino definitivo para descubrir un enfoque holístico hacia la salud y el bienestar a través de la nutrición consciente. En nuestro viaje hacia una vida más saludable y equilibrada, creemos firmemente en el poder transformador de una alimentación nutritiva y consciente.</p>
        </div>
        <div className="testimonios">
          <h2>Testimonios</h2>
          <div className="testimonio">
            <span className="cita">Muy buenos planes nutricionales.</span>
            <span className="autor">Juliana Alvarez - Nutriteam.com</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage
