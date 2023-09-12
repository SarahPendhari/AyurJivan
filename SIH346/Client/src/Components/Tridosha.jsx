import React from 'react'
import vata from './images/Vataimage.png';
import pita from './images/pitta.jpeg';
import kapha from './images/kapha.png';
import {doshaobj} from './object.js';
import "./css/Diet.css"

const Tridosha = ({dosha}) => {
  return (
    <>
    <div className="main" style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
    <div className="head" style={{fontSize:"2rem",marginTop:"14rem"}}>Your Dosha is {dosha}</div>
       <div className="images" style={{width:"35%",height:"60%"}}>
           {dosha=="vata"&&<img src={vata} alt="" style={{width:"100%",height:"100%"}}/>}
           {dosha=="pitta"&&<img src={pita} alt="" />}
           {dosha=="Kapha"&&<img src={kapha} alt="" />}
       </div>
       <div className='balance'style={{display:"flex",flexDirection:"row",justifyContent:"space-around",width:"80%"}}>
        <div className="r1"style={{width:"50%",textAlign:"center"}}>
         <h1>Out Of Balance</h1>
         <div>
         {
          doshaobj.map((dosh) => {
            if (dosh.name === dosha) {
              return dosh.out.map((ele, index) => (
                <h3 key={index}>{ele}</h3>
              ));
            }
          })
        }
         </div>
         
        </div>
        <div className="r2"style={{width:"50%",textAlign:"center"}}>
        <h1>In Balance</h1>
        {
          doshaobj.map((dosh) => {
            if (dosh.name === dosha) {
              return dosh.in.map((ele, index) => (
                <h3 key={index}>{ele}</h3>
              ));
            }
          })
        }
        </div>
       </div>
    </div>

    </>
  )
}

export default Tridosha