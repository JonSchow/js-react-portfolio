import React from "react";
import "./Contact.css";

const Contact = props => {
  // setTimeout(() => {
  //   props.history.push("/work");
  // }, 2000);
  return (
    <div id="contact">
      <div>
        <div>
          <h2>contact</h2>
        </div>
        <div class="nested">
          <div className="">
            <img src="./img/10.jpg" width="100%" />
          </div>
          <div className="">
            <img src="./img/5.jpg" width="100%" />
          </div>
          <div className="">
            <img src="./img/7.jpg" width="100%" />
          </div>
          <div className="">
            <img src="./img/9.jpg" width="100%" />
          </div>
        </div>
        <div className="two" />
        <div className="three" />
        <div class="four">
          <img src="./img/2.jpg" width="100%" />
        </div>
        <div class="five">5</div>
        <div class="six">6</div>
      </div>
    </div>
  );
};

export default Contact;
