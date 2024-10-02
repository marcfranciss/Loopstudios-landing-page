import burgerBtn from "../../assets/images/icon-hamburger.svg";
import closeBtn from "../../assets/images/icon-close.svg";
import { Logo } from "./Logo";
import "./navBarMobile.sass";
import { useState } from "react";

export const NavBarMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleDialogOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add("dialog-open");
    } else {
      document.body.classList.remove("dialog-open");
    }
  };
  return (
    <div className='navMobile-container'>
      <button
        type='button'
        className='btn-burger'
        onClick={handleDialogOpen}
        aria-controls='nav-mobile'
        aria-expanded={isOpen}
        aria-label='Navbar toggler'>
        <img src={burgerBtn} alt='' />
      </button>
      <dialog
        id='nav-mobile'
        open={isOpen}
        aria-atomic={isOpen}
        aria-live={isOpen ? "assertive" : "off"}>
        <header>
          <Logo />
          <button
            type='button'
            className='btn-close'
            onClick={handleDialogOpen}
            aria-controls='nav-mobile'
            aria-expanded={isOpen}
            aria-label='Navbar toggler'>
            <img src={closeBtn} alt='' />
          </button>
        </header>
        <nav className='nav-links'>
          <a href='#about'>about</a>
          <a href='#careers'>careers</a>
          <a href='#events'>events</a>
          <a href='#products'>products</a>
          <a href='#support'>support</a>
        </nav>
      </dialog>
    </div>
  );
};
