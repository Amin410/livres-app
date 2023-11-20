import React from "react";
import "./About.css";
import aboutImg from "../../images/pic9.jpg";
const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2>A PROPOS</h2>
        </div>
        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">A PROPOS DE CES LIVRES </h2>
            <p className="fs-17">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              accusantium repudiandae, vero ea omnis necessitatibus nesciunt.
              Odio amet adipisci deleniti blanditiis error minus, iusto
              necessitatibus porro, corporis facere eveniet itaque non a sint,
              possimus vero hic sapiente nisi dolorem dolorum! Minima odio at a
              pariatur.
            </p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            reiciendis natus sit alias magni iure temporibus minus adipisci
            illum vero, quae sequi unde? Nisi ut voluptatibus consequuntur
            praesentium rem iusto?
            <p className="fs-17"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
