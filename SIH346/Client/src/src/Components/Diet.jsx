import React, { useEffect, useState } from 'react';
import './css/Diet.css';
import diet1 from './images/diet1.png';
import diet2 from './images/diet2.png';
import diet3 from './images/diet3.png';
import { Dieting } from './object.js';
import Navbar from './Navbar';
import dietmain from "./images/Dietmain.png"
import mainlogo from "./images/mainlogo.png"
import dietcenter from "./images/dietcenter.png"
import pittadosh from "./images/pitta dosha.png"
const Diet = (props) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (props.dosha === 'vata') setIndex(0);
    else if (props.dosha === 'pitta') setIndex(1);
    else if (props.dosha === 'Kapha') setIndex(2);
  }, [props.dosha]);

  return (
    <>
    <Navbar />
      <section style={{ backgroundColor: '#F4F4F4' ,padding:" 5rem 0 0 0",height:"100vh"}} className="s1">
        <div style={{ display: 'flex', height:"100%" }}>
          <div
            className="r1"
            style={{
              display: 'flex',
              padding: '0 3rem',
              flexDirection: 'column',
              justifyContent: 'center',
              flex: 1,
            }}
          >
            <h1 style={{ fontSize: '4rem', margin: '2rem 0 0 0' }}>
              Find A Diet That
            </h1>
            <h1 style={{ fontSize: '4rem', margin: '0 0' }}>Suit You</h1>
            <p style={{ fontSize: '1.5rem', padding:"3rem 0 3rem 0", fontWeight: 50, textAlign: 'justify' }}>
              To discover the ideal diet in Ayurveda, understanding your unique Prakriti
              (constitution) and current imbalances is key. This personalized approach
              helps you choose foods that support your well-being
            </p>
          </div>
          <div className="r1" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={dietmain} alt="" style={{height:"100%"}} />
          </div>
        </div>
      </section>

      <section style={{position:"relative"}}>
        <img src={dietcenter} alt="" style={{position:"absolute",top:"50%",left:"34%",width:"28%"}} />
        <h1 style={{ fontSize: '4rem', margin: '5px 0px', textAlign: 'center' }}>Your Dosha Is Pitta</h1>
        <p style={{ fontSize: '1.5rem', fontWeight: 50, textAlign: 'justify', padding: '0 7rem' }}>
          To discover the ideal diet in Ayurveda, understanding your unique Prakriti
          (constitution) and current imbalances is key. This personalized approach
          helps you choose foods that support your well-being.enikncejdkabvc
          49wuoiqdns uifgehqja09ioeg4hr3j0e 29wposqknaxjschvy4gr
          8e2wji sqnkajhvf ygr3heijsq nkxjchvfygrhiesq
        </p>
        <div className="r1" style={{ display: 'flex', justifyContent: 'center',gap:'8rem', margin: '2rem 0' }}>
          <div className="c1" style={{ padding: '1rem', display: 'flex', width: '30%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '3px solid green', borderRadius: '3rem' }}>
            <h2 style={{ margin: 0 }}>Favorable food</h2>
            <p style={{ fontSize: '1.5rem', margin: '1rem 2rem', fontWeight: 50, textAlign: 'justify' }}>Bitter, sweet, and astringent tastes are ideal. Here are some amazing options for you:</p>
            <div style={{ fontSize: '1.5rem', width: '84%', fontWeight: 50, textAlign: 'start', padding: '0.5rem 0' }}><i className="fa-solid fa-cannabis" style={{ color: 'green', padding: '0 1rem 0 0' }}></i>Salad</div>
            <div style={{ fontSize: '1.5rem', width: '84%', fontWeight: 50, textAlign: 'start', padding: '0.5rem 0' }}><i className="fa-solid fa-cannabis" style={{ color: 'green', padding: '0 1rem 0 0' }}></i>Milk</div>
            <div style={{ fontSize: '1.5rem', width: '84%', fontWeight: 50, textAlign: 'start', padding: '0.5rem 0' }}><i className="fa-solid fa-cannabis" style={{ color: 'green', padding: '0 1rem 0 0' }}></i>Ice-Cream</div>
            <div style={{ fontSize: '1.5rem', width: '84%', fontWeight: 50, textAlign: 'start', padding: '0.5rem 0' }}><i className="fa-solid fa-cannabis" style={{ color: 'green', padding: '0 1rem 0 0' }}></i>Herbal Tea</div>
            <div style={{ fontSize: '1.5rem', width: '84%', fontWeight: 50, textAlign: 'start', padding: '0.5rem 0' }}><i className="fa-solid fa-cannabis" style={{ color: 'green', padding: '0 1rem 0 0' }}></i>Cold cerel</div>
            <div style={{ fontSize: '1.5rem', width: '84%', fontWeight: 50, textAlign: 'start', padding: '0.5rem 0' }}><i className="fa-solid fa-cannabis" style={{ color: 'green', padding: '0 1rem 0 0' }}></i>Vegetarian food</div>
          </div>
          <div className="c2" style={{ padding: '1rem', display: 'flex', width: '30%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '3px solid green', borderRadius: '3rem' }}>
            <h2 style={{ margin: 0 }}>Favorable food</h2>
            <p style={{ fontSize: '1.5rem', margin: '1rem 2rem', fontWeight: 50, textAlign: 'justify' }}>Bitter, sweet, and astringent tastes are ideal. Here are some amazing options for you:</p>
            <div style={{ fontSize: '1.5rem', width: '84%', fontWeight: 50, textAlign: 'start', padding: '0.5rem 0' }}><i className="fa-solid fa-cannabis" style={{ color: 'green', padding: '0 1rem 0 0' }}></i>Salad</div>
            <div style={{ fontSize: '1.5rem', width: '84%', fontWeight: 50, textAlign: 'start', padding: '0.5rem 0' }}><i className="fa-solid fa-cannabis" style={{ color: 'green', padding: '0 1rem 0 0' }}></i>Milk</div>
            <div style={{ fontSize: '1.5rem', width: '84%', fontWeight: 50, textAlign: 'start', padding: '0.5rem 0' }}><i className="fa-solid fa-cannabis" style={{ color: 'green', padding: '0 1rem 0 0' }}></i>Ice-Cream</div>
            <div style={{ fontSize: '1.5rem', width: '84%', fontWeight: 50, textAlign: 'start', padding: '0.5rem 0' }}><i className="fa-solid fa-cannabis" style={{ color: 'green', padding: '0 1rem 0 0' }}></i>Herbal Tea</div>
            <div style={{ fontSize: '1.5rem', width: '84%', fontWeight: 50, textAlign: 'start', padding: '0.5rem 0' }}><i className="fa-solid fa-cannabis" style={{ color: 'green', padding: '0 1rem 0 0' }}></i>Cold cerel</div>
            <div style={{ fontSize: '1.5rem', width: '84%', fontWeight: 50, textAlign: 'start', padding: '0.5rem 0' }}><i className="fa-solid fa-cannabis" style={{ color: 'green', padding: '0 1rem 0 0' }}></i>Vegetarian food</div>
          </div>
        </div>
        
        <div className="r1" style={{ display: 'flex', justifyContent: 'center',gap:'8rem', margin: '2rem 0' }}>
          <div className="c1" style={{ padding: '1rem', display: 'flex', width: '30%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '3px solid green', borderRadius: '3rem' }}>
            <h2 style={{ margin: 0 }}>Favorable food</h2>
            <p style={{ fontSize: '1.5rem', margin: '1rem 2rem', fontWeight: 50, textAlign: 'justify' }}>Bitter, sweet, and astringent tastes are ideal. Here are some amazing options for you:</p>
            <div style={{ fontSize: '1.5rem', width: '84%', fontWeight: 50, textAlign: 'start', padding: '0.5rem 0' }}><i className="fa-solid fa-cannabis" style={{ color: 'green', padding: '0 1rem 0 0' }}></i>Salad</div>
            <div style={{ fontSize: '1.5rem', width: '84%', fontWeight: 50, textAlign: 'start', padding: '0.5rem 0' }}><i className="fa-solid fa-cannabis" style={{ color: 'green', padding: '0 1rem 0 0' }}></i>Milk</div>
            <div style={{ fontSize: '1.5rem', width: '84%', fontWeight: 50, textAlign: 'start', padding: '0.5rem 0' }}><i className="fa-solid fa-cannabis" style={{ color: 'green', padding: '0 1rem 0 0' }}></i>Ice-Cream</div>
            <div style={{ fontSize: '1.5rem', width: '84%', fontWeight: 50, textAlign: 'start', padding: '0.5rem 0' }}><i className="fa-solid fa-cannabis" style={{ color: 'green', padding: '0 1rem 0 0' }}></i>Herbal Tea</div>
            <div style={{ fontSize: '1.5rem', width: '84%', fontWeight: 50, textAlign: 'start', padding: '0.5rem 0' }}><i className="fa-solid fa-cannabis" style={{ color: 'green', padding: '0 1rem 0 0' }}></i>Cold cerel</div>
            <div style={{ fontSize: '1.5rem', width: '84%', fontWeight: 50, textAlign: 'start', padding: '0.5rem 0' }}><i className="fa-solid fa-cannabis" style={{ color: 'green', padding: '0 1rem 0 0' }}></i>Vegetarian food</div>
          </div>
          <div className="c2" style={{ padding: '1rem', display: 'flex', width: '30%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', border: '3px solid green', borderRadius: '3rem' }}>
            <h2 style={{ margin: 0 }}>Favorable food</h2>
            <p style={{ fontSize: '1.5rem', margin: '1rem 2rem', fontWeight: 50, textAlign: 'justify' }}>Bitter, sweet, and astringent tastes are ideal. Here are some amazing options for you:</p>
            <div style={{ fontSize: '1.5rem', width: '84%', fontWeight: 50, textAlign: 'start', padding: '0.5rem 0' }}><i className="fa-solid fa-cannabis" style={{ color: 'green', padding: '0 1rem 0 0' }}></i>Salad</div>
            <div style={{ fontSize: '1.5rem', width: '84%', fontWeight: 50, textAlign: 'start', padding: '0.5rem 0' }}><i className="fa-solid fa-cannabis" style={{ color: 'green', padding: '0 1rem 0 0' }}></i>Milk</div>
            <div style={{ fontSize: '1.5rem', width: '84%', fontWeight: 50, textAlign: 'start', padding: '0.5rem 0' }}><i className="fa-solid fa-cannabis" style={{ color: 'green', padding: '0 1rem 0 0' }}></i>Ice-Cream</div>
            <div style={{ fontSize: '1.5rem', width: '84%', fontWeight: 50, textAlign: 'start', padding: '0.5rem 0' }}><i className="fa-solid fa-cannabis" style={{ color: 'green', padding: '0 1rem 0 0' }}></i>Herbal Tea</div>
            <div style={{ fontSize: '1.5rem', width: '84%', fontWeight: 50, textAlign: 'start', padding: '0.5rem 0' }}><i className="fa-solid fa-cannabis" style={{ color: 'green', padding: '0 1rem 0 0' }}></i>Cold cerel</div>
            <div style={{ fontSize: '1.5rem', width: '84%', fontWeight: 50, textAlign: 'start', padding: '0.5rem 0' }}><i className="fa-solid fa-cannabis" style={{ color: 'green', padding: '0 1rem 0 0' }}></i>Vegetarian food</div>
          </div>
        </div>
      </section>

      <section style={{ display: 'flex', backgroundColor: '#EDF8E1' }}>
        <div className="r1" style={{ display: 'flex', padding: '0 3rem', flexDirection: 'column', justifyContent: 'center',alignItems:"center", flex: 3 }}>
          <img src={pittadosh} alt="" style={{ width:"80%" }} />
        </div>
        <div className="r1" style={{ flex: 2, gap: '3rem',padding:"1rem", display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center' }}>
          <h1 style={{ fontSize: '3rem', textAlign: 'justify', margin: 0 }}>Want to know more about what suits you? </h1>
          <p style={{ lineHeight: '1.5rem', paddingRight: '3rem', margin: 0, textAlign: 'justify', fontSize: '1.3rem' }}>
            We’ve got you covered! Consult the best doctors in Ayurveda and discover the joy of being fit!
          </p>
          <button style={{ padding: '0.5rem 0', width: '50%', backgroundColor: 'green', border: '1px solid green', borderRadius: '3rem' }}>Book Appointment</button>
        </div>
      </section>
    </>
  );
}

export default Diet;
