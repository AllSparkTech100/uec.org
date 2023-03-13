import Nav from "./Nav";
import { useState } from "react";
import './menulogo.css'

function MenuLogo() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    function showMenu() {
        setMenuIsOpen(true);
    };

    function closeMenu() {
        setMenuIsOpen(false);
    };


    return (
        <div>
            <button onClick={showMenu}>Menu</button>
            <button onClick={closeMenu}>close</button>
            {menuIsOpen && <Nav/>}
        </div>
    );
}

export default MenuLogo;