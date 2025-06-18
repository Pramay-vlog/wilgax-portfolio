import './Questions.css';
import BookCall from '../../assets/book-call-primary.svg';

function Questions() {
    return (
        <section className='testimonials gradient-border-black'>
            <div className="section-title">
                <p>Frequently Asked Questions</p>
                <span className="book-call">
                    <img src={BookCall} alt="Book Call Icon" className='book-call-icon' />
                    <h3 className='work-title'>All works</h3>
                </span>
            </div>
            <div className="que-sections">
                <section className='que-left'>
                </section>
                <aside className='que-right'>
                    <section className="title-sec">
                        <span className="que-title">Ask your question</span>
                        <hr className='horizontal-line' />
                    </section>
                    <form className="form">

                        <div className='form-group'>
                            <label htmlFor="name" className='form-label'>Name</label>
                            <input type="text" id="name" className='form-input' placeholder='Enter your name' required />
                        </div>


                        <div className='form-group'>
                            <label htmlFor="email" className='form-label'>Email</label>
                            <input type="email" id="email" className='form-input' placeholder='Enter your email' required />
                        </div>  

                        <div className='form-group'>
                            <label htmlFor="question" className='form-label'>Your Question</label>
                            <textarea id="question" className='form-textarea' placeholder='Type your question here...' required></textarea>
                        </div>

                        <button type="submit" className='form-btn'>Send your message</button>
                    </form>
                </aside>
            </div>
        </section>
    )
}

export default Questions