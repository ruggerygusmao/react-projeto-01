import React from "react";
import "./Header.css";

export default function Header(){

    return(
        <>
            <nav className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>Produtos</li>
                    <li>Sobre</li>
                </ul>
            </nav>
        </>
    );
}