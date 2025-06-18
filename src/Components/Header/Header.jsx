import './Header.css'
import Logo from '../../assets/logo.svg';

function Header() {
    return (
        <header className='header gradient-border flex-between container'>
            <img src={Logo} alt="Wilgax Logo" className="logo" />
            <nav className="navbar">
                <ul>
                    <li className="nav-items"><a href="#">HOME</a></li>
                    <li className="nav-items"><a href="#">ABOUT</a></li>
                    <li className="nav-items-2"><a href="#">CONTACT US</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;