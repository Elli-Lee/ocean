import HeaderTheme from "./components/theme/Header";
import MainTheme from "./components/theme/Main";
import FooterTheme from "./components/theme/Footer";
import "./AppTheme.css";
import { DarkModeProvider } from "./context/DarkModeContext";
const AppTheme = (props) => {
  return (
    <>
      <DarkModeProvider initDarkMode={false}>
        <HeaderTheme />
        <MainTheme />
        <FooterTheme />
      </DarkModeProvider>
    </>
  );
};

export default AppTheme;
