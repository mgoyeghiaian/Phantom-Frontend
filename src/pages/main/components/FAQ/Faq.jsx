import React, { useState } from "react";
import "./Faq.css";
import faquestions from "./faq";
function Faq() {
  const [openAnswerIndex, setOpenAnswerIndex] = useState(-1);
  return (
    <div className="faq-container">
      <div className="faq-title">
        <h1>
          Frequently Asked <br /> Questions
        </h1>
        <p>Wanna Ask Something?</p>
      </div>
      <div className="faq-qa">
        {faquestions.map((item, index) => {
          return (
            <div className="faq-item" key={index}>
              <div className="faq-qb">
                <p className="faq-question">{item.question}</p>
                <button
                  className="faq-button"
                  onClick={() =>
                    setOpenAnswerIndex(openAnswerIndex === index ? -1 : index)
                  }
                >
                  {openAnswerIndex === index ? "-" : "+"}
                </button>
              </div>
              {openAnswerIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
