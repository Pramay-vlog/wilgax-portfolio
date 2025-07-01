import { lazy, Suspense } from 'react';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';

const ContactForm = lazy(() => import('../Components/ContactForm/ContactForm'));
const Testimonials = lazy(() => import('../Components/Testimonials/Testimonials'));
const Questions = lazy(() => import('../Components/Questions/Questions'));
const Footer = lazy(() => import('../Components/Footer/Footer'));

const fallbackStyle = {
    padding: '4rem',
    textAlign: 'center',
    color: '#FFF',
};

function About() {
    return (
        <>
            <Header />
            <Hero
                title1="Get in Touch"
                title2="with Us Today!"
                subtitle="Let’s build smarter systems - together."
                component="About"
            />

            <Suspense fallback={<div style={fallbackStyle}>Loading...</div>}>
                <ContactForm />
            </Suspense>

            <Suspense fallback={<div style={fallbackStyle}>Loading...</div>}>
                <Testimonials />
            </Suspense>

            <Suspense fallback={<div style={fallbackStyle}>Loading...</div>}>
                <Questions />
            </Suspense>

            <Suspense fallback={<div style={fallbackStyle}>Loading...</div>}>
                <Footer />
            </Suspense>
        </>
    )
}

export default About;