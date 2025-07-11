import "./About.css";
import monica from "../assets/monica-bio.jpeg";

const About = () => {
  return (
    <div id="about" className="about-container">
     
         <section id="bio" className="bio-container">
          <div className="bio-header">
      <img src={monica} alt="Monica Lopez" className="bio-img" />

      <h1 className="bio-title">Bio</h1>
      
      </div>
        {/* <p className="about-es">
          Mi nombre es Monica López, soy artista visual, muralista e instructora
          de técnica mixta. Crecí y me crié en el estado de Puebla, México, un
          lugar rico en cultura. Desde que era muy pequeña descubrí cuánto me
          apasionaba dibujar y todo lo relacionado con arte. Comencé a pintar de
          acuerdo con las diferentes etapas de mi crecimiento, y con el tiempo
          mi aprendizaje se fue expandiendo. Es verdaderamente asombroso lo que
          tus manos y tu imaginación pueden hacer juntas. La inspiración de la
          mayoría de mis trabajos viene de mis raíces y herencia poblana. Las
          texturas y la combinación de los colores han sido gran parte de mi
          vida para reflejar la persona que soy, ya que me ayuda a mostrar mis
          sentimientos y emociones a través de colores vibrantes. Mi nostalgia,
          tristeza y depresión en colores oscuros. Mi alegría en colores claros
          y mis momentos de locura en colores neon. Veo tanta belleza en el arte
          y la uso para expresar lo enamorada que estoy por mi herencia y
          cultura. Cada pintura muestra una historia, un sentimiento.
          Sentimiento con el que otras personas se identifican. Me gusta seguir
          aprendiendo y educarme para poder compartir mi conocimiento con la
          comunidad latina y poder atrapar el corazón de otras a través de mis
          pinturas. Una de mis metas es obtener un título en artes visuales.
        </p>
        <p className="about-en">
          My name is Monica Lopez, I am a visual Artist, Muralist, and Teaching
          Artist. I was raised in the state of Puebla, Mexico, a place enriched
          with culture. From a very early age, I felt passionate about drawing
          about anything related to art. I learned to paint within each
          different state of my childhood, expanding my skills with time. I am
          always amazed at what our hands combined with imagination can create.
          The inspiration for most of my work comes from my roots, heritage, and
          my experience of immigration to the United States as a teenager.
          Textures and the combination of colors have been a great part of my
          life and have allowed me to reflect on the person that I am. It allows
          me to show my feelings and emotions through vibrant colors, my
          nostalgia, depression, and sadness are caught in darker colors, my
          happiness and inspiration in lighter colors, and my fearlessness are
          portrayed in neon colors. Art allows me to express my deep love for my
          heritage and culture. I find immense beauty in it and use it as a
          meaning of creative expression. Each of my paintings shows a story and
          a feeling. Feelings that others in my community can identify with. I
          always enjoy learning and being able to share what I learned with
          others in the Latinx community and be able to gain the hearts of other
          cultures through my paintings.
        </p> */}
<section id="about" className="about-wrapper">
      {/* Image Section */}
      

      {/* Bio Text Section */}
      {/* <div className="bio-text"> */}
        {/* <h2 className="section-title">Sobre Mí / About Me</h2> */}

        <div className="bio-section-es ">
        <h3>¿Quién soy?</h3>
        <p>
          Mi nombre es <strong>Monica López</strong>, artista visual, muralista
          e instructora de técnica mixta. Crecí en Puebla, México – un lugar
          rico en cultura – y desde pequeña descubrí mi pasión por el dibujo y
          la pintura.
        </p>

        <h3>Inspiración</h3>
        <p>
          Mis raíces poblanas, las texturas y la fuerza del color alimentan cada
          obra. Uso tonos vibrantes para la alegría, oscuros para la melancolía
          y neón para mis momentos de locura.
        </p>

        {/* Pull quote */}
        <blockquote>
          “Lo que tus manos y tu imaginación pueden hacer juntas es asombroso.”
        </blockquote>

        <h3>Propósito</h3>
        <p>
          Quiero compartir mi conocimiento con la comunidad latina y capturar
          corazones a través del arte, mientras persigo un título en artes
          visuales.
        </p>
        </div>

        <div className="bio-section-en">
        <h3>About Me</h3>
        <p>
          My name is <strong>Monica Lopez</strong> — Visual Artist, Muralist &
          Teaching Artist. Raised in Puebla, Mexico, I’ve been passionate about
          art since childhood.
        </p>

        <h3>Inspiration</h3>
        <p>
          My work draws from my heritage and my immigration journey to the U.S.
          Colors are my language: dark for nostalgia, light for happiness,
          neon for fearlessness.
        </p>

        {/* Pull quote */}
        <blockquote>
          “Art lets me express a deep love for my heritage and culture.”
        </blockquote>

        <h3>Mission</h3>
        <p>
          I strive to share knowledge with the Latinx community and connect with
          wider audiences through my paintings — on my path to a visual-arts
          degree.
        </p>
        </div>

       
      {/* </div> */}
    </section>
        
        <a
        href="/Monica-Lopez-Resume.pdf"   /* path relative to public root */
        download                           /* forces download instead of opening in new tab */
        className="resume-btn"
      >
       🎨 Download Résumé&nbsp;PDF
      </a>
        </section>

        
        </div>
     
  );
};

export default About;
