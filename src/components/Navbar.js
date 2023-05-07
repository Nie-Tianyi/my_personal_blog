import React from "react";

import navbarStyle from "./Navbar.module.css";
import {Link} from "react-router-dom";

function Navbar(props) {

    return(
        <div>
            <div className={navbarStyle.navbar}>

                <div className={navbarStyle.links}>
                    <Link to="/" > HOME </Link>
                </div>

                <div className={navbarStyle.links}>
                    <Link to="/blog">Blogs</Link>
                </div>

                <div className={navbarStyle.github}>
                    <Link to={"https://github.com/Nie-Tianyi/my_personal_blog"}>Github</Link>
                </div>
            </div>

        </div>


);
}


export default Navbar;