import React, { useEffect } from "react";


import "../Students/Student.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Students = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <section className="as">
     
      </section>
    </>
  );
};

export default Students;
