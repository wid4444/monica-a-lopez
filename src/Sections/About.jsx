import "./About.css";
import monica from "../assets/monica-bio.jpeg";
import resume from "../assets/resume.pdf"; // Assuming you have a resume PDF in the assets folder

const About = () => {
  return (
    <div id="about" className="about-container">
      <section id="bio" className="bio-container">
        <div className="bio-header">
          <img src={monica} alt="Monica Lopez" className="bio-img" />

          <h1 className="bio-title">Bio</h1>
        </div>
        <section id="about" className="about-wrapper">
          <div className="bio-section-es ">
            <h3>¿Quién soy?</h3>
            <p>
              Mi nombre es <strong>Monica López</strong>, artista visual,
              muralista e instructora de técnica mixta. Crecí en Puebla, México
              – un lugar rico en cultura – y desde pequeña descubrí mi pasión
              por el dibujo y la pintura.
            </p>

            <h3>Inspiración</h3>
            <p>
              Mis raíces poblanas, las texturas y la fuerza del color alimentan
              cada obra. Uso tonos vibrantes para la alegría, oscuros para la
              melancolía y neón para mis momentos de locura.
            </p>

            {/* Pull quote */}
            <blockquote>
              “Lo que tus manos y tu imaginación pueden hacer juntas es
              asombroso.”
            </blockquote>

            <h3>Propósito</h3>
            <p>
              Quiero compartir mi conocimiento con la comunidad latina y
              capturar corazones a través del arte, mientras persigo un título
              en artes visuales.
            </p>
          </div>

          <div className="bio-section-en">
            <h3>About Me</h3>
            <p>
              My name is <strong>Monica Lopez</strong> — Visual Artist, Muralist
              & Teaching Artist. Raised in Puebla, Mexico, I’ve been passionate
              about art since childhood.
            </p>

            <h3>Inspiration</h3>
            <p>
              My work draws from my heritage and my immigration journey to the
              U.S. Colors are my language: dark for nostalgia, light for
              happiness, neon for fearlessness.
            </p>

            {/* Pull quote */}
            <blockquote>
              “Art lets me express a deep love for my heritage and culture.”
            </blockquote>

            <h3>Mission</h3>
            <p>
              I strive to share knowledge with the Latinx community and connect
              with wider audiences through my paintings — on my path to a
              visual-arts degree.
            </p>
          </div>
        </section>

        <a
          href={resume} /* path relative to public root */
          download /* forces download instead of opening in new tab */
          className="resume-btn"
        >
          🎨 Download Resume PDF
        </a>
      </section>
    </div>
  );
};

export default About;
