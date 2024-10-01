import "./vrSection.sass";
import mobileInteractive from "../../assets/images/mobile/image-interactive.jpg";
import desktopInteractive from "../../assets/images/desktop/image-interactive.jpg";

export const VRSection = () => {
  return (
    <section id='s-vr'>
      <div className='vr-image'>
        <picture>
          <source media='(min-width: 30rem)' srcSet={mobileInteractive} />
          <source media='(min-width: 68rem)' srcSet={desktopInteractive} />
          <img src={desktopInteractive} alt='A man happily wearing VR' />
        </picture>
      </div>
    </section>
  );
};
