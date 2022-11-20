import React from "react";

export const TextContext = React.createContext({
    mode: "",
    setMode: () => { alert("deu ruim") },
    toggleMode: () => { alert("deu ruim") }
});

export default function TextProvider(props) {
    const [mode, setMode] = React.useState(props.initialText);

    function toggleMode() {
        if (mode != "en") setMode("en");
        if (mode != "pt") setMode("pt");
    }

    return (
        <TextContext.Provider value={{
            mode: mode,
            setMode: setMode,
            toggleMode: toggleMode
        }}>
            { props.children }
        </TextContext.Provider>
    )
}