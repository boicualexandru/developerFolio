import React from "react";
import "./PortofolioSection.css";
import { portofolioInfo } from "../../portfolio";

export default function PortofolioSection() {
  return (
    <div className="main" id="portofolio">
      <div className="portofolio-wrapper">
        <h3 className="portofolio-title">{portofolioInfo.title} </h3>
        <div>
          <ul className='contribution-bar'>
            <li>
              <div></div>
              <span>💡</span>
              <p>Business Idea</p>
            </li>
            <li>
              <div></div>
              <span>🎨</span>
              <p>Design / UX</p>
            </li>
            <li>
              <div></div>
              <span>⚙️</span>
              <p>Backend</p>
            </li>
            <li>
              <div></div>
              <span>🚀</span>
              <p>User Interface</p>
            </li>
            <li>
              <div></div>
              <span>🔥</span>
              <p>Deployment</p>
            </li>
          </ul>
        </div>
        <div className="portofolio-item">
          <div className="portofolio-item-description">
            <div style={{display: 'flex'}}>
              <div style={{ alignSelf: 'center'}}>
                <div className="portofolio-item-logo-wrapper">
                  <img alt="Food Fusion Logo" className="portofolio-item-logo" src="https://raw.githubusercontent.com/boicualexandru/Food-Fusion-FE/38b1d9c45807287772a95f9781c11d538136ec01/src/assets/img/FoodFusionLogoSmall.png"></img>
                </div>
              </div>
              <div className="title-wrapper">
                <h3 className="title">Food Fusion</h3>
                <p className="sub-title">Restaurants Reservation Platform</p>
              </div>
            </div>
            <div>
              <h4>My Contribution:</h4>
              <p>💡 Business Idea</p>
              <p>🎨 Design</p>
              <p>⚙️ Backend</p>
              <p>🚀 User Interface / User Experience</p>
              <p>🔥 Deployment and CI/CD</p>
            </div>
            <div>
              <h4>Tools used:</h4>
              <p>.NET</p>
              <p>Angular</p>
              <p>AWS</p>
              <p>Docker</p>
              <p>Jenkins</p>
            </div>
          </div>
          <div>
            <img alt="Food Fusion" className="portofolio-item-image" src={require("../../assests/images/developerActivity.svg")}></img>
          </div>
        </div>
      </div>
    </div>
  )
}
