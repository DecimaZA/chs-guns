import React from "react";
import Accordion from "./Accordion";

export const faq = [
    {
        question: "Can I get my firearm license at CHS?",
        answer: "Dealers such as CHS do not sell or grant licenses. You must first acquire proficiency (and we sell the manuals you need for this) and competency. We can only sell you a firearm for which must apply for a license from the SAPS"
    },
    {
        question: "What is proficiency, competency, and where does my license fit in?",
        answer: "Proficiency is the training you must undergo in terms of the Firearms Control Act 60 of 2000, which you then use to apply for competency with your local SAPS Designated Firearm Officer. Once your competency is approved, you can apply for a license for that firearm using your competency cerrtificate.",
    },
    {
        question: "How long will it take for me to get a license?",
        answer: "Proficiency usually takes apprximately two weeks. The SAPS is court ordered to take no more than four months for competency, and the SAPS have an internal policy of trying to finalise a license application within 90 working days.",
    },
    {
        question: "Can I make my license application go faster?",
        answer: "No you cannot. Anyone that says they can make your application go faster is either lying to you and to scam you, or they are bribing someone in CFR. If you pay a bribe, you are committing a serious offense and will probably be prohibited from owning a firearm for a long time if caught",
    },
    {
        question: "What do I need to apply for a license?",
        answer: "You need proficiency and competency, as well as supporting documents such as your written motivation for what you will use the firearm for, ID, the SAPS 271 form, etc. Contact your local DFO to find out what exactly they need.",
    },
    {
        question: "Can I take my firearm home while I wait for the SAPS to do their thing?",
        answer: "No, it must stay at the dealer until you have a printed plastic card license. CHS provides free storage while you wait for the license.",
    },
    {
        question: "If my license is refused, what happens to my firearm?",
        answer: "You have a few choices. 1: If your motiation was good, you can appeal the initial refusal. If the appeal was refused, you can apply again, but get a professional to do your motivation (we highly reccommend Motivus). 2: CHS will buy the firearm back from you for 75% of what you paid. 3: You can sell the firearm privately, but you will be liable for storage costs in this time it takes, at which point your buyer will take over storage costs until their license is approved.",
    },
]

const FaQ = () => {
    return (
        <div>
            <div>
                <h1>Frequently Asked Questions</h1>
                <h2>...and the answers we frequently give</h2>
            <br />
            </div>
            <div className="word-wrap: break-word">
                <Accordion faq={faq} />
            </div>
        </div>
    );
};

export default FaQ;