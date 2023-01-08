import React from "react";
// import spartaLogo from "../assets/spartaLogo.jpg";
import spartaVideo from "../assets/spartaVideo.mp4";
import petra from "../assets/petra.png";
import petraSecond from "../assets/petraSeocond";
import spartaLogo from "../assets/spartaLogo.jpg";
import classes from "./Home.module.css";

const Home = (props) => {
  const styles = {
    body: {
      overflowX: "hidden",
    },
  };
  return (
    <React.Fragment>
      <div style={styles.body}>
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
      </div>
    </React.Fragment>
  );
};
export default Home;
