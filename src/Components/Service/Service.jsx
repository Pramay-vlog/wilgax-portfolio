import './Service.css';
import WebDesign from '../../assets/web-design.svg';
import MobileApp from '../../assets/app.svg';
import WebDev from '../../assets/web-dev.svg';
import DigitalMarketing from '../../assets/marketing.svg';
import BookCall from '../../assets/book-call-primary.svg';

function Service() {
    const serviceContent = [
        {
            title: "Web Design",
            logo: WebDesign,
            subTitle: "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.",
            price: "starts from $1500"
        },
        {
            title: "Mobile App Development",
            logo: MobileApp,
            subTitle: "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go.",
            price: "starts from $2500"
        },
        {
            title: "Web Development",
            logo: WebDev,
            subTitle: "Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites.",
            price: "starts from $1800"
        },
        {
            title: "Digital Marketing",
            logo: DigitalMarketing,
            subTitle: "In the digital age, marketing is a critical aspect of your business's success. Our Digital Marketing service employs data-driven strategies to enhance your brand's visibility.",
            price: "starts from $1200"
        },
    ];

    return (
        <section className='service gradient-border-black'>
            <div className="section-title">Our Services</div>

            {/* Desktop layout */}
            <div className="service-cards desktop-service">
                {serviceContent.map((item, index) => (
                    <article className="child-service" key={index}>
                        <div className="child-service-logo">
                            <span className="service-logo-title">
                                <img src={item.logo} alt={`${item.title} Logo`} className='service-logo' />
                                <h3 className='service-card-title'>{item.title}</h3>
                            </span>
                            <div className="book-call">
                                <img src={BookCall} alt="Book Call Icon" className='book-call-icon-service' />
                                <h3 className='book-call-title-service'>Book A Call</h3>
                            </div>
                        </div>
                        <p className='service-card-subTitle'>{item.subTitle}</p>
                        <p className='service-card-pricing'>{item.price}</p>
                    </article>
                ))}
            </div>

            {/* Mobile layout */}
            <div className="mobile-service">
                {serviceContent.map((item, index) => (
                    <article className="child-service" key={index}>
                        <div className="service-logo-title">
                            <img src={item.logo} alt={`${item.title} Logo`} className='service-logo' />
                            <h3 className='service-card-title'>{item.title}</h3>
                        </div>
                        <div>
                            <p className='service-card-pricing'>{item.price}</p>
                            <p className='service-card-subTitle'>{item.subTitle}</p>
                        </div>
                        <div className="mobile-call">
                            <h3 className='book-call-title-service'>Book A Call</h3>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Service;
