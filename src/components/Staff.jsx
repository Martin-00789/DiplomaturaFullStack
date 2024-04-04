import "../styles/components/pages/NosotrosPage.css";

const Staff = ({id,nombre,puesto,descripcion}) => {
  return (
    <div className="persona">
     <img src={`/images/${id}.jpg`} alt="staff-image"/>
      <h5 className="persona-nombre">{nombre}</h5>
      <h6>{puesto}</h6>
      <p>{descripcion}</p>
    </div>
  )
}

export default Staff
