import React, { useState } from "react";
// import { faq } from "./FaQ";

const Accordion = ({ faq }) => {
    const [activeQuestion, setActiveQuestion] = useState(null);

    const onQuestionClick = (question) => {
        return setActiveQuestion(question);
    };

    const RenderedFaq = faq.map((faq, question) => {
        const active = question === activeQuestion ? 'active' : '';

        return (
            <React.Fragment key={faq.question}>
                <div 
                    className={`title ${active}`}
                    onClick={() => onQuestionClick(question)}  
                >
                    <i className="dropdown icon"></i>
                    {faq.question}
                </div>
                <div className={`content ${active}`}>
                    <p>{faq.answer}</p>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className="ui styled fluid accordion">
            {RenderedFaq}
        </div>
    );
};

export default Accordion;