import React, { useState, useEffect } from "react";
// import spartaLogo from "../assets/spartaLogo.jpg";
import spartaVideo from "../assets/spartaVideo.mp4";
import petra from "../assets/petra.png";
import petraSecond from "../assets/petraSecond.png";
import spartaLogo from "../assets/spartaLogo.jpg";
import foodImage from "../assets/foodImage.jpg";
import defaultImage from "../assets/defaultImage.jpg";
import imageLeftRightFirst from "../assets/imageLeftRightFirst.jpg";
import imageLeftRightSecond from "../assets/imageLeftRightSecond.jpg";
import transformImageFirst from "../assets/transformImageFirst.jpg";
import transformImageSecondWein from "../assets/transformImageSecondWein.jpg";
import classes from "./Home.module.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Home = (props) => {
  const images = [defaultImage, imageLeftRightFirst, imageLeftRightSecond];
  const [currentImage, setCurrentImage] = useState(images[0]);

  // const images= [imageLeftRightFirst,imageLeftRightSecond];

  // const imageSecond = [imageLeftRightSecond]

  const rightChangeHandler = (event) => {
    const nextImage =
      images[(images.indexOf(currentImage) + 1) % images.length];
    setCurrentImage(nextImage);
  };

  const leftChangeHandler = (event) => {
    let prevImage;
    if (images.indexOf(currentImage) === 0) {
      prevImage = images[images.length - 1];
    } else {
      prevImage = images[images.indexOf(currentImage) - 1];
    }
    setCurrentImage(prevImage);
  };

  let img1Ref = React.createRef();
  let img2Ref = React.createRef();
  let last_pos = window.pageYOffset;
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    let current_pos = window.pageYOffset;
    if (img1Ref.current) {
      if (current_pos > last_pos)
        img1Ref.current.style.transform = `translateY(-100px)`;
      else img1Ref.current.style.transform = `translateY(100px)`;
    }
    if (img2Ref.current) {
      if (current_pos > last_pos)
        img2Ref.current.style.transform = `translateY(100px)`;
      else img2Ref.current.style.transform = `translateY(-100px)`;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              <a href="/" className={classes.icons}>
                <i className="fa fa-facebook-square"></i>
              </a>
              &nbsp; &nbsp;
              <a href="/" className={classes.icons}>
                <i className="fa fa-instagram"></i>
              </a>
            </h1>
          </div>
        </div>
        <video
          className={classes.petraVideo}
          src={spartaVideo}
          muted
          autoPlay
          controls={false}
          loop
        />
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
        <img src={currentImage} alt="food" className={classes.bigImage} />
        {/* <img
          src={images[currentImageIndex]}
          alt="food"
          className={classes.bigImage}
        />
        ) */}
        <div className={classes.iconButtonsContainer}>
          {/* <a className={classes.leftIconButton}> */}
          <FaChevronLeft
            onClick={leftChangeHandler}
            className={`${classes.iconLeftRight} ${classes.leftIconButton}`}
          />
          {/* </a>  */}

          {/* <a  href="/" className={classes.rightIconButton}> */}
          <FaChevronRight
            onClick={rightChangeHandler}
            className={`${classes.iconLeftRight} ${classes.rightIconButton}`}
          />

          {/* </a> */}
        </div>
      </div>

      <div className={classes.imagesContainer}>
        <div className={classes.transformImage}>
          <div className={classes.transformImages}>
            <img
              ref={img1Ref}
              src={transformImageFirst}
              className={classes.imgTransform}
              alt="food"
              style={{ width: "32rem", height: "50rem" }}
            />
            <h2 className={classes.centerH2TransformImage}>
              Spein
            </h2>
          </div>

          <img
            ref={img2Ref}
            src={transformImageSecondWein}
            className={classes.imgTransform}
            alt="foodx"
            style={{ width: "32rem", height: "50rem" }}
          />
        </div>
        <img
          src={petra}
          className={classes.petraBackgroundThird}
          alt="petraThird"
        />
      </div>
    </React.Fragment>
  );
};
export default Home;
