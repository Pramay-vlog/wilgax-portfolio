import './Service.css';
import WebDesign from '../../assets/web-design.svg';
import MobileApp from '../../assets/app.svg';
import WebDev from '../../assets/web-dev.svg';
import DigitalMarketing from '../../assets/marketing.svg';
import BookCall from '../../assets/book-call-primary.svg';
import CircleIcon from '../../assets/IconContainer.svg';
import WebDesign1 from '../../assets/web-design-1.svg';
import WebDesign2 from '../../assets/web-design-2.svg';
import App1 from '../../assets/app-1.svg';
import App2 from '../../assets/app-2.svg';
import WebDev1 from '../../assets/web-dev-1.svg';
import WebDev2 from '../../assets/web-dev-2.svg';
import Marketing1 from '../../assets/marketing-1.svg';
import Marketing2 from '../../assets/marketing-2.svg';

function Service({ component }) {
    const serviceContent = [
        {
            title: "Automation Tools",
            logo: WebDev,
            subTitle: "Our Software Automation Tools service is designed to streamline your business processes, enhance efficiency, and reduce manual effort.",
            price: "starts from $3500"
        },
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
            title: "Custom Software Development",
            logo: WebDesign,
            subTitle: "Our Custom Software Development service is tailored to meet your unique business needs. We create software solutions that are scalable, secure, and designed to drive your business forward.",
            price: "starts from $3000"
        },
        {
            title: "Digital Marketing",
            logo: DigitalMarketing,
            subTitle: "In the digital age, marketing is a critical aspect of your business's success. Our Digital Marketing service employs data-driven strategies to enhance your brand's visibility.",
            price: "starts from $1200"
        },
    ];

    function getServiceRightSVG(title) {
        switch (title) {
            case "Automation Tools":
                return [WebDev1, WebDev2];
            case "Web Design":
                return [WebDesign1, WebDesign2];
            case "Mobile App Development":
                return [App1, App2];
            case "Web Development":
                return [WebDev1, WebDev2];
            case "Digital Marketing":
                return [Marketing1, Marketing2];
            default:
                return [WebDesign1, WebDesign2];
        }
    }


    return (
        <section className='service gradient-border-black'>
            <div className="section-title">Our Services</div>

            {component !== 'Services' && (
                <>
                    {/* Desktop layout */}
                    <div className="service-cards desktop-service">
                        {serviceContent.map((item, index) => (
                            <article className="child-service" key={index}>
                                <div className="child-service-logo">
                                    <span className="service-logo-title">
                                        <img src={item.logo} alt={`${item.title} Logo`} className='service-logo' loading="lazy" />
                                        <h3 className='service-card-title'>{item.title}</h3>
                                    </span>
                                    <div className="book-call">
                                        <img src={BookCall} alt="Book Call Icon" className='book-call-icon-service' loading="lazy" />
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
                                    <img src={item.logo} alt={`${item.title} Logo`} className='service-logo' loading="lazy" />
                                    <h3 className='service-card-title'>{item.title}</h3>
                                </div>
                                <div>
                                    <p className='service-card-pricing'>{item.price}</p>
                                    <p className='service-card-subTitle'>{item.subTitle}</p>
                                </div>
                                <div className="book-a-call-btn">
                                    <h3 className='book-call-title-service'>Book A Call</h3>
                                </div>
                            </article>
                        ))}
                    </div>
                </>
            )}

            {component === 'Services' && (
                <>
                    <div className="service-rows desktop-service">
                        {serviceContent.map((item, index) => (
                            <div className="service-row" key={index}>
                                {/* LEFT CARD - same UI */}
                                <article className="child-service">
                                    <div className="child-service-logo">
                                        <span className="service-logo-title">
                                            <img src={item.logo} alt={`${item.title} Logo`} className='service-logo' loading="lazy" />
                                            <h3 className='service-card-title'>{item.title}</h3>
                                        </span>
                                        <div className="book-call">
                                            <img src={BookCall} alt="Book Call Icon" className='book-call-icon-service' loading="lazy" />
                                            <h3 className='book-call-title-service'>Book A Call</h3>
                                        </div>
                                    </div>
                                    <p className='service-card-subTitle'>{item.subTitle}</p>
                                    <p className='service-card-pricing'>{item.price}</p>
                                </article>

                                {/* RIGHT CARD - new UI */}
                                <article className="child-service-right">
                                    <div className="child-service-right-title">
                                        <span className="service-logo-title">
                                            <h3 className='service-card-title-new'>{item.title}</h3>
                                        </span>
                                        <div className="book-call">
                                            <img src={CircleIcon} alt="Book Call Icon" className='book-call-icon-service' loading="lazy" />
                                            <h3 className='book-call-title-service-new'>Book A Call</h3>
                                        </div>
                                    </div>
                                    <div className="service-right-images">
                                        <img
                                            src={getServiceRightSVG(item.title)[0]}
                                            alt={`${item.title} SVG 1`}
                                            className="service-right-svg"
                                            loading="lazy"
                                        />
                                        <img
                                            src={getServiceRightSVG(item.title)[1]}
                                            alt={`${item.title} SVG 2`}
                                            className="service-right-svg"
                                            loading="lazy"
                                        />
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>

                    {/* Mobile layout stays unchanged */}
                    <div className="mobile-service">
                        {serviceContent.map((item, index) => (
                            <article className="child-service" key={index}>
                                <div className="service-logo-title">
                                    <img src={item.logo} alt={`${item.title} Logo`} className='service-logo' loading="lazy" />
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
                </>
            )}

        </section>
    )
}

export default Service;
