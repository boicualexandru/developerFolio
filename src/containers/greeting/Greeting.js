import React from "react";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";

export default function Greeting() {
  return (
    <div id="greeting">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg pl-lg-5 d-flex flex-column justify-content-center">
            <div className="p-2">
              <h1 className="greeting-text">{greeting.title}</h1>
              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
              </div>
            </div>
          </div>
          <div className="col-lg hero-image" style={{backgroundImage: 'url(' + require("../../assests/images/heroImage.png") + ')'}}></div>
        </div>
      </div>
    </div>
  );
}
