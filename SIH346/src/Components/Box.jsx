import React from 'react'
import { useState } from 'react';
import notescontext from "../Components/context/notes/notecontext";
import { useContext } from 'react';
import { useEffect } from 'react';
const Box = ({index,isCurrentQuestion, onNextQuestion,onPreviousquestion}) => {
    const [isClicked, setIsClicked] = useState([false,false,false,false]);
    const context = useContext(notescontext);
    const { issubmit,setissubmit } = context;
    const handleDivclick = (index) => {
        const updatedIsClicked = Array(isClicked.length).fill(false); 
        updatedIsClicked[index] = true; 
        setIsClicked(updatedIsClicked);
      
    };
    const handlesubmit = () => {
            onNextQuestion(); // Callback to move to the next question
        };
        const handleback=()=>{
            onPreviousquestion();
        }
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <div className="box" style={{width:"90vw", height:"40vh", border:"3px solid green", display:"flex",flexDirection:"column"}}>
        <h2>Question no {index}</h2>
        <div className="row1" style={{ display:"flex", width:"90%", justifyContent:"center"}}>
        <div className="box1" onClick={()=>{handleDivclick(0)}} style={{ color:isClicked[0]?'white':'green', backgroundColor: isClicked[0]? 'green' : 'transparent',width:"40%",border:"3px solid green",padding:"10px",margin:"10px",cursor:"pointer" }}>box1</div>
        <div className="box2"  onClick={()=>{handleDivclick(1)}} style={{ color:isClicked[1]?'white':'green', backgroundColor: isClicked[1]? 'green' : 'transparent',width:"40%",border:"3px solid green",padding:"10px",margin:"10px",cursor:"pointer" }}>box2</div>
        </div>
        <div className="row2" style={{ display:"flex" ,width:"90%", justifyContent:"center"}}>
        <div className="box3" onClick={()=>{handleDivclick(2)}}style={{ color:isClicked[2]?'white':'green', backgroundColor: isClicked[2]? 'green' : 'transparent',width:"40%",border:"3px solid green",padding:"10px",margin:"10px",cursor:"pointer" }}>box3</div>
        <div className="box4" onClick={()=>{handleDivclick(3)}} style={{ color:isClicked[3]?'white':'green', backgroundColor: isClicked[3]? 'green' : 'transparent',width:"40%",border:"3px solid green",padding:"10px",margin:"10px",cursor:"pointer" }}>box4</div>
        </div>
        <div className="sub" style={{display:"flex",justifyContent:"space-between"}}>
        <div className="Back" onClick={handleback} style={{ display:"flex",textAlign:"center",alignItems:"center",justifyContent:"center", color:'green', backgroundColor:'transparent',width:"20%",border:"3px solid green",padding:"10px",margin:"10px",cursor:"pointer" }}>back</div>
        <div className="submit" onClick={handlesubmit} style={{ display:"flex",textAlign:"center",alignItems:"center",justifyContent:"center", color:'green', backgroundColor:'transparent',width:"20%",border:"3px solid green",padding:"10px",margin:"10px",cursor:"pointer" }}>Submit</div>
        </div>
        

      </div>
    </div>
  )
}

export default Box
