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

    // Only allow numeric and + in phone input
    function handlePhoneInput(e) {
        const value = e.target.value.replace(/[^\d+]/g, '');
        e.target.value = value;
    }

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
                    <form className="contact-form-que-left">

                        <div className="contact-row">
                            <div className="contact-field">
                                <label htmlFor="first-name" >Full Name</label>
                                <input type="text" id='first-name' placeholder="Enter Full Name" required />
                            </div>
                        </div>

                        <div className="contact-row">
                            <div className="contact-field">
                                <label htmlFor="email">Email ID</label>
                                <input type="email" id='email' placeholder="Enter your Email" required />
                            </div>
                            <div className="contact-field phone-field">
                                <label htmlFor="phone">Phone</label>
                                <input
                                    id='phone'
                                    type="text"
                                    inputMode="tel"
                                    pattern="[\d+]{7,19}"
                                    autoComplete="cc-number"
                                    maxLength="19"
                                    placeholder="xxxx xxxx xxxx xxxx"
                                    onInput={handlePhoneInput}
                                />
                            </div>
                        </div>

                        <div className="contact-row">
                            <div className="contact-field">
                                <label htmlFor="inquiry-type">Inquiry Type</label>
                                <select id="inquiry-type" required>
                                    <option value="" disabled selected>Select Inquiry Type</option>
                                    <option value="general">Project Consultation / Quote</option>
                                    <option value="support">Partnership / Collaboration</option>
                                    <option value="feedback">Career & Job Opportunities</option>
                                    <option value="other">Technical Support</option>
                                </select>
                            </div>
                        </div>

                        <div className="contact-field full">
                            <label htmlFor="message">Message</label>
                            <textarea id='message' placeholder="Enter your Message" required></textarea>
                        </div>

                        <button type="submit" className="submit-btn">
                            SEND YOUR MESSAGE
                        </button>
                    </form>
                </section>
            </div>
        </section>
    )
}

export default ContactForm;
