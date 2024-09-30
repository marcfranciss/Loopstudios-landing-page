import burgerBtn from "../../assets/images/icon-hamburger.svg";
import "./navBarMobile.sass";

export const NavBarMobile = () => {
  return (
    <div className='navMobile-container'>
      <button className='btn-burger'>
        <img src={burgerBtn} alt='' />
      </button>
      <dialog open></dialog>
    </div>
  );
};
