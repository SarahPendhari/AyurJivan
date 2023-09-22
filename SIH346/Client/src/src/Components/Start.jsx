import React from 'react'
import tridoshatext from "./images/Tridoshatext.png"
import prakruti from "./images/prakrutiimg.png"
const Start = () => {
  return (
    <div className="startmain" style={{height:"100%"}}>
      <div className="main"style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",flexDirection:"column"}}>
            <div className="head" ><img src={tridoshatext} alt="" style={{width:"40vw",marginTop:"7rem"}}/></div>
            <div className="doshaimg"><img src={prakruti} alt="" style={{height:"90%",width:"90%"}}/></div>
      </div>
    </div>
  )
}

export default Start
