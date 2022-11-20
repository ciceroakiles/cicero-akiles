import React from "react";
import { TextContext } from "./textmode";

export default function LanguageSwitch() {
  const contexto = React.useContext(TextContext);
  return (
    <>
      <select onChange={contexto.toggleMode}>
        <option key="pt" value="pt">Português</option>
        <option key="en" value="en">English</option>
      </select>
    </>
  )
}