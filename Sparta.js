import React, { useState } from "react";
// import spartaLogo from "../assets/spartaLogo.jpg";
import spartaVideo from "../assets/spartaVideo.mp4";
import petra from "../assets/petra.png";
import petraSecond from "../assets/petraSecond.png";
import spartaLogo from "../assets/spartaLogo.jpg";
import foodImage from "../assets/foodImage.jpg";
import currentImage from "../assets/currentImage.jpg";
import classes from "./Home.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Home = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [{ src: { currentImage } }];

  const righChangeHanlder = () => {
    setCurrentImageIndex(images);
  };
  // const styles = {
  //   body: {
  //     overflowX: "hidden",
  //   },
  // };
  return (
    <React.Fragment>
      {/* <div style={styles.body}> */}
      <div className={classes.imagesContainer}>
        <div className={classes.imageContainer}>
          <img className={classes.imagePetra} src={petra} alt="Petra" />

          <img
            className={classes.spartaLogo}
            src={spartaLogo}
            alt="sparta logo"
          />

          <div>
            <h1 className={classes.textHeaderContainer}>
              <span className={classes.headerChange}>
                {" "}
                Im Herzen von Dachau
              </span>
              <br></br>
              <span className={classes.yearText}>Seit 2013</span> <br></br>
              <a href="/" target="_blank" className={classes.icons}>
                <i className="fa fa-facebook-square"></i>
              </a>
              &nbsp; &nbsp;
              <a href="/" target="_blank" className={classes.icons}>
                <i className="fa fa-instagram"></i>
              </a>
            </h1>
          </div>
        </div>

        <video src={spartaVideo} muted autoPlay controls={false} loop />
      </div>
      <div className={classes.imagesContainer}>
        <img
          className={classes.imagePetraSecond}
          src={petraSecond}
          alt="petra Second"
        />

         <div className={classes.headerSecondContainer}>
          <h1 className={classes.headerSettings}>Wie alles begann...</h1>
          <img className={classes.foodImage} src={foodImage} alt="food" />

          <div className={classes.textImage}>
            <h2 className={classes.homeHeaderChange}>Januar 2013</h2>
            <p className={classes.homeTextChange}>
              Schon in jungen Jahren war unsere <br></br>Liebe zur Gastronomie '
              <br></br>
              sehr groß! Vom Augenblick an als<br></br> wir Dachau kennengelernt
              haben ist <br></br>die <br></br>Idee des Bakalikon entstanden.
            </p>
          </div> 
         </div> 
         </div>
         <div className={classes.imagesContainerIcons}>
         <img src={currentImage} alt="Last Image" className={classes.bigImage} /> 
      <div classes={classes.iconButtonsContainer}>
        <button className={classes.leftIconButton}>
          <FaChevronLeft />
        </button>
        <button className={classes.rightIconButton}>
          <FaChevronRight />
        </button>
      </div>

      
     
    
  

    </div> 
    {/* </div> */}
       {/* </div>  */}
    </React.Fragment>
  );
};
export default Home;
