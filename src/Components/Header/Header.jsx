import './Header.css';
import Logo from '../../assets/logo.webp';
import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);

    return (
        <header className="header gradient-border flex-between container">
            <img src={Logo} alt="Wilgax Logo" className="logo" />

            {/* Desktop Nav */}
            <nav className="navbar">
                <ul>
                    <li className="nav-items"><a href="#">HOME</a></li>
                    <li className="nav-items"><a href="#">ABOUT</a></li>
                    <li className="nav-items-2"><a href="#">CONTACT US</a></li>
                </ul>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
                className={`hamburger-btn ${menuOpen ? 'menu-open' : ''}`}
                aria-label="Toggle menu"
                onClick={toggleMenu}
            >
                {menuOpen ? <FiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
            </button>

            {/* Sidebar */}
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li className="nav-items"><a href="#">HOME</a></li>
                    <li className="nav-items"><a href="#">ABOUT</a></li>
                    <li className="nav-items-2"><a href="#">CONTACT US</a></li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
