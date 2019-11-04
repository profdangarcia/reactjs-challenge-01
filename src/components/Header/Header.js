import React from 'react';
import './Header.css';
import faceLogo from '../../assets/facebook.png';


function Header( ) {
  return (
    <header>
        <img 
          src={faceLogo} 
          alt="Facebook Logo"
        />
        <nav>
            <span>
                Meu Perfil
            </span>
            <i className="material-icons">
                account_circle
            </i>
        </nav>
    </header>
  );
}




export default Header;