import React, { useEffect, useState } from 'react'
import "./css/Diet.css"
import diet1 from "./images/diet1.png"
import diet2 from "./images/diet2.png"
import diet3 from "./images/diet3.png"
import {Dieting} from './object.js';
const Diet = (props) => {
  // console.log("my dosha is giving",props.dosha,"boy")
  const [index,setindex]=useState(0);
  useEffect(() => {
    if (props.dosha === "vata") setindex(0);
    else if (props.dosha === "pitta") setindex(1);
    else if (props.dosha === "Kapha") setindex(2);
  }, [props.dosha]);
  return (
    <div>
      <div className="main">
        <div className="submain">
            <div className="head" style={{marginTop:"20rem"}}><h1>Diet plan for {Dieting[index].name}</h1></div>
            <div className="diet">
                <div className="text" style={{color:"white",display:"flex", flexWrap:"wrap", backgroundColor:"#34BDC4" , border:"2px solid #34BDC4", borderTopRightRadius:"7rem", borderBottomRightRadius:"7rem"}} >{Dieting[index].breakfast}</div>
                <div className="dietimg" style={{transform:"rotate(20deg)"}} ><img src={diet1} alt="" /></div>
            </div>
            <div className="diet">
                <div className="dietimg" style={{transform:"rotate(-20deg)"}} ><img src={diet2} alt="" /></div>
                <div className="text" style={{display:"flex",color:"white",paddingLeft:"3rem", flexWrap:"wrap", textAlign:"end", backgroundColor:"#34BDC4" , border:"2px solid #34BDC4", borderTopLeftRadius:"8rem", borderBottomLeftRadius:"8rem"}}>{Dieting[index].lunch}</div>
            </div>
            <div className="diet">
                <div className="text" style={{color:"white",display:"flex", flexWrap:"wrap", backgroundColor:"#34BDC4" , border:"2px solid #34BDC4", borderTopRightRadius:"7rem", borderBottomRightRadius:"7rem"}} >{Dieting[index].dinner}</div>
                <div className="dietimg" style={{transform:"rotate(20deg)"}} ><img src={diet3} alt="" /></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Diet
