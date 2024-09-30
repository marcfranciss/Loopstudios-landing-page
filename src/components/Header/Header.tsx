import "./header.sass";
import { Logo } from "./Logo";
import { NavBarMobile } from "./NavBarMobile";

export const Header = () => {
  return (
    <header>
      <Logo />
      <NavBarMobile />
    </header>
  );
};
