import React from "react";
import "./PortofolioSection.scss";
import { portofolioInfo } from "../../portfolio";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function PortofolioSection() {

  const moonsSkills = [
    {
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: 'react native',
      displayName: 'React Native',
      type: 'text'
    }
  ];

  const foodfusionSkills = [
    {
      skillName: 'dotnet',
      displayName: '.NET',
      type: 'text'
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    }
  ];


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
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
  const responsiveFull = {
    superLargeDesktop: {
      breakpoint: { max: 46499, min: 0 },
      items: 1,
    }
  };

  return (
    <div className="container-fluid px-lg-5 mt-5" id="portofolio">
      <div className="portofolio-wrapper">
        <h3 className="portofolio-title">{portofolioInfo.title}</h3>

        <div class="mt-5 portofolio-item">
          <div className="row">
            <div class="col-lg-4 order-1">              
              <div className="row mt-4">
                <div className="col-12 text-center col-lg-auto text-lg-left mb-3">
                  <div className="d-inline-block p-2 portofolio-item-logo-wrapper">
                    <img alt="Food Fusion Logo" className="portofolio-item-logo" src="https://raw.githubusercontent.com/boicualexandru/Food-Fusion-FE/38b1d9c45807287772a95f9781c11d538136ec01/src/assets/img/FoodFusionLogoSmall.png"></img>
                  </div>
                </div>
                <div className="col-12 text-center col-lg-auto text-lg-left mb-3">
                  <h3 className="title">Food Fusion</h3>
                  <p className="sub-title">Restaurants Reservation Platform</p>
                </div>
              </div>

              <div className='mt-lg-4 portofolio-item-content'>
                <div className="portofolio-item-description">
                  <p>
                    FoodFusion is a web platform meant to ease the restaurants reservations.
                  </p>
                  <p>
                    From the user's perspective anyone can add a reservation to a specific restaurant, chose a prefered table, and even add a preorder.
                    At the end, the user can even pay using the app.
                  </p>
                  <p>
                    From the restaurant's point of view, you can watch and manage all the reservations. As a restaurant manager, you are also free to add employees, that can also manage the restaurant for you.
                  </p>
                  <p>
                    A side functionality of the app is the Hotel Booking platform.
                  </p>
                  <SoftwareSkill skills={foodfusionSkills} />
                </div>
              </div>
            </div>
            <div class="col-lg-8 order-2 pl-lg-5">
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
                <Carousel containerClass="carousel-container" responsive={responsiveFull} infinite={true} autoPlay={true} autoPlaySpeed={4000}>
                  <div><img alt="Food Fusion" className="px-3 portofolio-item-image" draggable="false" src={require("../../assests/images/browser_mockup_restaurants.png")}></img></div>
                  <div><img alt="Food Fusion" className="px-3 portofolio-item-image" draggable="false" src={require("../../assests/images/MacBookPro_iphone_restaurant_SMALL.png")}></img></div>
                  <div><img alt="Food Fusion" className="px-3 portofolio-item-image" draggable="false" src={require("../../assests/images/browser_phone_login.png")}></img></div>
                  <div><img alt="Food Fusion" className="px-3 portofolio-item-image" draggable="false" src={require("../../assests/images/browser_phone_hotel.png")}></img></div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 portofolio-item">
          <div className="row">
            <div class="col-lg-8 order-2 pr-lg-5">
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
                  <div><img alt="Moons" className="px-3 portofolio-item-image" draggable="false" src={require("../../assests/images/moons_locations.png")}></img></div>
                  <div><img alt="Moons" className="px-3 portofolio-item-image" draggable="false" src={require("../../assests/images/moons_rooms.png")}></img></div>
                  <div><img alt="Moons" className="px-3 portofolio-item-image" draggable="false" src={require("../../assests/images/moons_room_modal.png")}></img></div>
                  <div><img alt="Moons" className="px-3 portofolio-item-image" draggable="false" src={require("../../assests/images/moons_menus.png")}></img></div>
                  <div><img alt="Moons" className="px-3 portofolio-item-image" draggable="false" src={require("../../assests/images/moons_menu_modal.png")}></img></div>
                  <div><img alt="Moons" className="px-3 portofolio-item-image" draggable="false" src={require("../../assests/images/moons_included_services.png")}></img></div>
                </Carousel>
              </div>
            </div>

            <div class="col-lg-4 order-1 order-lg-3">              
              <div className="row mt-4">
                <div className="col-12 text-center col-lg-auto text-lg-left mb-3">
                  <div className="d-inline-block p-2 portofolio-item-logo-wrapper">
                    <img alt="Moons Logo" className="portofolio-item-logo" src={require("../../assests/images/moons_icon.png")}></img>
                  </div>
                </div>
                <div className="col-12 text-center col-lg-auto text-lg-left mb-3">
                  <h3 className="title">Moons</h3>
                  <p className="sub-title">Wedding Planning and Providers</p>
                </div>
              </div>

              <div className='mt-lg-4 portofolio-item-content'>
                <div className="portofolio-item-description">
                  <p>Moons is an app that is meant to help you plan and manage your wedding.</p>
                  <p>The app has two main modules: <strong>The Wedding Planner</strong> and <strong>The Providers Market</strong>.
                    First one is aiming to help you plan all the wedding details (budget, guests, appointments).
                    The second one is facilitating the engagement between you and the services providers like restaurants, music bands etc.</p>
                  <p>
                    This app act as a helping hand for the ones struggling to plan their wedding to the very detail.
                    At the same time, from the provider's perspecive, this app is an excellent marketplace where anyone can show off their services and availability.
                  </p>
                  <SoftwareSkill skills={moonsSkills} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
