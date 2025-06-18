import './Reason.css';
import CircleIcon from '../../assets/IconContainer.svg';

function Reason() {
    const reasonContent = [
        { title: "Expertise in Cutting-Edge Technologies", subTitle: 'Wilgax ensures your projects are powered by state-of-the-art technologies, guaranteeing innovation and future-proof solutions.' },
        { title: "Expertise in Cutting-Edge Technologies", subTitle: 'Wilgax ensures your projects are powered by state-of-the-art technologies, guaranteeing innovation and future-proof solutions.' },
        { title: "Expertise in Cutting-Edge Technologies", subTitle: 'Wilgax ensures your projects are powered by state-of-the-art technologies, guaranteeing innovation and future-proof solutions.' },
        { title: "Expertise in Cutting-Edge Technologies", subTitle: 'Wilgax ensures your projects are powered by state-of-the-art technologies, guaranteeing innovation and future-proof solutions.' },
    ];

    return (
        <section className='reason gradient-border-black'>
            <div className="reason-title">
                Reasons to Choose Wilgax for Your Digital Journey
            </div>
            <div className="reason-cards">
                {reasonContent.map((item, index) => (
                    <article className="child-reason" key={index}>
                        <div className="child-reason-content">
                            <h3 className='reason-card-title'>{item.title}</h3>
                            <p className='reason-card-subTitle'>{item.subTitle}</p>
                        </div>
                        <div className="book-call">
                            <img src={CircleIcon} alt="Circle Icon" className='circle' />
                            <h3 className='book-call-title'>Book A Call</h3>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Reason;
