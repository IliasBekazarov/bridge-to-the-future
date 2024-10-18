// This is a test page for showing demo
import React from 'react';
import img1 from "../Imgs/ilas1.jpg";
import img from "../Imgs/ilias.jpg";
import ilias1 from "../"
const AboutMe = () => {
    return (
        <>
        <div className="imgs-conteiner">
        <div className="imd_conteiner">
          <img src={img} alt="img" />
          
        </div>
        <div className="imd_conteiner">
          <img src={img1} alt="img"/>
          
        </div>
        
        </div>
        </>
    );
};

export default AboutMe;
