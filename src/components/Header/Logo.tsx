import "./logo.sass";
import pageLogo from "../../assets/images/logo.svg";

export const Logo = () => {
  return (
    <div className='logo-container'>
      <a href='/'>
        <img src={pageLogo} alt='Loopstudios logo' loading='lazy' />
      </a>
    </div>
  );
};
