import React from "react";
import img from "../Imgs/smail.png";
import img1 from "../Imgs/todo.png";
import img2 from "../Imgs/RSP.png";
import img3 from "../Imgs/random.png"

const Students = () => {
  return (
    <>
      <div className="imgs-conteiner">
        <div className="imd_conteiner">
         <a href="https://iliasbekazarov.github.io/loto-list1/" > <img  src={img1} alt="img" /></a>
          <div className="ling">
          </div>
        </div>
        <div className="imd_conteiner">
         <a href="https://iliasbekazarov.github.io/Rock-Paper-Scissors/"> <img  src={img2} alt="img" /></a>
          <div className="ling">
          </div>
        </div>

        <div className="imd_conteiner">
         <a href="https://iliasbekazarov.github.io/random_nam./"> <img  src={img3} alt="img" /></a>
          <div className="ling">
          </div>
        </div>
      </div>
    </>
  );
};

export default Students;
