import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";

const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <footer className={`footer footer--${darkMode ? "dark" : "light"}`}>
      <p className="footer__text">푸터 컴포넌트</p>
    </footer>
  );
};

export default Footer;
