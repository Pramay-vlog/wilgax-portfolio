import './Achievements.css';
import AwardsIcon from '../../assets/awards.svg';
import WhiteDot from '../../assets/white-dot.svg';

function Achievements() {
    const achievementsContent = [
        { title: "September 2023", subTitle: 'Global Recognition for Innovation', description: 'In 2023, our digital agency gained global acclaim for innovative solutions, setting new standards in the ever-evolving digital landscape.' },
        { title: "March 2019", subTitle: 'Industry Leadership Acknowledged', description: 'Recognized as an industry leader in 2019, our agency received prestigious awards, affirming our commitment to excellence and client satisfaction.' },
        { title: "August 2015", subTitle: 'Expansion into International Markets', description: 'Expanding horizons in 2015, our agency successfully entered international markets, establishing a global presence and serving clients on a broader scale.' },
        { title: "January 2010", subTitle: 'GPioneering the Digital Frontier', description: 'In 2010, our agency was born, pioneering the digital frontier and establishing core principles that have guided us through a decade of innovation.' },
    ];

    const awardsContent = [
        { date: 'October 2017', title: 'Digital Excellence Award', subTitle: 'Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality.' },
        { date: 'March 2019', title: 'Top Mobile App Development Agency', subTitle: 'Recognized as a top mobile app development agency by industry experts, highlighting our proficiency in delivering seamless and user-centric mobile applications.' },
        { date: 'July 2022', title: 'Best User Experience Award', subTitle: 'Acknowledging our focus on user-centered design, this award celebrates our efforts in delivering seamless and engaging user experiences across all digital platforms.' },
        { date: 'November 2024', title: 'Best Digital Marketing Campaign', subTitle: 'Awarded for an exceptional digital marketing campaign with outstanding results, showcasing our data-driven strategies and targeted marketing efforts that achieved remarkable business growth for our clients.' },
    ];

    return (
        <section className='achievements gradient-border-black'>
            <div className="section-title">
                Our Achievements
            </div>
            <div className="achievements-cards">
                {achievementsContent.map((item, index) => (
                    <article className="child-achievements" key={index}>
                        <div className="child-achievements-content">
                            <h3 className='achievements-card-title'>{item.title}</h3>
                        </div>
                        <p className='achievements-card-subTitle'>{item.subTitle}</p>
                        <div className="achievements-description">
                            <p>{item.description}</p>
                        </div>
                    </article>
                ))}
            </div>
            <div className="section-title-right">
                Awards & Recognitions
            </div>
            <div className="achievements-cards">
                {awardsContent.map((item, index) => (
                    <article className="child-achievements-awards" key={index}>
                        <div className="child-content-date-outer">
                            <span className="child-content-date">
                                <p className="category">Date</p>
                                <img src={WhiteDot} alt="White Dot" loading="lazy"/>
                                <p className="category">{item.date}</p>
                            </span>
                            <img src={AwardsIcon} alt="Awards Icon" className='awards-icon' loading="lazy"/>
                        </div>
                        <div className="child-achievements-content-2">
                            <h3 className='achievements-card-title-2'>{item.title}</h3>
                            <p className='reason-card-subTitle'>{item.subTitle}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Achievements;
