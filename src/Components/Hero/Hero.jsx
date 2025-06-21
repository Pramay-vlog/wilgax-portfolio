import './Hero.css';
import HeroBtn from '../../assets/hero-btn.svg';
import HeroVid from '../../assets/clicks.mp4';

function Hero() {

    const services = [
        'Automation Tools',
        ' • ',
        'Custom Software',
        ' • ',
        'Website Development',
        ' • ',
        'Mobile app Development',
        ' • ',
        'Branding',
        ' • ',
        'Marketing',
        ' • ',
        'UI/UX Design',
        ' • ',
        'Consulting',
        ' • ',
    ];

    return (
        <section className='hero'>
            <section className='sec-left gradient-border'>
                <div className="sec-main flex">
                    <div className='sec-main-dk'>
                        <div className="main-l">
                            <span className='sec-main-title-1'>Build once,</span>
                            <div className='sec-main-title'>grow forever.</div>
                        </div>
                        <div className="main-r">
                            <img src={HeroBtn} alt="Hero Button" className='hero-btn responsive-btn' />
                        </div>
                    </div>
                    <div className="sec-main-mb">
                        <div className="main-l">
                            <span className='sec-main-title-1'>Build once,</span>
                            <div className='sec-main-title'>grow forever.</div>
                        </div>
                        <div className="main-r">
                            <img src={HeroBtn} alt="Hero Button" className='hero-btn responsive-btn' />
                        </div>
                    </div>
                    <p className='sec-main-subtitle'>Smart automation. Real growth. No extra effort.</p>
                </div>
                <div className="sec-banner">
                    <div className="sec-banner-track">
                        {[...services, ...services, ...services, ...services].map((service, index) => (
                            <span key={index}>{service}</span>
                        ))}
                    </div>
                </div>
            </section>
            <aside className='sec-right gradient-border'>
                {/* <video className='hero-video' height={400} autoPlay loop muted playsInline> */}
                <video className='hero-video' height={400} muted autoPlay={false} >
                    <source src={HeroVid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </aside>
        </section>
    )
}

export default Hero;