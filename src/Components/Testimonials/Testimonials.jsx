import './Testimonials.css';
import BookCall from '../../assets/book-call-primary.svg';
import Btn from '../../assets/testimonialBtn.svg';
import { useNavigate } from 'react-router-dom';

function Testimonials() {
    const navigate = useNavigate();

    const reasonContent = [
        { title: "Wilgax turned our business around!", subTitle: 'Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!', client: 'Sarah Thompson', ownerOf: 'CEO of BlueBloom' },
        { title: "Wilgax's expertise in digital marketing is unmatched.", subTitle: 'Their data-driven approach and innovative strategies have significantly improved our online presence.', client: 'John Walker', ownerOf: 'Marketing Manager at TechCorp' },
        { title: "Working with Wilgax was a pleasure.", subTitle: `Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.`, client: 'Lisa Williams', ownerOf: 'CEO Of HealthTech' },
        { title: "Wilgax's web design team brought our vision to life.", subTitle: 'Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.', client: 'Jennifer Lee', ownerOf: 'COO of Foodie Haven' },
    ];

    return (
        <section className='testimonials gradient-border-black'>
            <div className="section-title">
                <p>Testimonials</p>
                <span className="book-call">
                    <img src={BookCall} alt="Book Call Icon" className='book-call-icon' loading="lazy" />
                    <h3 className='work-title' onClick={() => navigate('/services')}>All works</h3>
                </span>
            </div>
            <div className="testimonials-cards">
                {reasonContent.map((item, index) => (
                    <div className="testimonial-wrapper" key={index}>
                        <article className="child-testimonials">
                            <div className="child-testimonials-content">
                                <h3 className='testimonials-card-title'>{item.title}</h3>
                                <p className='testimonials-card-subTitle'>{item.subTitle}</p>
                            </div>
                        </article>
                        <div className="testimonial-bottom-section">
                            <span className="bottom-left">
                                <p className="client-name">{item.client}</p>
                                <p className="client-role">{item.ownerOf}</p>
                            </span>
                            <img src={Btn} alt="Button Icon" className='testimonial-btn' loading="lazy" width={200} height={50} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Testimonials;
