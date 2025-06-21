import './SubHero.css';
import CircleIcon from '../../assets/IconContainer.svg';

function SubHero() {
    const subHeroContent = [
        { title: "Clients", count: '200+' },
        { title: "Projects", count: '280+' },
        { title: "Happy Clients", count: '100%' },
        { title: "Followers", count: '400K' },
    ]

    return (
        <section className='sub-hero gradient-border-black'>
            <article className="flex-center f1">
                {subHeroContent.map((item, index) => (
                    <article className="child-articales" key={index}>
                        <h3 className='article-title'>{item.title}</h3>
                        <p className='article-num'>{item.count}</p>
                    </article>
                ))}
            </article>

            <article className="f2">
                <article className="child-articales flex-center">
                    <h3 className='article-title'>Years of Experience</h3>
                    <p className='article-num'>10+</p>
                </article>

                <article className="child-articales know-more flex-center">
                    <img src={CircleIcon} alt="Circle Icon" className='circle' />
                    <h3 className='know-more-title'>Know More</h3>
                </article>
            </article>
        </section>
    )
}

export default SubHero