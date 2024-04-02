import React from 'react'

const Contacto = () => {
  return (
    <main className="holder contacto">
      <div>
        <h2>Contato Rapido</h2>
        <form action="" method="" className="formulario">
          <p>
            <label for="nombre">Nombre</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="email">Email</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="telefono">Telefono</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="mensaje">Mensaje</label>
            <textarea name=""></textarea>
          </p>
          <p className="acciones">
            <input type="submit" value="enviar" />
          </p>
        </form>
        <div className="datos">
          <h2>Otras vias de comunicación</h2>
          <p>También puede contactarse con nosotros usando los siguientes medios</p>
          <ul>
            <li>Telefono: 43242388</li>
            <li>Email: contacto@transporte.com.ar</li>
            <li>Facebook:</li>
            <li>Twitter:</li>
            <li>Skype:</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Contacto