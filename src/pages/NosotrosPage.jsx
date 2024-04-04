import "../styles/components/pages/NosotrosPage.css";
import Staff from "../components/Staff";

const NosotrosPage = () => {
  return (
    <main className="holder">
      <div className="historia">
        <h2>Historia</h2>
        <p>Nuestra pasión por una vida saludable nos llevó a crear una comunidad dedicada a la nutrición consciente. Fundada por <span className="nombre-fundador">Martin Elias</span>, nutricionista apasionado, nos comprometemos a compartir conocimiento, recetas y apoyo para inspirar un estilo de vida más equilibrado. Creemos en el poder de conectar con los alimentos y su impacto en la salud y el bienestar. Únete a nuestra comunidad y descubre el camino hacia una vida más saludable y satisfactoria.</p>
      </div>
      <div className="staff">
        <h2>Staff</h2>
        <div className="personas">
          <Staff 
          id="5"
          nombre="Esteban Rodriguez"
          puesto="Nutricionista Jefe"
          descripcion="Como líder de nuestro equipo de expertos en nutrición, es un profesional altamente capacitado con una pasión por la salud y el bienestar. Con una amplia experiencia en asesoramiento dietético, planificación de comidas y educación nutricional y está dedicado a brindar orientación experta y apoyo personalizado a nuestros miembros."/>
        <Staff 
          id="6"
          nombre="Juan Gomez"
          puesto="Chef Saludable"
          descripcion="Nuestro Chef Saludable, es un maestro culinario con un enfoque en la creación de deliciosas y nutritivas recetas. Con una profunda comprensión de los ingredientes frescos y saludables, combina habilidades culinarias con conocimientos nutricionales para ofrecer platillos irresistibles que alimentan el cuerpo y el alma."/>
          <Staff 
          id="7"
          nombre="Agustina Perez"
          puesto="Especialista en Bienestar Emocional"
          descripcion="Nuestra Especialista en Bienestar Emocional, comprende la importancia de la conexión mente-cuerpo en la salud integral. Con experiencia en técnicas de manejo del estrés proporciona herramientas y recursos para ayudar a nuestros miembros a cultivar una mentalidad positiva y equilibrada."/>
          <Staff 
          id="8"
          nombre="Pedro Sanchez"
          puesto="Entrenador Fitness"
          descripcion="Como Entrenador Fitness,es un apasionado defensor del ejercicio físico como componente clave de un estilo de vida saludable. Con una sólida formación en entrenamiento personal y acondicionamiento físico guía a nuestros miembros en la implementación de programas de ejercicio efectivos y motivadores para alcanzar sus metas de salud y bienestar."/>
          <Staff 
          id="9"
          nombre="Sofia Lopez"
          puesto="Experta en Alimentación Sostenible"
          descripcion="Nuestra Experta en Alimentación Sostenible, está comprometida con la promoción de prácticas alimentarias que sean beneficiosas tanto para la salud como para el medio ambiente. Con conocimientos en agricultura sostenible guía a nuestra comunidad hacia elecciones alimentarias que apoyen la salud del planeta y de las personas."/>
        </div>
      </div>
    </main>
  )
}

export default NosotrosPage
