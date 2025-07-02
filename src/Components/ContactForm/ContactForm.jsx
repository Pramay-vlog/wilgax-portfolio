import { useState } from 'react';
import './ContactForm.css';
import BookCall from '../../assets/book-call-primary.svg';

function ContactForm() {
    const PhoneNumbers = [
        { title: "Customer Support", number: "+1 (123) 456-7890" },
        { title: "Sales Inquiries", number: "+1 (234) 567-8901" },
        { title: "Technical Support", number: "+1 (345) 678-9012" }
    ];

    const EmailList = [
        { title: "General Inquiries", email: "info@wilgax.com" },
        { title: "Business Collaborations", email: "partnerships@wilgax.com" },
        { title: "Job Opportunities", email: "careers@wilgax.com" }
    ];

    const OfficeLocations = [
        { title: "Headquarters", address: "Hustlehub Tech Park, HSR Layout, Bangalore, IN" },
        { title: "US Office", address: "600 California St, San Francisco, CA 94108, United States" }
    ];

    const [activeTab, setActiveTab] = useState("emails");
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    function renderContent() {
        if (activeTab === "emails") {
            return EmailList.map((item, i) => (
                <a key={i} className="contact-item" href={`mailto:${item.email}`}>
                    <p className="contact-item-title">{item.title}</p>
                    <div className="contact-box">
                        <span className="contact-box-text">{item.email}</span>
                        <img src={BookCall} alt="Arrow" className="contact-arrow" loading="lazy" />
                    </div>
                </a>
            ));
        }

        if (activeTab === "phones") {
            return PhoneNumbers.map((item, i) => (
                <a key={i} className="contact-item" href={`tel:${item.number}`}>
                    <p className="contact-item-title">{item.title}</p>
                    <div className="contact-box">
                        <span className="contact-box-text">{item.number}</span>
                        <img src={BookCall} alt="Arrow" className="contact-arrow" loading="lazy" />
                    </div>
                </a>
            ));
        }

        if (activeTab === "locations") {
            return OfficeLocations.map((item, i) => (
                <a key={i} className="contact-item" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address)}`} target="_blank" rel="noopener noreferrer">
                    <p className="contact-item-title">{item.title}</p>
                    <div className="contact-box">
                        <span className="contact-box-text">{item.address}</span>
                        <img src={BookCall} alt="Arrow" className="contact-arrow" loading="lazy" />
                    </div>
                </a>
            ));
        }

        return null;
    }

    function handlePhoneInput(e) {
        const value = e.target.value.replace(/[^\d+]/g, '');
        e.target.value = value;
    }

    // Validate form fields
    function validateForm() {
        let formErrors = {};
        let isValid = true;

        if (!formData.name) {
            formErrors.name = "Full Name is required";
            isValid = false;
        }

        if (!formData.email) {
            formErrors.email = "Email is required";
            isValid = false;
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Invalid email address";
            isValid = false;
        }

        if (!formData.phone) {
            formErrors.phone = "Phone number is required";
            isValid = false;
        }

        if (!formData.inquiryType) {
            formErrors.inquiryType = "Inquiry type is required";
            isValid = false;
        }

        if (!formData.message) {
            formErrors.message = "Message is required";
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    }

    function handleChange(e) {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);

            setTimeout(async () => {
                await fetch('https://api.wilgax.com/api/v1/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                setIsSubmitting(false);
                setIsSuccess(true);

                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    inquiryType: '',
                    message: ''
                });

                setTimeout(() => setIsSuccess(false), 3000);
            }, 1500);
        }
    };

    return (
        <section className='contactForm gradient-border-black'>
            <div className="contact-sections">
                <aside className='contact-right'>
                    <section className="contact-navigations">
                        <button
                            className={`ContactNavBtn ${activeTab === "phones" ? "active" : ""}`}
                            onClick={() => setActiveTab("phones")}
                        >
                            PHONE NUMBER
                        </button>
                        <button
                            className={`ContactNavBtn ${activeTab === "emails" ? "active" : ""}`}
                            onClick={() => setActiveTab("emails")}
                        >
                            EMAILS
                        </button>
                        <button
                            className={`ContactNavBtn ${activeTab === "locations" ? "active" : ""}`}
                            onClick={() => setActiveTab("locations")}
                        >
                            OFFICE LOCATIONS
                        </button>
                    </section>
                    <div className="contact-content">
                        {renderContent()}
                    </div>
                </aside>

                <section className='contact-left'>
                    {/* Success Message */}
                    {isSuccess && (
                        <div className="success-message">
                            <span className="success-icon">✔️</span>
                            <p>Your message has been successfully sent!</p>
                        </div>
                    )}

                    <form className="contact-form-que-left" onSubmit={handleSubmit}>
                        <div className="contact-row">
                            <div className="contact-field">
                                <label htmlFor="first-name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={errors.name ? 'error' : ''}
                                    required
                                />
                                {errors.name && <p className="error-message">{errors.name}</p>}
                            </div>
                        </div>

                        <div className="contact-row">
                            <div className="contact-field">
                                <label htmlFor="email">Email ID</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={errors.email ? 'error' : ''}
                                    required
                                />
                                {errors.email && <p className="error-message">{errors.email}</p>}
                            </div>

                            <div className="contact-field phone-field">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    id="phone"
                                    type="text"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onInput={handlePhoneInput}
                                    className={errors.phone ? 'error' : ''}
                                    placeholder="xxxx xxxx xxxx xxxx"
                                    required
                                />
                                {errors.phone && <p className="error-message">{errors.phone}</p>}
                            </div>
                        </div>

                        <div className="contact-row">
                            <div className="contact-field">
                                <label htmlFor="inquiry-type">Inquiry Type</label>
                                <select
                                    id="inquiryType"
                                    value={formData.inquiryType}
                                    onChange={handleChange}
                                    className={errors.inquiryType ? 'error' : ''}
                                    required
                                >
                                    <option value="" disabled>Select Inquiry Type</option>
                                    <option value="general">Project Consultation / Quote</option>
                                    <option value="support">Partnership / Collaboration</option>
                                    <option value="feedback">Career & Job Opportunities</option>
                                    <option value="other">Technical Support</option>
                                </select>
                                {errors.inquiryType && <p className="error-message">{errors.inquiryType}</p>}
                            </div>
                        </div>

                        <div className="contact-field full">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={errors.message ? 'error' : ''}
                                placeholder="Enter your Message"
                                required
                            />
                            {errors.message && <p className="error-message">{errors.message}</p>}
                        </div>

                        <button type="submit" className={`submit-btn ${isSubmitting ? 'loading' : ''}`} disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'SEND YOUR MESSAGE'}
                        </button>
                    </form>
                </section>
            </div>
        </section>
    );
}

export default ContactForm;
