import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
// import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';


const Navbar = () => {

  const [active, setActive] = useState('')



  return (
    <nav
      className={`
      ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}//needs to be inside `` so that can be a dinamic template string ||| top-0 make stay on the top, z-20 to make it appear above other elements.
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">{/* max-w-7xl meaning a lot of width in the navbar. mx-auto is margin-x auto */}
        <Link
          to="/"//meaning top of the page
          className="flex items-center gap-2"//gap-2 meaning utilities for controlling gutters between grid and flexbox items.(A propriedade css gap define os espaços (gutters (en-US)) entre as linhas e colunas)
          onClick={() => {
          setActive("");
          window.scrollTo(0, 0);// scroll to the top of the page.
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain"/>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar