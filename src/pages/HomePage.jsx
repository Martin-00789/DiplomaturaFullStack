import React from 'react'

const HomePage = () => {
  return (
    <main className="holder">
      <div className="homeimg">
        <img src="" alt=""/>
      </div>
      <div className="columnas">
        <div className="bienvenidos">
          <h2>Bienvenidos</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, aut?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dicta ab magnam deserunt, eligendi dolorem placeat vero obcaecati amet sed.</p>
        </div>
        <div className="testimonios">
          <h2>Testimonios</h2>
          <div className="testimonio">
            <span className="cita">Simplemente Excelente</span>
            <span className="autor">Juan Perez - Zapatos.com</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage
