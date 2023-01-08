<React.Fragment>
      <div className={classes.imagesContainer}>
        <div className={classes.imageContainer}>
          <img className={classes.imagePetra} src={petra} alt="Petra" />

          <img
            className={classes.spartaLogo}
            src={spartaLogo}
            alt="sparta logo"
          />
  
          <h1 className={classes.imageHeaderText}>
            Im Herzen von Dachau
            {/* <br></br><span className={classes.yearText}>Seit 2013</span> <br></br> */}
          
          </h1>
            {/* <a href="/" target="_blank" className={classes.icons}>
        <i className="fa fa-facebook-square" ></i>
      </a>
      &nbsp; &nbsp;
      <a href="/" target="_blank" className={classes.icons}>
        <i className="fa fa-instagram"></i>
      </a> */}
    
         
        </div>
        <video src={spartaVideo} muted autoPlay controls={false} loop />
      </div>

    
    </React.Fragment>
