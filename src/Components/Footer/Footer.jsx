import './Footer.css'
import Sphere from '../../assets/sphere.webm'
import sparkleSvg from '../../assets/sparkle-icon.svg';
// import vector from '../../assets/Vector.svg';
// import vector2 from '../../assets/Vector2.svg';
// import vector3 from '../../assets/vector3.svg';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

    return (
        <div className="footer">
            <video className='sphere' autoPlay loop muted playsInline width="100%" height="100%">
                <source src={Sphere} type="video/webm" />
                Your browser does not support the video tag.
            </video>
            <div className="footer-content">
                <div className="content-text">
                    <p className="footer-title">Have a project in mind? </p>
                    <p className="subtitle">Let’s build your case study next.</p>
                </div>
                <div className="connect-btn gradient-border-black-round" onClick={() => navigate('/contact')}>
                    <a href="#">
                        <img
                            src={sparkleSvg}
                            alt="Sparkle Icon"
                            className="sparkle-icon"
                            loading="lazy"
                        />
                        <span className="nav-text">Book a free call</span>
                    </a>
                </div>
                <span className='footer-divider' ></span>
                <div className="footer-links">
                    <p className="left">© 2024  | @Wilgax</p>
                    {/* <div className="icons-right">
                        <a href="#"><img src={vector3} alt="Vector Icon 3" className="vector-icon" loading="lazy" /></a>
                        <a href="#"><img src={vector} alt="Vector Icon" className="vector-icon" loading="lazy" /></a>
                        <a href="#"><img src={vector2} alt="Vector Icon 2" className="vector-icon" loading="lazy" /></a>
                    </div> */}
                </div>
            </div>
        </div >
    )
}

export default Footer;