import React from 'react';
import {Link} from "react-router-dom";


const Menu = () => {
  return (
    <>
    <nav>
        <ul>
            <li><Link to="/">Página Principal</Link> </li>
            <li><Link to="Conteudo">Conteúdo</Link> </li>
        </ul>
    </nav>
    </>
  )
}

export default Menu;