import './Services.css';
import Card1 from '../../assets/card1.svg';
import Card2 from '../../assets/card2.svg';
import Card3 from '../../assets/card3.svg';
import Card4 from '../../assets/card4.svg';
import Card5 from '../../assets/card5.svg';
import Card6 from '../../assets/card6.svg';
import Card7 from '../../assets/card7.svg';
import World from '../../assets/world.svg';

function Services() {
    return (
        <section className="service">
            <div className="service-grid top-grid">
                <img src={Card1} className="card" alt="Card 1" />
                <img src={Card2} className="card wide-card" alt="Card 2 & 3" />
                <img src={Card3} className="card" alt="Card 4" />
            </div>

            <div className="world-image-wrapper">
                <img src={World} className="world-image" alt="World" />
            </div>

            <div className="service-grid bottom-grid">
                <img src={Card4} className="card" alt="Card 5" />
                <img src={Card5} className="card" alt="Card 6" />
                <img src={Card6} className="card" alt="Card 7" />
                <img src={Card7} className="card" alt="Card 8" />
            </div>
        </section>
    );
}

export default Services;
