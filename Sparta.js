import React, { useState, useEffect, useRef } from "react";
// import spartaLogo from "../assets/spartaLogo.jpg";
import spartaVideo from "../assets/spartaVideo.mp4";
import petra from "../assets/petra.png";
import petraSecond from "../assets/petraSecond.png";
import petraQuartor from "../assets/petraQuartor.png";
import spartaLogo from "../assets/spartaLogo.jpg";
import foodImage from "../assets/foodImage.jpg";
import defaultImage from "../assets/defaultImage.jpg";
import imageLeftRightFirst from "../assets/imageLeftRightFirst.jpg";
import imageLeftRightSecond from "../assets/imageLeftRightSecond.jpg";
import transformImageFirst from "../assets/transformImageFirst.jpg";
import transformImageSecondWein from "../assets/transformImageSecondWein.jpg";
import tsoukrisma from "../assets/tsoukrisma.jpg";
import adressImage from "../assets/adressImage.jpg";
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

  const [text, setText] = useState("K");
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index > 15) {
        setIndex(1);
        setText("K");
      } else {
        setText(text + "Kareklas Michail".charAt(index));
        setIndex(index + 1);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [text, index]);

  return (
    <React.Fragment>
      <div className={classes.overFlowBody}>
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
                  Im Herzen von <br></br> Dachau
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
                Schon in jungen Jahren war unsere <br></br>Liebe zur Gastronomie
                ' sehr groß!<br></br> Vom Augenblick an als wir Dachau <br></br>{" "}
                kennengelernt haben ist die Idee <br></br>des Bakalikon
                entstanden.
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
                    className={`${classes.imgTransform} ${classes.changeImagesTransform} ${classes.speisenTop} `}
                    alt="food"
                    // style={{width: "32rem", height: "55rem" }}
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
            <div
              ref={imageTransform2Ref}
              className={`${classes.zoomContainer} ${classes.imageWeinLeft}`}
            >
              <a href="/">
                <img
                  ref={imageTransform2Ref}
                  src={transformImageSecondWein}
                  className={`${classes.imgTransform} ${classes.weinLeft} ${classes.changeImagesTransform}  `}
                  alt="foodx"
                  // style={{width: "32rem", height: "55rem"}}
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

        <div className={classes.tsoukrismaWhiteBackground}>
          <img alt="food" src={tsoukrisma} className={classes.tsoukrisma} />
          <div className={classes.textImageTwo}>
            <h1 className={classes.UnserePhilosophie}>Unsere Philosophie</h1>
            <p className={classes.paragraphUnserePhilosophie}>
              Wir glauben fest daran, dass Gastronomie <br></br> sehr eng mit
              der Gastfreundschaft verbunden <br></br>ist, welche eine
              elementare Grundlage der<br></br>
              menschlichen Zivilisation zum Ausdruck,<br></br> bringt. Wir
              gewähren Gastfreundschaft,,<br></br> weil dies für uns einen sehr
              großen Wert<br></br> darstellt. <br></br>
              <br></br>Einer der Grundpfeiler unseres
              <br></br>BAKALIKON Konzepts ist der Respekt<br></br>
              gegenüber unseren Gästen. Das macht <br></br>uns erfolgreich und
              einzigartig.
              <span className={classes.textImageTwoRight}>
                {" "}
                <span className={classes.textImageTwoLittleLeft}>
                  Durch langjähriger Erfahrung ist es uns
                </span>
                <br></br>
                gelungen, es uns gelungen, hochwertige <br></br>Dienstleistungen
                in einem gemütlichen und<br></br> gastfreundlichen Ambiente
                anbieten zu <br></br>können. Ein weiterer wichtiger Bestandteil{" "}
                <br></br> unserer Küche ist, dass unsere Gerichte nur<br></br>{" "}
                mit sorgfältig ausgewählten frischen Zutaten,<br></br>
                tadelloser Herkunft und Qualität erzeugt werden.<br></br> Wir
                bereiten unsere Speisen nach innovativen <br></br> mediterranen
                Rezepten und traditionelle<br></br>
                Verfahren zu.
              </span>
            </p>

            <h3 className={classes.Kareklas}>{text}</h3>
          </div>
        </div>
        <div
          className={`${classes.containerOffungszeiten} ${classes.imagesContainer}`}
        >
          <img alt="food" src={petraQuartor} className={classes.petraQuartor} />
          <div className={classes.containerQuator}>
            <h1 className={classes.Offnugszeiten}>Öffnungszeiten</h1>
            <div className={classes.dayTextSize}>
              <div className={classes.dayOne}>
                <h3>Montag</h3>
                <h3 className={classes.h3DayOne}>Ruhetag</h3>
              </div>
              <hr className={classes.horizontallyLineFirst}></hr>

              <div className={classes.dayTwo}>
                <h3>Dienstag</h3>
                <h3 className={classes.h3Day}>11:00 - 14:00 17:00 - 00:00</h3>
              </div>
              <hr className={classes.horizontallyLineTwo}></hr>
              <div className={classes.dayThree}>
                <h3>Mittwoch</h3>
                <h3 className={classes.h3DayThree}>
                  11:00 - 14:00 17:00 - 00:00
                </h3>
              </div>
              <hr className={classes.horizontallyLineThree}></hr>
              <div className={classes.dayFourth}>
                <h3>Donnerstag</h3>
                <h3 className={classes.h3DayFourth}>
                  11:00 - 14:00 17:00 - 00:00
                </h3>
              </div>
              <hr className={classes.horizontallyLineFourth}></hr>
              <div className={classes.dayFifth}>
                <h3>Freitag</h3>
                <h3 className={classes.h3DayFifth}>
                  11:00 - 14:00 17:00 - 00:00
                </h3>
              </div>
              <hr className={classes.horizontallyLineFifth}></hr>
              <div className={classes.daySixth}>
                <h3>Samstag</h3>
                <h3 className={classes.h3Day}>11:00 - 14:00 17:00 - 00:00</h3>
              </div>
              <hr className={classes.horizontallyLineSixth}></hr>
              <div className={classes.daySeventh}>
                <h3>Sonntag</h3>
                <h3 className={classes.h3DaySeventh}>
                  11:00 - 22:00 <br></br>durchehend geoffent
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.imagesContainer}>
          <div className={classes.containerAdress}>
            <h1>Adresse</h1>
            <span>
              Augsburger Str. 12,<br></br> <span>85221 Dachau</span>
            </span>
            <h3>Phone:</h3>{" "}
            <span className={classes.adressSpanBottom}>+49 8131 4309469</span>
            <h3>Email: </h3>{" "}
            <span className={classes.adressSpanBottom}>info@bakalikon.de</span>
          </div>
        </div>

        <div className={classes.imageContainer}>
          <img alt="food" src={adressImage} className={classes.adressImage} />
        </div>

        <div className={classes.footer}>
          <a href="/" className={classes.footerAtag}>
            Datenschutzerklärung • © Bakalikon 2022 • Dachau • Powered with love
          </a>
        </div>
        {/* <div className={classes.imagesContainer}>
      <div className={classes.lastTextHome}>
        <a href="/">Datenschutzerklärung
        
        <li>Sparta 2022</li>
        <li>Dachau</li>
        <li>Powered with love by Empty</li>
    
        </a>
        </div>
      </div> */}
      </div>
    </React.Fragment>
  );
};

export default Home;

