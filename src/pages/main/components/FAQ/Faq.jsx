import React from "react";
import "./Faq.css";
import faquestions from "./faq";
function Faq() {
  return (
    <div className="faq-container">
      <div className="faq-title">
        <h1>Frequently Asked <br/> Questions</h1>
        <p>Wanna Ask Something?</p>
      </div>
      <div className="faq-qa">
        {faquestions.map((item, index) => {
          return (
            <div className="faq-item" key={index}>
              <p>{item.question}</p>
              <hr/>
              <p className="faq-answer">{item.answer}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
