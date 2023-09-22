import React from 'react';
import Navbar from './Navbar'; 
import tridoshaimg from './images/tridoshaimg.png';
import pittadosh from "./images/pitta dosha.png"
import vatadosh from "./images/vata dosha.png"
import kaphadosh from "./images/khapa dosha.png"
import mainlogo from "./images/mainlogo.png"
const Dosha = () => {
  return (
    <>
      <section className="s1">
      <div style={{ position: "sticky", top: "0" ,backgroundColor:"transparent"}}>
        <Navbar />
      </div>
      <div style={{ display: "flex", paddingTop: "3rem" }}>
          <div className="r1" style={{ display: "flex", padding: "0 3rem", flexDirection: "column", justifyContent: "center", flex: 1 }}>
            <h1 style={{ fontSize: "4rem", margin: "5px 0" }}>What is Dosha ?</h1>
            <h3 style={{ fontSize: "1.5rem", textAlign: "justify" }}>Ayurveda, the science of life, centers around Doshas, which represent natural energy principles derived from five elements (space, air, fire, water, and earth). Doshas, including Vata, Pitta, and Kapha, influence our constitution, health tendencies, and susceptibility to ailments. Take the quiz to find yours!</h3>
            <button style={{ fontSize: "1.5rem", margin: "1rem 0", padding: "0.2rem 0", backgroundColor: "#54885A", border: "1px solid #54885A", borderRadius: "5rem", width: "30%" }}>Take Quiz</button>
          </div>
          <div className="r1" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={tridoshaimg} alt="" />
          </div>
        </div>
      </section>

      <section style={{ display: "flex", backgroundColor: "#EDF8E1" }}>
        <div className="r1" style={{ display: "flex", padding: "0 3rem", flexDirection: "column", justifyContent: "center", flex: 1 }}>
          <img src={pittadosh} alt="" />
        </div>
        <div className="r1" style={{ flex: 1, gap: "3rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h1 style={{ fontSize: "3rem", textAlign: "center", margin: "0" }}>Pitta Dosha</h1>
          <p style={{ lineHeight: "1.5rem", paddingRight: "3rem", textAlign: "justify", fontSize: "1.3rem" }}>
            Do you often feel hot, irritable, or “hangry?” Is your skin sensitive or prone to breakouts, rashes, and irritation? Do you sometimes have excess stomach acid or trouble falling asleep at night? If some of these things sound familiar, you might have a Pitta dosha imbalance or, you might be a fiery, passionate Pitta dosha mind-body type.
          </p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="in" style={{ textAlign: "center", fontSize: "1.3rem" }}>
              <div>Hypertension</div>
              <div>Constipation</div>
              <div>Weight loss</div>
              <div>Weakness</div>
              <div>Arthritis</div>
              <div>Prone to worry</div>
              <div>Insomnia</div>
              <div>Digestive Challenges</div>
            </div>
            <div className="out" style={{ textAlign: "center", fontSize: "1.3rem" }}>
              <div>Hypertension</div>
              <div>Constipation</div>
              <div>Weight loss</div>
              <div>Weakness</div>
              <div>Arthritis</div>
              <div>Prone to worry</div>
              <div>Insomnia</div>
              <div>Digestive Challenges</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ display: "flex" }}>
        <div className="r1" style={{ flex: 1, gap: "3rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h1 style={{ fontSize: "3rem", textAlign: "center", margin: "0" }}>Vata Dosha</h1>
          <p style={{ lineHeight: "1.5rem", paddingLeft: "3rem", textAlign: "justify", fontSize: "1.3rem" }}>
            Do you often feel hot, irritable, or “hangry?” Is your skin sensitive or prone to breakouts, rashes, and irritation? Do you sometimes have excess stomach acid or trouble falling asleep at night? If some of these things sound familiar, you might have a Pitta dosha imbalance or, you might be a fiery, passionate Pitta dosha mind-body type.
          </p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="in" style={{ textAlign: "center", fontSize: "1.3rem" }}>
              <div>Hypertension</div>
              <div>Constipation</div>
              <div>Weight loss</div>
              <div>Weakness</div>
              <div>Arthritis</div>
              <div>Prone to worry</div>
              <div>Insomnia</div>
              <div>Digestive Challenges</div>
            </div>
            <div className="out" style={{ textAlign: "center", fontSize: "1.3rem" }}>
              <div>Hypertension</div>
              <div>Constipation</div>
              <div>Weight loss</div>
              <div>Weakness</div>
              <div>Arthritis</div>
              <div>Prone to worry</div>
              <div>Insomnia</div>
              <div>Digestive Challenges</div>
            </div>
          </div>
        </div>
        <div className="r1" style={{ display: "flex", padding: "0 3rem", flexDirection: "column", justifyContent: "center", flex: 1 }}>
          <img src={vatadosh} alt="" />
        </div>
      </section>

      <section style={{ display: "flex", backgroundColor: "#EDF8E1" }}>
        <div className="r1" style={{ display: "flex", padding: "0 3rem", flexDirection: "column", justifyContent: "center", flex: 1 }}>
          <img src={kaphadosh} alt="" />
        </div>
        <div className="r1" style={{ flex: 1, gap: "3rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h1 style={{ fontSize: "3rem", textAlign: "center", margin: "0" }}>Kapha Dosha</h1>
          <p style={{ lineHeight: "1.5rem", paddingRight: "3rem", textAlign: "justify", fontSize: "1.3rem" }}>
            Do you often feel hot, irritable, or “hangry?” Is your skin sensitive or prone to breakouts, rashes, and irritation? Do you sometimes have excess stomach acid or trouble falling asleep at night? If some of these things sound familiar, you might have a Pitta dosha imbalance or, you might be a fiery, passionate Pitta dosha mind-body type.
          </p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="in" style={{ textAlign: "center", fontSize: "1.3rem" }}>
              <div>Hypertension</div>
              <div>Constipation</div>
              <div>Weight loss</div>
              <div>Weakness</div>
              <div>Arthritis</div>
              <div>Prone to worry</div>
              <div>Insomnia</div>
              <div>Digestive Challenges</div>
            </div>
            <div className="out" style={{ textAlign: "center", fontSize: "1.3rem" }}>
              <div>Hypertension</div>
              <div>Constipation</div>
              <div>Weight loss</div>
              <div>Weakness</div>
              <div>Arthritis</div>
              <div>Prone to worry</div>
              <div>Insomnia</div>
              <div>Digestive Challenges</div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ display: "flex", justifyContent: "space-around", backgroundSize: "cover", backgroundImage: "url('https://media.istockphoto.com/id/547033284/photo/low-key-green-centella-asiatica-plants-background.jpg?s=612x612&w=0&k=20&c=h2uFf9kZaUErOLGvRmS3vCZWvBB-vVsLmRI7ZVDRG_g=')" }}>
        <div style={{ margin: "3rem", flex: 3 }}>
          <h1 style={{ fontSize: "3rem", color: "white", textAlign: "justify", margin: "0", paddingLeft: "8rem" }}>Curious about dosha ?</h1>
          <h1 style={{ fontSize: "3rem", color: "white", textAlign: "justify", margin: "0", paddingLeft: "8rem" }}>Find Out Yours Now</h1>
        </div>
        <div style={{ flex: 2, display: "flex", alignItems: "center", justifyContent: "flex-start", paddingLeft: "1rem" }}>
          <button style={{ fontSize: "2rem", padding: "1rem 3rem", backgroundColor: "#0E2015", color: "white", border: "1px solid #0E2015", borderRadius: "5rem" }}>Take Quiz</button>
        </div>
      </div>
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

export default Dosha;
