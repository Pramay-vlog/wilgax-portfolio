import { useState } from 'react';
import './Questions.css';
import BookCall from '../../assets/book-call-primary.svg';
import Accordion from '../Accordion/Accordion';
import { useNavigate } from 'react-router-dom';

function Questions() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        question: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        question: ''
    });

    const [isSuccess, setIsSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const validateForm = () => {
        let formErrors = { name: '', email: '', question: '' };
        let isValid = true;

        if (!formData.name) {
            formErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.email) {
            formErrors.email = 'Email is required';
            isValid = false;
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Invalid email address';
            isValid = false;
        }

        if (!formData.question) {
            formErrors.question = 'Question is required';
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);

            setTimeout(async () => {
                await fetch('https://api.wilgax.com/api/v1/questions', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                setIsSuccess(true);
                setIsSubmitting(false);

                setFormData({
                    name: '',
                    email: '',
                    question: ''
                });
                setErrors({
                    name: '',
                    email: '',
                    question: ''
                });

                setTimeout(() => setIsSuccess(false), 3000);
            }, 1500);
        }
    };

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

                    {/* Success Message */}
                    {isSuccess && (
                        <div className="success-message">
                            <span className="success-icon">✔️</span>
                            <p>Your message has been successfully submitted!</p>
                        </div>
                    )}

                    <form className="form" onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor="name" className='form-label'>Name</label>
                            <input
                                type="text"
                                id="name"
                                className={`form-input ${errors.name ? 'error' : ''}`}
                                placeholder='Enter your name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            {errors.name && <p className="error-message">{errors.name}</p>}
                        </div>

                        <div className='form-group'>
                            <label htmlFor="email" className='form-label'>Email</label>
                            <input
                                type="email"
                                id="email"
                                className={`form-input ${errors.email ? 'error' : ''}`}
                                placeholder='Enter your email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            {errors.email && <p className="error-message">{errors.email}</p>}
                        </div>

                        <div className='form-group'>
                            <label htmlFor="question" className='form-label'>Your Question</label>
                            <textarea
                                id="question"
                                className={`form-textarea ${errors.question ? 'error' : ''}`}
                                placeholder='Type your question here...'
                                value={formData.question}
                                onChange={handleChange}
                                required
                            />
                            {errors.question && <p className="error-message">{errors.question}</p>}
                        </div>

                        <button
                            type="submit"
                            className={`form-btn ${isSubmitting ? 'loading' : ''}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Send your message'}
                        </button>
                    </form>
                </aside>
            </div>
        </section>
    );
}

export default Questions;
