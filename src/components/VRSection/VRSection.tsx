import "./vrSection.sass";
import mobileInteractive from "../../assets/images/mobile/image-interactive.jpg";
import desktopInteractive from "../../assets/images/desktop/image-interactive.jpg";

export const VRSection = () => {
  return (
    <section id='s-vr'>
      <div className='s-vr-container'>
        <div className='vr-image'>
          <picture>
            <source media='(min-width: 30rem)' srcSet={mobileInteractive} />
            <source media='(min-width: 68rem)' srcSet={desktopInteractive} />
            <img src={desktopInteractive} alt='A man happily wearing VR' />
          </picture>
        </div>
        <div className='vr-text'>
          <h2>The leader in interactive VR</h2>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
};
