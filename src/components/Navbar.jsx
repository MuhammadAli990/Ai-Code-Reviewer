import React from "react";
import ThemeChanger from "./ThemeChanger";

function Navbar(props) {
    const {theme,setTheme} = props;
  return (
    <div className="navbar bg-base-100 shadow-sm h-[10%]">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl ml-2">CodeMentor</a>
      </div>
      <div className="flex-none">
        <ThemeChanger theme={theme} setTheme={setTheme}/>
      </div>
    </div>
  );
}

export default Navbar;
