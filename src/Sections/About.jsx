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
              Mi nombre es <strong>Monica López</strong>. Soy una artista autodidacta y local en Delaware. Me dedico en las artes visuales, soy muralista e instructora de mix media.
            </p>

            <h3>Inspiración</h3>
            <p>
            Arraigada en mi herencia y en mi camino como inmigrante, mi trabajo se expresa a través del color como su lenguaje.
            </p>

            {/* Pull quote */}
            <blockquote>
              “Lo que tus manos y tu imaginación pueden hacer juntas es
              asombroso.”
            </blockquote>

            <h3>Propósito</h3>
            <p>
              Quiero compartir mi conocimiento con la comunidad latina y
              capturar el corazon de otras culturas a través del arte.
            </p>
          </div>

          <div className="bio-section-en">
            <h3>About Me</h3>
            <p>
              My name is <strong>Monica Lopez</strong>. I’m a self-taught visual artist and local muralist based in Delaware. I specialize in visual arts and work as a mixed media instructor.
            </p>

            <h3>Inspiration</h3>
            <p>
            Rooted in my heritage and immigration journey, my work speaks through color as its language.
            </p>

            {/* Pull quote */}
            <blockquote>
              “What your hands and imagination can create together is amazing.”
            </blockquote>

            <h3>Mission</h3>
            <p>
              I want to share my knowledge with the Latin community and capture
              the hearts of other cultures through art.
            </p>
          </div>
        </section>

        <a
          href={resume} /* path relative to public root */
          download="Monica-A-Lopez-Resume.pdf"
          className="resume-btn"
        >
          🎨 Download Resume PDF
        </a>
      </section>
    </div>
  );
};

export default About;
