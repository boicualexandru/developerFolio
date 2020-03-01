import React from "react";
import "./PortofolioSection.scss";
import { portofolioInfo } from "../../portfolio";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function PortofolioSection() {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="main" id="portofolio">
      <div className="portofolio-wrapper">
        <h3 className="portofolio-title">{portofolioInfo.title}</h3>
        <div class="container-fluid mt-5 portofolio-item">
          <div className="row">
            <div class="col-lg-4">
              <div className="mt-4" style={{ display: 'flex', minWidth: '500px', alignItems: 'center' }}>
                <div >
                  <div className="portofolio-item-logo-wrapper">
                    <img alt="Moons Logo" className="portofolio-item-logo" src={require("../../assests/images/moons_icon.png")}></img>
                  </div>
                </div>
                <div className="title-wrapper">
                  <h3 className="title">Moons</h3>
                  <p className="sub-title">Wedding Planning and Providers</p>
                </div>
              </div>

              <div className='mt-4 portofolio-item-content'>
                <div className="portofolio-item-description">
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                  <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
                  <p><strong>Tools Used: </strong> .NET Core, Angular, AWS, Docker, Jenkins</p>
                </div>
              </div>
            </div>
            <div class="col-lg-8 pl-lg-5">
              <div className='contribution-bar mt-4'>
                <div className="color-bar"></div>
                <ul>
                  <li>
                    <span className="fa fa-lightbulb"></span>
                    <p>Business Idea</p>
                  </li>
                  <li>
                    <span className="fa fa-palette"></span>
                    <p>Design / UX</p>
                  </li>
                  <li>
                    <span className="fa fa-rocket"></span>
                    <p>User Interface</p>
                  </li>
                </ul>
              </div>

              <div className="mt-4 portofolio-item-image-wrapper">
                <Carousel containerClass="carousel-container" responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={4000}>
                  <div><img alt="Food Fusion" className="px-3 portofolio-item-image" draggable="false" src={require("../../assests/images/moons_locations.png")}></img></div>
                  <div><img alt="Food Fusion" className="px-3 portofolio-item-image" draggable="false" src={require("../../assests/images/moons_rooms.png")}></img></div>
                  <div><img alt="Food Fusion" className="px-3 portofolio-item-image" draggable="false" src={require("../../assests/images/moons_room_modal.png")}></img></div>
                  <div><img alt="Food Fusion" className="px-3 portofolio-item-image" draggable="false" src={require("../../assests/images/moons_menus.png")}></img></div>
                  <div><img alt="Food Fusion" className="px-3 portofolio-item-image" draggable="false" src={require("../../assests/images/moons_menu_modal.png")}></img></div>
                  <div><img alt="Food Fusion" className="px-3 portofolio-item-image" draggable="false" src={require("../../assests/images/moons_included_services.png")}></img></div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid mt-5 portofolio-item">
          <div className="row">
            <div class="col-lg-8 pr-lg-5">
              <div className='contribution-bar mt-4'>
                <div className="color-bar"></div>
                <ul>
                  <li>
                    <span className="fa fa-lightbulb"></span>
                    <p>Business Idea</p>
                  </li>
                  <li>
                    <span className="fa fa-palette"></span>
                    <p>Design / UX</p>
                  </li>
                  <li>
                    <span className="fa fa-cog"></span>
                    <p>Backend</p>
                  </li>
                  <li>
                    <span className="fa fa-rocket"></span>
                    <p>User Interface</p>
                  </li>
                  <li>
                    <span className="fa fa-fire"></span>
                    <p>Deployment</p>
                  </li>
                </ul>
              </div>


              <div className="mt-4 portofolio-item-image-wrapper">
                <Carousel containerClass="carousel-container" responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={4000}>
                  <div><img alt="Food Fusion" className="px-3 portofolio-item-image" draggable="false" src={require("../../assests/images/moons_locations.png")}></img></div>
                  <div><img alt="Food Fusion" className="px-3 portofolio-item-image" draggable="false" src={require("../../assests/images/moons_rooms.png")}></img></div>
                  <div><img alt="Food Fusion" className="px-3 portofolio-item-image" draggable="false" src={require("../../assests/images/moons_room_modal.png")}></img></div>
                  <div><img alt="Food Fusion" className="px-3 portofolio-item-image" draggable="false" src={require("../../assests/images/moons_menus.png")}></img></div>
                  <div><img alt="Food Fusion" className="px-3 portofolio-item-image" draggable="false" src={require("../../assests/images/moons_menu_modal.png")}></img></div>
                  <div><img alt="Food Fusion" className="px-3 portofolio-item-image" draggable="false" src={require("../../assests/images/moons_included_services.png")}></img></div>
                </Carousel>
              </div>
            </div>
            <div class="col-lg-4">
              <div className="mt-4" style={{ display: 'flex', minWidth: '500px', alignItems: 'center' }}>
                <div >
                  <div className="portofolio-item-logo-wrapper">
                    <img alt="Food Fusion Logo" className="portofolio-item-logo" src="https://raw.githubusercontent.com/boicualexandru/Food-Fusion-FE/38b1d9c45807287772a95f9781c11d538136ec01/src/assets/img/FoodFusionLogoSmall.png"></img>
                  </div>
                </div>
                <div className="title-wrapper">
                  <h3 className="title">Food Fusion</h3>
                  <p className="sub-title">Restaurants Reservation Platform</p>
                </div>
              </div>

              <div className='mt-4 portofolio-item-content'>
                <div className="portofolio-item-description">
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                  <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
                  <p><strong>Tools Used: </strong> .NET Core, Angular, AWS, Docker, Jenkins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
