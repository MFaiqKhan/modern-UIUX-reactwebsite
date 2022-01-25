import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
        Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          nostrum at distinctio, eveniet dolores ratione quam architecto rerum
          velit. Ab blanditiis nam vitae excepturi? Quidem dicta ipsa in unde
          reprehenderit?
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content_people">
          <img src={people} alt="people.png" />
          <p>1,600 people have requested access a visit in last 48 Hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai.png" />
      </div>
    </div>
  );
};
export default Header;
