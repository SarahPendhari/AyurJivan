import React, { useEffect, useState } from 'react'
import { que } from './object';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Sample = ({index,currentval,currentIndex,handleDivclick}) => {

    useEffect(() => {
       AOS.init({
        duration: 500, 
        easing: 'ease-in-out', 
        offset:10
      });
    }, []);

  const isprint = index < currentval.length?true:false;
  return (
    <div>
      <div className="row m-3" >
      <div style={{paddingLeft:"55px"}}>
        <h1>{index+1}.{que[index].question}</h1>
        <div className="row1" style={{ display:"flex", width:"100%", justifyContent:"center" ,flexDirection:"column"}}>
        <div className="box1" name={que[index].A} data-value="A" onClick={(e)=>{handleDivclick(0,e)}} style={{ color:'black', backgroundColor:'transparent',width:"50%",border:"1px solid gray",padding:"10px",margin:"5px",cursor:"pointer", borderRadius:"16px",overflow:"hidden" }}>A: {que[index].A}</div>
        <div className="box2" name={que[index].B} data-value="B" onClick={(e)=>{handleDivclick(1,e)}} style={{ color:'black', backgroundColor:'transparent',width:"50%",border:"1px solid gray",padding:"10px",margin:"5px",cursor:"pointer",borderRadius:"16px",overflow:"hidden" }}>B: {que[index].B}</div>
        <div className="box3" name={que[index].C} data-value="C" onClick={(e)=>{handleDivclick(2,e)}}style={{ color:'black', backgroundColor:'transparent',width:"50%",border:"1px solid gray",padding:"10px",margin:"5px",cursor:"pointer",borderRadius:"16px",overflow:"hidden" }}>C: {que[index].C}</div>
        </div>
        </div>

    </div>
        {isprint && (<div  style={{display:"flex",justifyContent:"flex-end", flexWrap:"wrap"}}>
        <div style={{ width:"40%",textAlign:"center",padding:"0.6rem 0", fontSize:"1.3rem", border:"2px solid #34BDC4", borderRadius:"2rem", backgroundColor:"#34BDC4", color:"white" }}>{que[index].prop} {que[index][currentval[index]]}</div>
        </div>)}
        
    </div>
  )
}

export default Sample
