import React, {useState} from "react";
import "./Faq.css";
import faquestions from "./faq";
function Faq() {const [showmore, Setshow] = useState();
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
              <p>{item.question}</p>
              <div className="faq-answer">
                <button
                  className="faq-button"
                  value="+"
                  onClick={() => Setshow(!showmore)}
                >
                  +
                </button>
              </div>
              <div className={`hiddenContent ${showmore ? "show" : ""}`}>
                {item.answer} <hr />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
//   <div className={`hiddenContent ${showmore ? 'show' : ''}`}> dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar</div></p>
// </div>
// <div className='about-button'>
//   <button className='button ' value="Show More" onClick={() => Setshow(!showmore)}>
//     Show More
//   </button>
