import React from 'react';
import './Accordion.css';
import MinhsBtn from '../../assets/accordionMinus.svg';
import PlusBtn from '../../assets/accordionPlus.svg';

const Accordion = ({ title, content }) => {
    return (
        <details className="accordion-section">
            <summary className="accordion-title">
                <span>{title}</span>
                <img
                    src={PlusBtn}
                    alt="Expand"
                    className="accordion-icon plus"
                    aria-hidden="true"
                    loading="lazy"
                    width={20}
                    height={20}
                />
                <img
                    src={MinhsBtn}
                    alt="Collapse"
                    className="accordion-icon minus"
                    aria-hidden="true"
                    loading="lazy"
                    width={20}
                    height={20}
                />
            </summary>
            <div className="accordion-content">
                <div className='horizontal-line-1'></div>
                <div className="accordion-text">{content}</div>
            </div>
        </details>
    );
};

export default Accordion;
