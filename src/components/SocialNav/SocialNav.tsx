import "./socialNav.sass";
import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import instagram from "../../assets/images/icon-instagram.svg";

export const SocialNav = () => {
  return (
    <nav className='nav-socials'>
      <a href='#facebook'>
        <img src={facebook} alt='facebook navigation' />
      </a>
      <a href='#twitter'>
        <img src={twitter} alt='twitter navigation' />
      </a>
      <a href='#pinterest'>
        <img src={pinterest} alt='pinterest navigation' />
      </a>
      <a href='#instagram'>
        <img src={instagram} alt='instagram navigation' />
      </a>
    </nav>
  );
};
