import React from 'react';
import logo from "./images/logo.png"
import dashboard from "./images/Dashboard.png"
import Vector from "./images/Vector.png"
import chatbubble from "./images/Chat Bubble.png"
import setting from "./images/Settings.png"
import survey from "./images/Survey.png"
import medical from "./images/Medical Doctor.png"
import group1 from "./images/Group 1000001484.png"
import logout from "./images/Logout.png"
import vector2 from "./images/Vector-2.png"
import camera from "./images/Camera alt.png"
import vector3 from "./images/Vector-2 2.png"
import vector4 from "./images/Vector-3.png"

function Chatpage() {
  return (
    <div style={{width:"80%"}}>
      <div className="mytask_dashboard" style={{ display: 'flex', height: '100vh' }}>
        
        <div className="right-column" style={{ width: '100%' }}>
          <div className="top-search-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '10vh', width: '100%', padding: '8px 0' }}>
            <div style={{ padding: '25px 50px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '50%' }}>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '20px' }}>Welcome to Prakriti Assessment Test</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '20%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <h4 style={{ margin: '0', fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '18px' }}>AyurJivan Bot</h4>
                <p style={{ margin: '0', fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>Online</p>
              </div>
              <span class="material-symbols-outlined" style={{fontSize: '40px'}}>account_circle</span>
            </div>
          </div>

          <div className="chat-panel" style={{ height: '75', backgroundColor: 'rgba(84, 136, 90, 0.05)', display: 'flex', flexDirection: 'column', padding: '0 50px',overflowY:"scroll",height:"78vh" }}>
            {/* <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative' }}>
                <input type="text" name="search" id="search" placeholder="Enter your message here" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, padding: '15px 20px', position: 'fixed', bottom: '40px', left: '300px', width: '900px', fontSize: '17px', backgroundColor: 'rgba(84, 136, 90, 0.12)', borderRadius: '10px', border: 'none', boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)' }} />
                <img src={vector3} alt="send-icon" style={{ position: 'fixed', left: '82vw', bottom: '53px', width: '35px' }} />
              </div>
              <img src={camera} alt="camera-icon" style={{ width: '35px', position: 'fixed', left: '89vw', bottom: '53px' }} />
              <img src={vector4} alt="microphone-icon" style={{ width: '24px', position: 'fixed', left: '94vw', bottom: '57px' }} />
            </div> */}

            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>
              <p style={{ margin: '0', padding: '20px 0 10px', fontSize: '13px' }}>AyurJivan Bot</p>
              <div style={{ width: '35vw', backgroundColor: 'white', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)', padding: '15px 10px', border: 'none', borderRadius: '10px' }}>
                <p style={{ margin: '0', padding: '15px 30px' }}>Hi, how can I help you?</p>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  <div style={{ backgroundColor: 'rgba(84, 136, 90, 0.15)', padding: '10px 20px', margin: '0 15px 20px 30px', borderRadius: '7px' }}><span>Start Assessment</span></div>
                  <div style={{ backgroundColor: 'rgba(84, 136, 90, 0.15)', padding: '10px 20px', margin: '0 15px 20px', borderRadius: '7px' }}><span>Know Ayurveda</span></div>
                </div>
              </div>
            </div>

            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300, paddingLeft: '29vw' }}>
              <p style={{ margin: '0', padding: '20px 0 10px', fontSize: '13px' }}>Sarah</p>
              <div style={{ width: '35vw', backgroundColor: 'rgba(84, 136, 90, 0.15)', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)', padding: '5px', border: 'none', borderRadius: '10px' }}>
                <p style={{ margin: '0', padding: '15px 30px' }}>Start my Prakriti Assessment</p>
              </div>
            </div>

            <div style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 300 }}>
              <p style={{ margin: '0', padding: '20px 0 10px', fontSize: '13px' }}>AyurJivan Bot</p>
              <div style={{ width: '35vw', backgroundColor: 'white', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)', padding: '15px 10px', border: 'none', borderRadius: '10px' }}>
                <p style={{ margin: '0', padding: '15px 30px' }}>Sure... Here is your first question</p>
                <p style={{ margin: '0', padding: '15px 30px' }}>What is your Body Size? (Select from below or Select the camera option below)</p>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  <div style={{ backgroundColor: 'rgba(84, 136, 90, 0.15)', padding: '10px 20px', margin: '0 15px 20px 30px', borderRadius: '7px' }}><span>Slim</span></div>
                  <div style={{ backgroundColor: 'rgba(84, 136, 90, 0.15)', padding: '10px 20px', margin: '0 15px 20px', borderRadius: '7px' }}><span>Medium</span></div>
                  <div style={{ backgroundColor: 'rgba(84, 136, 90, 0.15)', padding: '10px 20px', margin: '0 15px 20px', borderRadius: '7px' }}><span>Large</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* <div style={{ backgroundColor:'rgba(84, 136, 90, 0.05)' }}> */}
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"15px" }}> 
              <img src={camera} alt="camera-icon" style={{ width: '35px'}} />
              <div style={{backgroundColor: 'rgba(84, 136, 90, 0.12)', borderRadius: '10px', border: 'none', boxShadow: '0 0 4px rgba(0, 0, 0, 0.1)', paddingRight:"15px"}} >
                <input type="text" name="search" id="search" placeholder="Enter your message here" style={{ fontFamily: 'Poppins, sans-serif',border:"none", backgroundColor:"transparent", fontWeight: 300, padding: '15px 20px', width: '900px', fontSize: '17px'}} />
                <img src={vector3} alt="send-icon" style={{ width: '35px',marginLeft:"-2rem" }} />
              </div>
              <img src={vector4} alt="microphone-icon" style={{ width: '24px'}} />
            </div>
          {/* </div> */}
    {/* <center className='chat' style={{marginBottom:"2rem", display:"flex",justifyContent:"center",alignItems:"center", gap:"1rem"}} >
       <i class="fa-solid fa-camera" style={{ fontSize: "2rem", display:"flex", alignItems:"center",justifyContent:"center",height:"50px",width:"50px", border:"2px solid black", borderRadius:"50%" }}></i>
       <input type='text'   placeholder='Enter your request' onChange={handleInputChange} style={{display:"flex", alignItems:"center", width:"70vw",color:"black", height:"6vh",borderRadius:"5rem" ,backgroundColor:"#D9D9D9",border:"1px solid black",padding:"10px"}}/>
       <i class="fa-solid fa-paper-plane"   style={{color:"#34BDC4", fontSize:"2rem", display:"flex", alignItems:"center",cursor:"pointer" }}></i>
    </center> */}
        </div>
      </div>
    </div>
  );
}

export default Chatpage;
