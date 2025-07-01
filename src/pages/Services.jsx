import { lazy, Suspense } from 'react';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';

const Service = lazy(() => import('../Components/Service/Service'));
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
            <Suspense fallback={<div style={fallbackStyle}>Loading...</div>}>
                <Header />
            </Suspense>
            <Suspense fallback={<div style={fallbackStyle}>Loading...</div>}>
                <Hero
                    title1="Our Comprehensive"
                    title2="Digital Solutions"
                    subtitle="We turn complex ideas into effortless experiences."
                    component="Services"
                />
            </Suspense>

            <Suspense fallback={<div style={fallbackStyle}>Loading...</div>}>
                <Service
                    component="Services"
                />
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