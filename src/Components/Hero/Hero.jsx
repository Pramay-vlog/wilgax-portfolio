import './Hero.css';
import wave from '../../assets/wave.gif';
import Arrow from '../../assets/Line.svg';

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">Build Once, Grow Forever.</h1>
                <p className="hero-subtitle">We turn complex ideas into effortless experiences</p>
                <img src={Arrow} alt="Arrow Icon" className='hero-arrow' />
            </div>
            <img src={wave} alt="Hero Visual" className='hero-image' />
        </section>
    );
}

export default Hero;
