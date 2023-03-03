import React from "react";
import about from "../../assets/dispaly/about.jpg";
import "./About.css"
const About = () => {
  return (
    <section className="about">
      <div className="about_container">
        <div className="about_display">
          <img src={about} alt="" />
        </div>
        <div className="about_info">
          <h1>Welcome To Luscious Recipe</h1>
          <p>
            Luscious Recipe is a Professional informative Platform. Here we will
            provide you only interesting content, which you will like very much.
            We're dedicated to providing you the best of informative, with a
            focus on dependability and Online Recipe Information. We're working
            to turn our passion for informative into a booming online website by providing you best recipe.
            We hope you enjoy our informative as much as we enjoy offering them
            to you. . Please give your support and love. 
           
          </p>
          <h4>Thanks For Visiting
            Our Site</h4>
        </div>
      </div>
    </section>
  );
};

export default About;
