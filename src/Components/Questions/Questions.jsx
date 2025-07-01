import './Questions.css';
import BookCall from '../../assets/book-call-primary.svg';
import Accordion from '../Accordion/Accordion';
import { useNavigate } from 'react-router-dom';

function Questions() {
    const navigate = useNavigate();

    return (
        <section className='testimonials gradient-border-black'>
            <div className="section-title">
                <p>Frequently Asked Questions</p>
                <span className="book-call" onClick={() => navigate('/services')}>
                    <img src={BookCall} alt="Book Call Icon" className='book-call-icon' loading="lazy" />
                    <h3 className='work-title'>All works</h3>
                </span>
            </div>
            <div className="que-sections">
                <section className='que-left'>
                    <Accordion
                        title="How long does it take to complete a web development project?"
                        content="The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards."
                    />
                    <Accordion
                        title="Can you handle large-scale mobile app development projects?"
                        content="Yes, our team has extensive experience in managing large-scale mobile app development projects. We follow best practices and utilize the latest technologies to ensure successful project delivery."
                    />
                    <Accordion
                        title="Can you integrate third-party APIs into our mobile app?"
                        content="Yes, our team is skilled in integrating third-party APIs into mobile applications. We ensure seamless connectivity and functionality to enhance the app's capabilities."
                    />
                    <Accordion
                        title="How do you ensure cross-platform compatibility for mobile apps?"
                        content="We utilize responsive design principles and test our applications on various devices and platforms to ensure a consistent user experience."
                    />
                    <Accordion
                        title="What is your approach to user experience (UX) design?"
                        content="We prioritize user research and testing to inform our design decisions. Our goal is to create intuitive and enjoyable experiences for users."
                    />
                </section>
                <aside className='que-right'>
                    <section className="title-sec">
                        <span className="que-title">Ask your question</span>
                        <hr className='horizontal-line' />
                    </section>
                    <form className="form">

                        <div className='form-group'>
                            <label htmlFor="name" className='form-label'>Name</label>
                            <input type="text" id="name" className='form-input' placeholder='Enter your name' required />
                        </div>


                        <div className='form-group'>
                            <label htmlFor="email" className='form-label'>Email</label>
                            <input type="email" id="email" className='form-input' placeholder='Enter your email' required />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="question" className='form-label'>Your Question</label>
                            <textarea id="question" className='form-textarea' placeholder='Type your question here...' required></textarea>
                        </div>

                        <button type="submit" className='form-btn'>Send your message</button>
                    </form>
                </aside>
            </div>
        </section>
    )
}

export default Questions