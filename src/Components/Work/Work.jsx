import "./Work.css";
import BookCall from '../../assets/book-call-primary.svg';
import Project1 from '../../assets/project1.svg';
import Project2 from '../../assets/project2.svg';
import RedDot from '../../assets/red-dot.svg';
import m1 from '../../assets/m1.webp';
import m2 from '../../assets/m2.webp';
import m3 from '../../assets/m3.webp';
import m4 from '../../assets/m4.webp';
import m5 from '../../assets/m5.webp';

function Work() {
    return (
        <section className='work gradient-border-black'>
            <div className="section-title">
                <p>Our Works</p>
                <span className="book-call">
                    <img src={BookCall} alt="Book Call Icon" className='book-call-icon' />
                    <h3 className='work-title'>All works</h3>
                </span>
            </div>

            {/* Project 1 */}
            <div className="work-cards">
                <article className="child-work w1">
                    <div className="child-work-logo">
                        <img src={Project1} alt='project1 Logo' className='project-logo' loading="lazy" />
                        <h3 className='project-card-title'>Zenith Fitness App</h3>
                    </div>
                    <div className="project-tags">
                        <span className="project-category">
                            <p className="category">Category</p>
                            <img src={RedDot} alt="Red Dot" className='red-dot' />
                            <p className="category">Mobile App Development</p>
                        </span>
                        <span className="project-category">
                            <p className="category">Time Taken</p>
                            <img src={RedDot} alt="Red Dot" className='red-dot' />
                            <p className="category">4 months</p>
                        </span>
                    </div>
                    <p className="project-info">
                        An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.
                    </p>
                </article>

                <article className="child-work work-image1"></article>

                <article className="child-work tech-used">
                    <div className="technology-used gradient-border">
                        <p className="tech-title">Technologies Used</p>
                        <div className="technologies">
                            <span className="project-category">
                                <p className="category">WordPress</p>
                            </span>
                            <span className="project-category">
                                <p className="category">PHP</p>
                            </span>
                            <span className="project-category">
                                <p className="category">HTML5</p>
                            </span>
                            <span className="project-category">
                                <p className="category">CSS3</p>
                            </span>
                            <span className="project-category">
                                <p className="category">JavaScript</p>
                            </span>
                        </div>
                    </div>
                    <div className="team-members gradient-border">
                        <p className="team-members-title">Team Members</p>
                        <span className="members-icon">
                            <img src={m1} alt="Member 1" className="member-icon" loading="lazy" />
                            <img src={m2} alt="Member 2" className="member-icon" loading="lazy" />
                            <img src={m3} alt="Member 3" className="member-icon" loading="lazy" />
                            <img src={m4} alt="Member 4" className="member-icon" loading="lazy" />
                            <img src={m5} alt="Member 5" className="member-icon" loading="lazy" />
                        </span>
                    </div>
                    <div className="book-a-call-btn">Book A Call</div>
                </article>
            </div>

            {/* Project 2 */}
            <div className="work-cards">
                <article className="child-work w1">
                    <div className="child-work-logo">
                        <img src={Project2} alt='project2 Logo' className='project-logo' loading="lazy" />
                        <h3 className='project-card-title'>A-Aura Ecommerce</h3>
                    </div>
                    <div className="project-tags">
                        <span className="project-category">
                            <p className="category">Category</p>
                            <img src={RedDot} alt="Red Dot" className='red-dot' />
                            <p className="category">Web Design & Development</p>
                        </span>
                        <span className="project-category">
                            <p className="category">Time Taken</p>
                            <img src={RedDot} alt="Red Dot" className='red-dot' />
                            <p className="category">3 months</p>
                        </span>
                    </div>
                    <p className="project-info">
                        A comprehensive e-commerce platform that provides a seamless shopping experience with advanced features like AI-driven recommendations and secure payment gateways.
                    </p>
                </article>

                <article className="child-work work-image2"></article>

                <article className="child-work tech-used">
                    <div className="technology-used gradient-border">
                        <p className="tech-title">Technologies Used</p>
                        <div className="technologies">
                            <span className="project-category">
                                <p className="category">WordPress</p>
                            </span>
                            <span className="project-category">
                                <p className="category">PHP</p>
                            </span>
                            <span className="project-category">
                                <p className="category">HTML5</p>
                            </span>
                            <span className="project-category">
                                <p className="category">CSS3</p>
                            </span>
                            <span className="project-category">
                                <p className="category">JavaScript</p>
                            </span>
                        </div>
                    </div>
                    <div className="team-members gradient-border">
                        <p className="team-members-title">Team Members</p>
                        <span className="members-icon">
                            <img src={m1} alt="Member 1" className="member-icon" />
                            <img src={m2} alt="Member 2" className="member-icon" />
                            <img src={m3} alt="Member 3" className="member-icon" />
                            <img src={m4} alt="Member 4" className="member-icon" />
                            <img src={m5} alt="Member 5" className="member-icon" />
                        </span>
                    </div>
                    <div className="book-a-call-btn">Book A Call</div>
                </article>
            </div>

            {/* ✅ Mobile layout */}
            <div className="mobile-work">
                {[{
                    title: "Zenith Fitness App",
                    logo: Project1,
                    desc: "An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance, and virtual workout classes.",
                    category: "Mobile App Development",
                    time: "4 months",
                    image: "work-image1"
                }, {
                    title: "A-Aura Ecommerce",
                    logo: Project2,
                    desc: "A comprehensive e-commerce platform that provides a seamless shopping experience with advanced features like AI-driven recommendations and secure payment gateways.",
                    category: "Web Design & Development",
                    time: "3 months",
                    image: "work-image2"
                }].map((project, index) => (
                    <div key={index} className="mobile-work-card">
                        <div className={`mobile-work-image ${project.image}`}></div>
                        <div className="mobile-work-content">
                            <div className="child-work-logo">
                                <img src={project.logo} alt={project.title} className="project-logo" />
                                <h3 className="project-card-title">{project.title}</h3>
                            </div>
                            <div className="project-tags">
                                <span className="project-category">
                                    <p className="category">Category</p>
                                    <img src={RedDot} alt="Red Dot" className="red-dot" />
                                    <p className="category">{project.category}</p>
                                </span>
                                <span className="project-category">
                                    <p className="category">Time Taken</p>
                                    <img src={RedDot} alt="Red Dot" className="red-dot" />
                                    <p className="category">{project.time}</p>
                                </span>
                            </div>
                            <p className="project-info">{project.desc}</p>
                            <div className="book-a-call-btn">Book A Call</div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Work;