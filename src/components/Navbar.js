import React from "react";
import navbarStyle from "./Navbar.module.css";

function Navbar(props) {

    return(
        <div className={navbarStyle.navbar}>
            <div className={navbarStyle.brand}> brand </div>
        </div>
    );
}

export default Navbar;