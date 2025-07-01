import './Header.css';
import Logo from '../../assets/logo.webp';
import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { NavLink } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);

    const closeMenu = () => setMenuOpen(false);

    const navLinkClass = ({ isActive }) =>
        isActive ? 'active' : '';

    return (
        <header className="header gradient-border flex-between container">
            <img src={Logo} alt="Wilgax Logo" className="logo" loading="lazy" />

            {/* Desktop Nav */}
            <nav className="navbar">
                <ul>
                    <li className="nav-items">
                        <NavLink to="/" end className={navLinkClass}>
                            HOME
                        </NavLink>
                    </li>
                    <li className="nav-items">
                        <NavLink to="/about" className={navLinkClass}>
                            ABOUT
                        </NavLink>
                    </li>
                    <li className="nav-items">
                        <NavLink to="/services" className={navLinkClass}>
                            SERVICES
                        </NavLink>
                    </li>
                    <li className="nav-items-2">
                        <NavLink to="/contact" className={navLinkClass}>
                            CONTACT US
                        </NavLink>
                    </li>
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
                    <li className="nav-items">
                        <NavLink to="/" end className={navLinkClass} onClick={closeMenu}>
                            HOME
                        </NavLink>
                    </li>
                    <li className="nav-items">
                        <NavLink to="/about" className={navLinkClass} onClick={closeMenu}>
                            ABOUT
                        </NavLink>
                    </li>
                    <li className="nav-items">
                        <NavLink to="/services" className={navLinkClass} onClick={closeMenu}>
                            SERVICES
                        </NavLink>
                    </li>
                    <li className="nav-items-2">
                        <NavLink to="/contact" className={navLinkClass} onClick={closeMenu}>
                            CONTACT US
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
