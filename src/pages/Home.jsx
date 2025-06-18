import Header from '../Components/Header/Header'
import Hero from '../Components/Hero/Hero'
import SubHero from '../Components/SubHero/SubHero'
import Reason from '../Components/Reason/Reason'
import Service from '../Components/Service/Service'
import Work from '../Components/Work/Work'
import Testimonials from '../Components/Testimonials/Testimonials'
import Questions from '../Components/Questions/Questions'

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <SubHero />
            <Reason />
            <Service />
            <Work />
            <Testimonials />
            <Questions />
        </>
    )
}

export default Home