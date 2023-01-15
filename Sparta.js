import React, { useState, useEffect, useRef } from "react";
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
import tsoukrisa from "../assets/tsoukrisma.jpg";
import classes from "./Home.module.css";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Home = (props) => {
  const images = [defaultImage, imageLeftRightFirst, imageLeftRightSecond];
  const [currentImage, setCurrentImage] = useState(images[0]);

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

  const imageTransform1Ref = useRef(null);
  const imageTransform2Ref = useRef(null);
  const h2TransformRef = useRef(null);
  const h2TransformRefWein = useRef(null);
  const petraBackgroundThirdRef = useRef(null);

  useEffect(() => {
    let last_pos = window.pageYOffset;
    const handleScroll = () => {
      if (window.innerWidth > 600) {
        const petraBackgroundThird = petraBackgroundThirdRef.current;
        const petraBackgroundThirdRect =
          petraBackgroundThird.getBoundingClientRect();
        const petraBackgroundThirdTop = petraBackgroundThirdRect.top;
        const petraBackgroundThirdBottom = petraBackgroundThirdRect.bottom;

        if (petraBackgroundThirdTop <= 0 && petraBackgroundThirdBottom >= 0) {
          let current_pos = window.scrollY;
          if (current_pos > last_pos) {
            imageTransform1Ref.current.style.transform = `translateY(100px)`;
            imageTransform2Ref.current.style.transform = `translateY(-100px)`;
            h2TransformRef.current.style.transform = `translateY(50px) translateX(50px)`;
            h2TransformRefWein.current.style.transform = `translateY(130px) translateX(-190px)`;
          } else {
            imageTransform1Ref.current.style.transform = `translateY(-100px)`;
            imageTransform2Ref.current.style.transform = `translateY(100px)`;
            h2TransformRef.current.style.transform = `translateY(100px) translateX(50px)`;
            h2TransformRefWein.current.style.transform = `translateY(70px) translateX(-190px) `;
          }
          last_pos = current_pos;
          console.log("work scrolling");
        }
      }
    };
    imageTransform1Ref.current.classList.add("zoomContainer");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [
    imageTransform1Ref,
    imageTransform2Ref,
    h2TransformRef,
    h2TransformRefWein,
    petraBackgroundThirdRef,
  ]);

  // const styles = {
  //   body: {
  //     overflowX: "hidden",
  //   },
  // };

  return (
    <React.Fragment>
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

        <div className={classes.iconButtonsContainer}>
          <FaChevronLeft
            onClick={leftChangeHandler}
            className={`${classes.iconLeftRight} ${classes.leftIconButton}`}
          />

          <FaChevronRight
            onClick={rightChangeHandler}
            className={`${classes.iconLeftRight} ${classes.rightIconButton}`}
          />
        </div>
      </div>

      <div className={classes.imagesContainer}>
        <img
          ref={petraBackgroundThirdRef}
          src={petra}
          className={`${classes.petraBackgroundThird}`}
          alt="petraThird"
        />
        <div className={classes.transformImage}>
          <div className={classes.transformImages}>
            <div
              ref={imageTransform1Ref}
              className={`${classes.zoomContainer} `}
            >
              <a href="/">
                <img
                  ref={imageTransform1Ref}
                  src={transformImageFirst}
                  className={`${classes.imgTransform} ${classes.stopScrolling}`}
                  alt="food"
                  style={{ width: "32rem", height: "55rem" }}
                />

                <h2
                  ref={h2TransformRef}
                  className={classes.centerH2TransformImage}
                >
                  Speisen
                </h2>
              </a>
            </div>
          </div>
          <div ref={imageTransform2Ref} className={classes.zoomContainer}>
            <a href="/">
              <img
                ref={imageTransform2Ref}
                src={transformImageSecondWein}
                className={`${classes.imgTransform} ${classes.stopScrolling}  `}
                alt="foodx"
                style={{ width: "32rem", height: "55rem" }}
              />
              <h2
                ref={h2TransformRefWein}
                className={classes.centerH2TransformImageWein}
              >
                Wein
              </h2>
            </a>
          </div>
        </div>
      </div>

      <div className={classes.tsoukrismaWhiteBackground}></div>
    </React.Fragment>
  );
};

export default Home;
