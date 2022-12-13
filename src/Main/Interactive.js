import interactiveMobile from "../images/mobile/image-interactive.jpg";
import interactiveDesktop from "../images/desktop/image-interactive.jpg";

const Interactive = () => {
  return (
    <section className="interactive_section">
      <div className="img-wrapper">
        <picture>
          <source media="(min-width:376px)" srcSet={interactiveDesktop} />
          <img src={interactiveMobile} alt="" />
        </picture>
      </div>
      <div className="content">
        <h2>The leader in interactive VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};

export default Interactive;
