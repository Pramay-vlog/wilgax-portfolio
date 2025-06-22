import { lazy, Suspense } from 'react';
import Header from '../Components/Header/Header';
import Hero from '../Components/Hero/Hero';

const SubHero = lazy(() => import('../Components/SubHero/SubHero'));
const Reason = lazy(() => import('../Components/Reason/Reason'));
const Service = lazy(() => import('../Components/Service/Service'));
const Work = lazy(() => import('../Components/Work/Work'));
const Testimonials = lazy(() => import('../Components/Testimonials/Testimonials'));
const Questions = lazy(() => import('../Components/Questions/Questions'));
const Footer = lazy(() => import('../Components/Footer/Footer'));

const fallbackStyle = {
    padding: '4rem',
    textAlign: 'center',
    color: '#FFF',
};

function Home() {
    return (
        <>
            <Header />
            <Hero />

            <Suspense fallback={<div style={fallbackStyle}>Loading...</div>}>
                <SubHero />
            </Suspense>

            <Suspense fallback={<div style={fallbackStyle}>Loading...</div>}>
                <Reason />
            </Suspense>

            <Suspense fallback={<div style={fallbackStyle}>Loading...</div>}>
                <Service />
            </Suspense>

            <Suspense fallback={<div style={fallbackStyle}>Loading...</div>}>
                <Work />
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
    );
}

export default Home;
