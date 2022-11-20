import styled from "styled-components";
import DarkModeSwitch from "./components/darkmodeswitch";
import LanguageSwitch from "./components/languageswitch";

const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
  .logo {
    width: 100%;
    max-width: 80px;
    @media (min-width: 600px) {
      max-width: 127px;
    }
    .text {
      fill: ${({ theme }) => theme.textColorBase || "#222222"};
    }
  }
`;

export default function Menu(props) {
  return (
    <StyledMenu>
      <div><Logo text={props.lang.welcome} /></div>
      <div>{props.lang.menuLang}<br/><LanguageSwitch /></div>
      <div>{props.lang.themeLang}<DarkModeSwitch /></div>
    </StyledMenu>
  );
}

function Logo(props) {
  return (
    <h3>{props.text}</h3>
  )
}
