import React, {  useState,useContext } from 'react';
import logoimg from './images/rectangle_2.png';
import { Link } from 'react-router-dom';
import hindi from "../Hindi.json"
import english from "../english.json"
import logo from "./images/logo.png"
import notescontext from "../Components/context/notes/notecontext"
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const handleToggle = () => {
    setShowLinks(!showLinks);
  };
  const context=useContext(notescontext)
  const {lang,langtoggle}=context;
  const langtoggles=(lang)=>{
    langtoggle(lang)
  }
  const getText = (key) => {
    return lang === "hindi" ? hindi[key] : english[key];
  };


  return (  
    <div>
       <nav style={{ display: "flex", justifyContent: "space-around", backgroundColor: "transparent", gap:"45%" }}>
        <Link to="/">
          <img src={logo} alt="Logo" style={{ paddingLeft:"4rem", height:"5rem"}}/>
        </Link>
        <ul style={{ display: "flex", alignItems: "center", justifyContent: "space-around", width: "40%",listStyle: "none"  }}>
          <li><a href="#" style={{ textDecoration: "none", color: "inherit", fontSize:"1.2rem" }}>Ayurveda</a></li>
          <li><a href="#" style={{ textDecoration: "none", color: "inherit", fontSize:"1.2rem"  }}>Take Quiz</a></li>
          <li><button style={{ border:"2px solid #34BDC4",fontSize:"1.2rem", width:"7rem" ,color:"white",borderRadius:"2rem", backgroundColor:"#34BDC4" }}>Login</button></li>
        </ul>
      </nav>





      {/* <nav className="navbar navbar-expand-lg " style={{ backgroundColor:"transparent",height:"4rem"}}>
        <div className="container-fluid" style={{ backgroundColor:"transparent"}}>
          <nav className="navbar fw-bolder" style={{ backgroundColor:"transparent"}}>
            <div className="container-fluid">
              <Link className="navbar-brand text-success" to="#">
                <img
                  src={logoimg}
                  alt="Logo"
                  width="80"
                  height="60"
                  className="d-inline-block"
                />
                {getText("title")}
              </Link>
            </div>
          </nav>
          <div
            className={`collapse navbar-collapse ${
              showLinks ? 'show' : ''
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-5 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-success  mx-3"
                  aria-current="page"
                  to="/"
                >
                  <h5 className="navtext">{getText("home")}</h5>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-success fw-bolder  mx-3"
                  href="#features"
                >
                  <h5 className="navtext">{getText("features")}</h5>
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-success fw-bolder mx-3"
                  to="#"
                >
                  <h5 className="navtext">{getText("aboutus")}</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-success fw-bolder mx-3"
                  to="#"
                >
                  <h5 className="navtext">{getText("contact")}</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-success fw-bolder mx-3"
                  to="#" onClick={() => langtoggles("hindi")}
                >
                  <h5 className="navtext">{getText("hindi")}</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-success fw-bolder mx-3"
                  to="#" onClick={() => langtoggles("english")}
                >
                  <h5 className="navtext">{getText("english")}</h5>
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-success mx-3 fw-bolder" type="submit">
              {getText("login")}
              </button>
              <button className="btn btn-outline-success mx-3 fw-bolder" type="submit">
              {getText("signup")}
              </button>
            </form>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav> */}
    </div>
  );
};

export default Navbar;
