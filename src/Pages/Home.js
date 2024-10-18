// Home.js
import React,{useEffect} from "react";

import logo from "../Imgs/ilias.jpg";
import AOS from "aos";
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(()=>{
    AOS.init();
  })
  return (
    <>
    <div className='ilias'>Ilias Beknazarov</div>
      <div class="block" data-aos="zoom-in" data-aos-duration="50">
        <img src={logo} alt="logo" />
        <h2 >
          Hello. I'm Ilyas Bektazarov, I am 18 years old. I am studying in the
          second year of IT and business college at Salymbekov University.
          Before coming to the city, I participated in the Kyzyl Kiya city Sekom
          course and prepared for ORT. My goal is to get
          an education not only in Kyrgyzstan but abroad and become a famous
          person in the world. I want to introduce Kyrgyz people to the world
          with IT. Stronger people will emerge than us, I believe. f you need an
          expert in IT, you can contact me. We will find the person you need.
          You can contact our administrators using the link below. Thank you
          very much for reading))).
        </h2>
      </div>
    </>
  );
};

export default Home;
