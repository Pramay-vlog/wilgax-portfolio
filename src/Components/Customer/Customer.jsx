import './Customer.css'
import Arrow from '../../assets/Line.svg'

function Customer() {
    return (
        <div className="customer">
            <div className="customer-div div1">
                <h2 className='customer-title'>
                    Customer Stories
                </h2>
                <p className='customer-subtitle'>
                    REAL PEOPLE. REAL GROWTH. REAL PARTNERSHIP.
                </p>
            </div>
            <div className="customer-div div2">
                <div className="content">
                    <p className="title">One Sketch. One Dream. One Product Launch.</p>
                    <div className="description">
                        <p className="first">
                            We had nothing but a rough idea and a pitch deck. Wilgax turned that into an actual product in under 3 months.
                        </p>
                        <p className="second">
                            From UX design to backend architecture, from marketing site to investor presentation - they were with us, every late-night Zoom and pivot. And when we got our first round of funding, they were the first we called.
                        </p>
                    </div>
                    <p className="author">– Founder, SaaS Startup (Name Withheld by NDA)</p>
                </div>
            </div>
            <div className="customer-div div3">
                <div className="content">
                    <p className="title">A Café That Needed More Than Just a Coffee</p>
                    <div className="description">
                        <p className="first">
                            We had great food, loyal locals, and a cozy place — but we felt invisible online. People didn’t even know we existed unless they walked by. Wilgax changed that in a matter of weeks.
                        </p>
                    </div>
                    <p className="author">– Meera D., Co-owner, Café Verde</p>
                </div>
            </div>
            <div className="customer-div div4">
                <div className="content">
                    <p className="title">Reimagining Luxury Real Estate for the Digital Age</p>
                    <div className="description">
                        <p className="first">
                            We were selling million-dollar villas with a website that looked like 2008. Every client we lost to competitors hurt — especially when we knew we had the better listings.
                        </p>
                    </div>
                    <p className="author">– Faisal R., Managing Director, VillaLux</p>
                </div>
            </div>
            <div className="customer-div div5">
                <div className="content">
                    <p className="title">From a Neighbourhood Gym to a Global Fitness Platform.</p>
                    <div className="description">
                        <p className="first">
                            When the pandemic hit, we were on the edge - clients stopped coming, and our growth plans fell apart. We knew we had to adapt, or close for good. That’s when we found Wilgax.
                        </p>
                        <p className="second">
                            – Aryan J., Founder & Coach, FitFuel.
                        </p>
                    </div>
                    <span className="author-1">
                        <p className="author">Let’s Connect</p>
                        <img src={Arrow} alt="Arrow Icon" className='arrow-icon' />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Customer;