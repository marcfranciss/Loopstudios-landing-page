import "./navBar.sass";

interface NavBarProps {
  id?: string;
  className?: string;
}
export const NavBar = ({ id, className }: NavBarProps) => {
  return (
    <nav id={id} className={className}>
      <a href='#about'>about</a>
      <a href='#careers'>careers</a>
      <a href='#events'>events</a>
      <a href='#products'>products</a>
      <a href='#support'>support</a>
    </nav>
  );
};
