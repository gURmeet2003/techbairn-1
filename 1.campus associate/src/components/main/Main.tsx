import React from "react";
import './Main.css';
// import Home from '../home/Home';
import Explore from "./explore/Explore";
// import ImageSlider from '../TestComp'
import LandingPage from "../page/LandingPage";
import HomeWork from "../homwork/HomeWork";
import CampusAssociate from "../campus-associate/CampusAssociate";





interface MainProps{

}

const images = [
    "https://thumbs.dreamstime.com/z/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-44702230.jpg",
    "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg",
  ];


const Main: React.FC<MainProps> = () => {

    return (
        <div className="main-body">
              {/* <LandingPage/> */}
              <CampusAssociate/>
        </div>
    );
}


export default Main;