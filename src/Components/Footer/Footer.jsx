import './Footer.css'
import Sphere from '../../assets/sphere.gif'
import sparkleSvg from '../../assets/sparkle-icon.svg';
import vector from '../../assets/Vector.svg';
import vector2 from '../../assets/Vector2.svg';
import vector3 from '../../assets/Vector3.svg';

function Footer() {
    return (
        <div className="footer">
            <img src={Sphere} alt="Sphere" className='sphere' />
            <div className="footer-content">
                <div className="content-text">
                    <p className="footer-title">Have a project in mind? </p>
                    <p className="subtitle">Let’s build your case study next.</p>
                </div>
                <div className="connect-btn">
                    <div className="gradient-border">
                        <a href="#">
                            <img src={sparkleSvg} alt="Sparkle Icon" className="sparkle-icon" />
                            <span className="nav-text gradient-text">Let's Connect</span>
                        </a>
                    </div>
                </div>
                <span className='footer-divider' ></span>
                <div className="footer-links">
                    <p className="left">© 2024  | @Wilgax</p>
                    <div className="icons-right">
                        <a href="#"><img src={vector3} alt="Vector Icon 3" className="vector-icon" /></a>
                        <a href="#"><img src={vector} alt="Vector Icon" className="vector-icon" /></a>
                        <a href="#"><img src={vector2} alt="Vector Icon 2" className="vector-icon" /></a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer;