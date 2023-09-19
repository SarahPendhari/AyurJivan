import React from 'react'
import mainlogo from "./images/mainlogo.png"
import dashtitle1 from "./images/Dashtitle1.png"
import arrow from "./images/Right Arrow.png"
import percent from "./images/percent.png"
import notify from "./images/notify.png"
import profileimg from "./images/profileimg.png"
import optionimg1 from "./images/option1.png"
import down from "./images/Down.png"
import search from "./images/Search.png"
const Dashboard = () => {
  return (
    <>
    <div className="dashboard" style={{width:"100vw",height:"100vh",display:"flex"}}>
      <div className="dashleft" style={{width:"20%",height:"100%",backgroundColor:"#F4F4F4",alignItems:"center",justifyContent:"center"}}>
        <div className="subleft" style={{width:"95%",height:"100%", display:'flex',flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
          <img src={mainlogo} alt="" style={{width:"80%", height:"18%"}} />
          <div className="headings" style={{display:"flex",flexDirection:"column",gap:"15px", alignItems:"center",justifyContent:"center"}} >
            <div className="head1" style={{height:"10%",width:"115%",padding:"10px", backgroundColor:"green",borderRadius:"0px 40px 40px 0px", display:"flex",flexDirection:"row",color:"white", gap:"10px",alignItems:"center",justifyContent:"center"}}>
              {/* img before dashboard title written */}
              <img src={dashtitle1} alt="" style={{width:"20px",height:"20px"}} />
              <h1 style={{fontSize:"1.5rem"}}>Dashboard</h1>
              {/* arrow */}
              <div className="arrow" style={{width:"30px",height:"30px",backgroundColor:"white",color:"green",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <img src={arrow} alt="" style={{width:"20px",height:"20px"}} />
              </div>
              
            </div>
            <div className="head1" style={{height:"10%",width:"115%",padding:"10px", backgroundColor:"green",borderRadius:"0px 40px 40px 0px", display:"flex",flexDirection:"row",color:"white", gap:"10px",alignItems:"center",justifyContent:"center"}}>
              {/* img before dashboard title written */}
              <img src={dashtitle1} alt="" style={{width:"20px",height:"20px"}} />
              <h1 style={{fontSize:"1.5rem"}}>My task</h1>
              {/* arrow */}
              <div className="arrow" style={{width:"30px",height:"30px",backgroundColor:"white",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <img src={arrow} alt="" style={{width:"20px",height:"20px"}} />
              </div>
              
            </div>
            <div className="head1" style={{height:"10%",width:"115%",padding:"10px", backgroundColor:"green",borderRadius:"0px 40px 40px 0px", display:"flex",flexDirection:"row",color:"white", gap:"10px",alignItems:"center",justifyContent:"center"}}>
              {/* img before dashboard title written */}
              <img src={dashtitle1} alt="" style={{width:"20px",height:"20px"}} />
              <h1 style={{fontSize:"1.5rem"}}>Community</h1>
              {/* arrow */}
              <div className="arrow" style={{width:"30px",height:"30px",backgroundColor:"white",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <img src={arrow} alt="" style={{width:"20px",height:"20px"}} />
              </div>
              
            </div>
            <div className="head1" style={{height:"10%",width:"115%",padding:"10px", backgroundColor:"green",borderRadius:"0px 40px 40px 0px", display:"flex",flexDirection:"row",color:"white", gap:"10px",alignItems:"center",justifyContent:"center"}}>
              {/* img before dashboard title written */}
              <img src={dashtitle1} alt="" style={{width:"20px",height:"20px"}} />
              <h1 style={{fontSize:"1.5rem"}}>Settings</h1>
              {/* arrow */}
              <div className="arrow" style={{width:"30px",height:"30px",backgroundColor:"white",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <img src={arrow} alt="" style={{width:"20px",height:"20px"}} />
              </div>
              
            </div>
            <div className="head1" style={{height:"10%",width:"115%",padding:"10px", backgroundColor:"green",borderRadius:"0px 40px 40px 0px", display:"flex",flexDirection:"row",color:"white", gap:"10px",alignItems:"center",justifyContent:"center"}}>
              {/* img before dashboard title written */}
              <img src={dashtitle1} alt="" style={{width:"20px",height:"20px"}} />
              <h1 style={{fontSize:"1.5rem"}}>Assesment</h1>
              {/* arrow */}
              <div className="arrow" style={{width:"30px",height:"30px",backgroundColor:"white",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <img src={arrow} alt="" style={{width:"20px",height:"20px"}} />
              </div>
              
            </div>
            <div className="head1" style={{height:"10%",width:"115%",padding:"10px", backgroundColor:"green",borderRadius:"0px 40px 40px 0px", display:"flex",flexDirection:"row",color:"white", gap:"10px",alignItems:"center",justifyContent:"center"}}>
              {/* img before dashboard title written */}
              <img src={dashtitle1} alt="" style={{width:"20px",height:"20px"}} />
              <h1 style={{fontSize:"1.5rem"}}>Apointment</h1>
              {/* arrow */}
              <div className="arrow" style={{width:"30px",height:"30px",backgroundColor:"white",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
              <img src={arrow} alt="" style={{width:"20px",height:"20px"}} />
              </div>
              
            </div>
          </div>
          <hr />
          <div className="logout">
            <img src="" alt="" />
            <h1>Logout</h1>
          </div>
        </div>
      </div>
      <hr style={{transform: "rotate(90deg)",height:"200px",width:"4px"}} />
      <div className="dashright" style={{width:"80%",height:"100vh", display:"flex",alignItems:"center",flexDirection:"column"}}>
        <div className="search" style={{width:"90%",height:"8%",display:'flex',flexDirection:"row" ,justifyContent:"space-between",alignItems:"center",marginTop:"8px"}}>
          <div className="bar" style={{ padding:"10px", width:"60%",height:"90%",borderRadius:"20px", backgroundColor:"#F4F4F4",display:"flex",flexDirection:"row",alignItems:"center"}}>
            <img src={search} style={{width:"30px",height:"30px"}} alt="" />
            <input type="text" placeholder='Enter your message'  style={{border:"none",background:"none",outline:"none"}}/>
          </div>
          <div className="profile" style={{width:"20%",display:"flex",flexDirection:"row",gap:"20px",justifyContent:"flex-end"}}>
            <img src={notify}  style={{width:"30px",height:"30px"}} alt="" />
            <img src={profileimg}  style={{width:"30px",height:"30px"}} alt="" />
          </div>
        </div>
        <hr style={{width:'100%',fontSize:"2rem",margin:"5px"}} />
        <div className="subright" style={{width:"100%",height:"85%",display:"flex",flexDirection:"column",alignItems:'center'}}>
          <div className="title" style={{width:"90%",height:"12%"}}>
            <h2 style={{fontSize:"1.5rem"}} >Dashboard</h2>
            <p>Hi, Sarah.. Welcome to AyurJivan</p>
          </div>
          {/* pura stats ka part same my task me daal */}
          <div className="stats" style={{backgroundColor:"#F4F4F4", width:"100%",height:"55%",display:"flex",flexDirection:"column",alignItems:'center',justifyContent:"center"}}>
            <div className="substats" style={{width:"95%",height:"90%",backgroundColor:"white",borderRadius:"20px",padding:"10px"}}>
              <div className="statshead" style={{padding:"10px", display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <h3>Your statistics</h3>
                <h3>View all</h3>
              </div>
              <div className="box" style={{width:"100%",height:'20%',display:'flex',alignItems:"center", justifyContent:"space-between",borderRadius:"10px",border:"2px solid #F4F4F4",backgroundColor:"white",margin:"10px 0px"}}>
                <div className="leftbox" style={{width:"50%",height:"100%",display:'flex',alignItems:"center", justifyContent:"center"}}>
                <div className="quantity" style={{width:"90%",alignItems:"center",height:'100%', display:"flex",flexDirection:"row",gap:"10px"}}>
                  <img src={percent} style={{width:"30px",height:"30px"}} alt="" />
                  <div className="advice">
                    <h2 style={{fontSize:"1rem",margin:"0"}}>Drink 3000ml of water daily</h2>
                    <p style={{fontSize:"0.8rem",margin:"0"}}>Complete drinking 600ml of water today</p>
                  </div>
                </div>
                </div>
                <div className="rightbox" style={{marginRight:"10px",height:"80%", borderRadius:"10px",backgroundColor:"#F4F4F4",padding:"10px"}}>
                  <h2 style={{fontSize:"1rem"}}>3 hours left</h2>
                </div>
              </div>
              <div className="box" style={{width:"100%",height:'20%',display:'flex',alignItems:"center", justifyContent:"space-between",borderRadius:"10px",backgroundColor:"white",border:"2px solid #F4F4F4",margin:"10px 0px"}}>
                <div className="leftbox" style={{width:"50%",height:"100%",display:'flex',alignItems:"center", justifyContent:"center"}}>
                <div className="quantity" style={{width:"90%",alignItems:"center",height:'100%', display:"flex",flexDirection:"row",gap:"10px"}}>
                  <img src={percent} style={{width:"30px",height:"30px"}} alt="" />
                  <div className="advice">
                    <h2 style={{fontSize:"1rem",margin:"0"}}>Drink 3000ml of water daily</h2>
                    <p style={{fontSize:"0.8rem",margin:"0"}}>Complete drinking 600ml of water today</p>
                  </div>
                </div>
                </div>
                <div className="rightbox" style={{marginRight:"10px",padding:"5px", height:"80%", borderRadius:"10px",backgroundColor:"#F4F4F4",padding:"10px"}}>
                  <h2 style={{fontSize:"1rem"}}>3 hours left</h2>
                </div>
              </div>
              <div className="box" style={{width:"100%",height:'20%',display:'flex',alignItems:"center", justifyContent:"space-between",borderRadius:"10px",backgroundColor:"white",border:"2px solid #F4F4F4",margin:"10px 0px"}}>
                <div className="leftbox" style={{width:"50%",height:"100%",display:'flex',alignItems:"center", justifyContent:"center"}}>
                <div className="quantity" style={{width:"90%",alignItems:"center",height:'100%', display:"flex",flexDirection:"row",gap:"10px"}}>
                  <img src={percent} style={{width:"30px",height:"30px"}} alt="" />
                  <div className="advice">
                    <h2 style={{fontSize:"1rem",margin:"0"}}>Drink 3000ml of water daily</h2>
                    <p style={{fontSize:"0.8rem",margin:"0"}}>Complete drinking 600ml of water today</p>
                  </div>
                </div>
                </div>
                <div className="rightbox" style={{marginRight:"10px",height:"80%", borderRadius:"10px",backgroundColor:"#F4F4F4",padding:"10px"}}>
                  <h2 style={{fontSize:"1rem"}}>3 hours left</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="tips" style={{width:"100%",height:"35%",display:"flex",alignItems:"center",flexDirection:"column",backgroundColor:"#F4F4F4"}}>
          <div className="subtips" style={{width:"95%",height:"100%",backgroundColor:"white",borderRadius:"10px",padding:"20px"}}>
            <div className="tiphead"style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
              <div className="tipcontent">
                <h1 style={{fontSize:"1rem",margin:"0"}}>Tips for your Dosha type</h1>
                <p style={{margin:"0",fontSize:"0.8rem"}}>Consuming fruit juices keeps up the hydration level.</p>
              </div>
              <div className="all" style={{width:"20%",display:"flex",flexDirection:"row",gap:"20px",justifyContent:"flex-end",alignItems:"center"}}>
                <p style={{fontSize:"1rem",margin:"0"}}>See All</p>
                <img src={down} alt="" style={{width:"20px",height:"20px"}} />
              </div>
            </div>
            <div className="tipoption" style={{width:"100%",display:"flex",flexDirection:"row",gap:"5rem",marginTop:"10px"}}>
              <div className="box" style={{display:"flex",height:"12%",flexDirection:"column",width:"30%",justifyContent:"center",alignItems:"center",padding:"5px",backgroundColor:"#EDFFEF",borderRadius:"10px"}}>
                <img src={optionimg1} style={{margin:"10px", width:"20px",height:"20px"}} alt="" />
                <h1 style={{fontSize:"1rem",margin:"0"}}>Watermelon</h1>
                <p style={{margin:"5px",fontSize:"0.8rem",textAlign:"center"}}>It contains 97% water in it. A good choice to stay hydrated.</p>
              </div>
            
              <div className="box" style={{display:"flex",height:"15%",flexDirection:"column",width:"30%",justifyContent:"center",alignItems:"center",padding:"5px",backgroundColor:"#FFF2EC",borderRadius:"10px"}}>
                <img src={optionimg1} style={{margin:"10px", width:"20px",height:"20px"}} alt="" />
                <h1 style={{fontSize:"1rem",margin:"0"}}>Watermelon</h1>
                <p style={{margin:"5px",fontSize:"0.8rem",textAlign:"center"}}>It contains 97% water in it. A good choice to stay hydrated.</p>
              </div>
            
              <div className="box" style={{display:"flex",height:"12%",flexDirection:"column",width:"30%",justifyContent:"center",alignItems:"center",padding:"5px",backgroundColor:"#F4F2FF",borderRadius:"10px"}}>
                <img src={optionimg1} style={{margin:"10px", width:"20px",height:"20px"}} alt="" />
                <h1 style={{fontSize:"1rem",margin:"0"}}>Watermelon</h1>
                <p style={{margin:"5px",fontSize:"0.8rem",textAlign:"center"}}>It contains 97% water in it. A good choice to stay hydrated.</p>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Dashboard
