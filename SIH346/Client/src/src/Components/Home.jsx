import React from 'react';
import mainback from "../Components/images/mainback.png";
import Navbar from './Navbar';
import whyimg from "./images/whyimg.png"
import serviceimg from "./images/mainservice.png";
import pitta from "./images/pitta.jpeg";
import vata from "./images/vata.jpg"
import servicelogo from "./images/serviceimg.png"
import mainlogo from "./images/mainlogo.png"
const Home = () => {
  return (
    <>
     <Navbar/>
    <section className="main" style={{ width: "100%", height: "100vh", color: "white", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", backgroundImage: `url(${mainback})`, paddingTop: "50px", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", zIndex: -1 }}>
      <div className="submain" style={{ width: "90%", height: "70%", display: "flex", flexDirection: "row",justifyContent:"flex-start" }}>
        <div className="leftmain" style={{ width: "55%", color: "white", height: "100%", alignItems: "flex-end", justifyContent: "center", display: "flex", flexDirection: "column" }}>
          <h1 style={{ fontSize: "4rem", margin: "5px 0px" }}>Elevate your Health With Ayurveda</h1>
          <p style={{ fontSize: "2rem" }}>Embark on a Journey to Discover Your Unique Ayurvedic Constitution and Achieve Lasting Well-being Through Tailored Guidance</p>
        </div>
      </div>
      <div className="links" style={{ width: "90%", height: "20%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <div className="leftlink" style={{ display: "flex", alignItems: "center", flexDirection: "row", gap: "25px", padding:"20px" }}>
          <h2>Follow us:</h2>
          <i className="fa-brands fa-facebook" style={{ fontSize: "25px" }}></i>
          <i className="fa-brands fa-instagram" style={{ fontSize: "25px" }}></i>
          <i className="fa-brands fa-youtube" style={{ fontSize: "25px" }}></i>
          <i className="fa-brands fa-twitter" style={{ fontSize: "25px" }}></i>
        </div>
        <div className="rightlink" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "5px" }}>
          <i className="fa-solid fa-globe"></i>
          <h2>ayurjivan.com</h2>
        </div>
      </div>
    </section>

    <section className="whyayurved" style={{ width: "100%", height: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="subwhy" style={{ padding: "20px", width: "90%", height: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <div className="leftwhy" style={{ width: "50%", height: "100%", objectFit: "contain" }}>
          <img src={whyimg} style={{ width: "80%", height: "80%" }} alt="" />
        </div>
        <div className="rightwhy" style={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <div className="whyname" style={{ display: "flex", gap: "5px", fontSize: "2rem" }}>
            <h1>Why Choose</h1>
            <h1 style={{ color: "green" }}> Ayurveda</h1>
          </div>
          <p style={{ fontSize: "2rem" }}>Ayurveda, our age-old Indian wisdom, offers a world of health benefits with personalized wellness, natural remedies, inner peace, strong immunity, emotional harmony, improved digestion, and a deep connection between mind, body, and soul.</p>
          <div className="but" style={{ width: "100%", display: "flex", alignItems: "flex-start" }}>
            <button style={{ fontSize: "1.2rem", height: "3rem", border: "none", width: "8rem", color: "white", borderRadius: "2rem", backgroundColor: "green" }}>Login</button>
          </div>
        </div>
      </div>
    </section>
    <hr style={{ backgroundColor: "gray", width: "60%", height: "4px", borderRadius: "30px" }} />
    {/* service we provide */}
    <section className="service" style={{ paddingLeft: "40px", width: "100%", height: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="subservice" style={{ padding: "20px", width: "90%", height: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
        <div className="leftservice" style={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }}>
          <h1 style={{ fontSize: "3rem" }}>Service we provide</h1>
          <div className="subleft" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
            <img src={servicelogo} style={{ width: "40px", height: "40px" }} alt="" />
            <h3 style={{ fontSize: "1.5rem" }}>Find Your Dosha</h3>
          </div>
          <div className="subleft" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
            <img src={servicelogo} style={{ width: "40px", height: "40px" }} alt="" />
            <h3 style={{ fontSize: "1.5rem" }}>Balance your Dosha</h3>
          </div>
          <div className="subleft" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
            <img src={servicelogo} style={{ width: "40px", height: "40px" }} alt="" />
            <h3 style={{ fontSize: "1.5rem" }}>Get diet and workout recommendations</h3>
          </div>
          <div className="subleft" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
            <img src={servicelogo} style={{ width: "40px", height: "40px" }} alt="" />
            <h3 style={{ fontSize: "1.5rem" }}>Get medicines just for you</h3>
          </div>
          <div className="subleft" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
            <img src={servicelogo} style={{ width: "40px", height: "40px" }} alt="" />
            <h3 style={{ fontSize: "1.5rem" }}>Consult with a verified practitioner</h3>
          </div>
        </div>
        <div className="rightservice" style={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <img src={serviceimg} style={{ width: "80%", height: "80%" }} alt="" />
        </div>
      </div>
    </section>
    {/* types of dosha */}
    <section className="types" style={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", margin: "40px 0px", backgroundColor: "#D9D9D9" }}>
      <div className="subtypes" style={{ width: "80%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ fontSize: "3rem" }}>Types of Dosha</h1>
        <div className="typesimg" style={{ marginBottom: "30px", width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <div className="img" style={{ width: "30%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h2>PITTA</h2>
            <img src={pitta} alt="" style={{ width: "80%", height: "80%" }} />
          </div>
          <div className="img" style={{ width: "30%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h2>VATTA</h2>
            <img src={vata} alt="" style={{ width: "80%", height: "80%" }} />
          </div>
          <div className="img" style={{ width: "30%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <h2>Kapha</h2>
            <img src={pitta} alt="" style={{ width: "80%", height: "80%" }} />
          </div>
        </div>
        <h2 style={{ margin: "0" }}>Take a quiz to find your Prakriti and gain Knowledge</h2>
        <h2 style={{ margin: "0" }}>about yourself</h2>
        <button style={{ marginTop: "20px", fontSize: "1.2rem", height: "3rem", border: "none", width: "8rem", color: "white", borderRadius: "2rem", backgroundColor: "green", cursor: "pointer" }}>Login</button>
      </div>
    </section>
    {/* diet recommendations */}
    <section className="Diet" style={{ width: "100%", height: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="subdiet" style={{ padding: "20px", width: "90%", height: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <div className="leftdiet" style={{ width: "50%", height: "100%", objectFit: "contain" }}>
          <div className="dietname" style={{ display: "flex", gap: "5px", fontSize: "2rem" }}>
            <h1>Diet Recommendation </h1>
          </div>
          <p style={{ fontSize: "2rem" }}>Ayurveda recommends a diet tailored to your unique Prakriti, incorporating nourishing foods that balance your doshas for optimal health and well-being. This personalized approach empowers you to make food choices that support your body's natural harmony</p>
          <div className="but" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <button style={{ fontSize: "1.2rem", height: "3rem", border: "none", width: "8rem", color: "white", borderRadius: "2rem", backgroundColor: "green" }}>Login</button>
          </div>
        </div>
        <div className="rightdiet" style={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <img src={whyimg} style={{ width: "80%", height: "80%" }} alt="" />
        </div>
      </div>
    </section>
    <footer style={{ width: "100%", height: "30vh", backgroundColor: "green", display: "flex", flexDirection: "column", color: "white", alignItems: "center", justifyContent: "center" }}>
      <img src={mainlogo} style={{ width: "5rem", height: "5rem" }} alt="" />
      <p style={{ width: "30%" }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum nulla eu felis dignissim, id gravida felis dictum. Maecenas tempor sem nec ante hendrerit posuere. </p>
      <div className="leftlink" style={{ display: "flex", alignItems: "center", flexDirection: "row", gap: "25px" }}>
        <h2>Follow us:</h2>
        <i className="fa-brands fa-facebook" style={{ fontSize: "25px" }}></i>
        <i className="fa-brands fa-instagram" style={{ fontSize: "25px" }}></i>
        <i className="fa-brands fa-youtube" style={{ fontSize: "25px" }}></i>
        <i className="fa-brands fa-twitter" style={{ fontSize: "25px" }}></i>
      </div>
    </footer>
    </>
  );
}

export default Home;
