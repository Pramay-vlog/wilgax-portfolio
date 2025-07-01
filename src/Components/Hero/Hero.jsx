import './Hero.css';
import HeroBtn from '../../assets/hero-btn.svg';
import DownArrow from '../../assets/down-arrow.svg';
import HeroVid from '../../assets/clicks.webm';
import { useNavigate } from 'react-router-dom';

function Hero({ title1, title2, subtitle, component }) {
    const navigate = useNavigate();

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

    const asideContent = [
        { title: "Clients", count: '200+' },
        { title: "Projects", count: '280+' },
        { title: "Happy Clients", count: '100%' },
        { title: "Followers", count: '400K' },
    ]

    return (
        <section className='hero'>
            {(component === 'Home' || component === 'Services') && (
                <>
                    <section className='sec-left gradient-border'>
                        <div className="sec-main flex">
                            <div className='sec-main-dk'>
                                <h1 className="main-l">
                                    <span className='sec-main-title-1'>{title1}</span>
                                    <br />
                                    <span className='sec-main-title'>{title2}</span>
                                </h1>
                                <div className="main-r">
                                    <img
                                        src={HeroBtn}
                                        alt="Hero Button"
                                        className='hero-btn responsive-btn'
                                        loading="eager"  // Eagerly load above-the-fold image
                                        width={200}
                                        height={50}
                                        decoding="async" // Hint for performance
                                        onClick={() => navigate('/contact')}
                                    />
                                </div>
                            </div>
                            <div className="sec-main-mb">
                                <h1 className="main-l">
                                    <span className='sec-main-title-1'>{title1}</span>
                                    <br />
                                    <span className='sec-main-title'>{title2}</span>
                                </h1>
                                <div className="main-r">
                                    <img
                                        src={HeroBtn}
                                        alt="Hero Button"
                                        className='hero-btn responsive-btn'
                                        loading="eager"  // Eagerly load above-the-fold image
                                        width={200}
                                        height={50}
                                        decoding="async" // Hint for performance
                                        onClick={() => navigate('/contact')}
                                    />
                                </div>
                            </div>
                            <p
                                className={`sec-main-subtitle ${!subtitle || subtitle.length === 0 ? 'hide-subtitle' : ''}`}
                            >
                                {subtitle}
                            </p>
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
                        <video className='hero-video' height={400} autoPlay loop muted playsInline>
                            <source src={HeroVid} type="video/webm" />
                            Your browser does not support the video tag.
                        </video>
                    </aside>
                </>
            )}

            {component === 'About' && (
                <>
                    <section
                        className='sec-left gradient-border'
                        style={{ justifyContent: 'center' }}
                    >
                        <div className="sec-main">
                            <div className='sec-main-dk'>
                                <h1 className="main-l">
                                    <span className='sec-main-title-1'>{title1}</span>
                                    <br />
                                    <span className='sec-main-title'>{title2}</span>
                                </h1>
                                <div className="main-r">
                                    <img
                                        src={HeroBtn}
                                        alt="Hero Button"
                                        className='hero-btn responsive-btn'
                                        loading="eager"  // Eagerly load above-the-fold image
                                        width={200}
                                        height={50}
                                        decoding="async" // Hint for performance
                                        onClick={() => navigate('/contact')}
                                    />
                                </div>
                            </div>
                            <div className="sec-main-mb">
                                <h1 className="main-l">
                                    <span className='sec-main-title-1'>{title1}</span>
                                    <br />
                                    <span className='sec-main-title'>{title2}</span>
                                </h1>
                                <div className="main-r">
                                    <img
                                        src={HeroBtn}
                                        alt="Hero Button"
                                        className='hero-btn responsive-btn'
                                        loading="eager"  // Eagerly load above-the-fold image
                                        width={200}
                                        height={50}
                                        decoding="async" // Hint for performance
                                        onClick={() => navigate('/contact')}
                                    />
                                </div>
                            </div>
                            <p
                                className={`sec-main-subtitle ${!subtitle || subtitle.length === 0 ? 'hide-subtitle' : ''}`}
                            >
                                {subtitle}
                            </p>
                        </div>
                    </section>
                    <aside
                        className='sec-right gradient-border'
                        style={{
                            backgroundColor: '#FFF',
                            padding: '1.25rem',
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '2rem',
                        }}
                    >
                        {asideContent.map((item, index) => (
                            <article className="stats-card" key={index}>
                                <h3 className="stats-title">{item.title}</h3>
                                <p className="stats-count">{item.count}</p>
                            </article>
                        ))}
                        <div className="know-more-down">
                            <img src={DownArrow} alt="Down Arrow" className='know-more-img-down' loading="lazy" />
                            <p className="know-more-title-down">Know More</p>
                        </div>
                    </aside>
                </>
            )}
        </section>
    )
}

export default Hero;