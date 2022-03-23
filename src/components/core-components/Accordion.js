import React, { useState } from "react";
import { faq } from "./FaQ";

const Accordion = ({ faq }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onQuestionClick = (index) => {
        setActiveIndex(index);
    };

    const RenderedFaq = faq.map((faq, index) => {
        return (
            <React.Fragment key={faq.question}>
                <div 
                    className="title active"
                    onClick={() => onQuestionClick(index)}  
                >
                    <i className="dropdown icon"></i>
                    {faq.question}
                </div>
                <div className="content active">
                    <p>{faq.answer}</p>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className="ui styled accordion">
            {RenderedFaq}
            <h1>{activeIndex}</h1>
        </div>
    );
};

export default Accordion;