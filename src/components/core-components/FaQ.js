import React from "react";
import Accordion from "./Accordion";

export const faq = [
    {
        question: "Question 1",
        answer: "answer 1",
    },
    {
        question: "Question 2",
        answer: "answer 2",
    },
    {
        question: "Question 3",
        answer: "answer 3",
    },
    {
        question: "Question 4",
        answer: "answer 4",
    },
    {
        question: "Question 5",
        answer: "answer 5",
    },
    {
        question: "Question 6",
        answer: "answer 6",
    },
    {
        question: "Question 7",
        answer: "answer 7",
    },
]

const FaQ = () => {
    return (
        <div>
            <Accordion faq={faq} />
        </div>
    );
};

export default FaQ;