import './Header.css'
import sparkleSvg from '../../assets/sparkle-icon.svg';
import Logo from '../../assets/wilgax-logo.svg';

function Header() {
  return (
    <header className='header'>
      <img src={Logo} alt="Wilgax Logo" className="logo" />
      <nav className="navbar">
        <ul>
          <li className="nav-items-base nav-items"><a href="#">About</a></li>
          <li className="nav-items-base nav-items-2">
            <div className="gradient-border">
              <a href="#">
                <img src={sparkleSvg} alt="Sparkle Icon" className="sparkle-icon" />
                <span className="nav-text gradient-text">Let's Connect</span>
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header