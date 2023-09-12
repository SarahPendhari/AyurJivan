import React, { useState, useContext, useEffect } from 'react';
import Navbar from './Navbar';    
import cropgif from './images/cropgif.gif';
import spinnergif from './images/spinner.gif';
import notescontext from "../Components/context/notes/notecontext";
import hindi from "../Hindi.json";
import english from "../english.json";
import vata from './images/vata.jpg';
import pitta from './images/pitta.jpeg';
import kapha from './images/kapha.png';
import Box from './Box.jsx';
import { que } from './object';
import Start from './Start';
import Diet from './Diet';
import Tridosha from './Tridosha.jsx';
import Sample from './Sample';

const Recommend = () => {
  const [val, setVal] = useState([
    {q1: ""}, {q2: ""}, {q3: ""}, {q4: ""}, {q5: ""}, {q6: ""}, {q7: ""}, {q8: ""}, {q9: ""},
    {q10: ""}, {q11: ""}, {q12: ""}, {q13: ""},{ q14: ""}, {q15: ""}, {q16: ""},{ q17: ""}, {q18: ""}
  ]);

  const [disable, setDisable] = useState(true);
  const [mainval, setMainVal] = useState("");
  const [spinner, setSpinner] = useState([false, "value", false]);
  const [isClicked, setIsClicked] = useState([false,false,false]);
  const context = useContext(notescontext);
  const { res, storeval } = context;
  const { lang} = context;


  const getText = (key) => {
    return lang === "hindi" ? hindi[key] : english[key];
  };

  // const containerRef = useRef(null);

  useEffect(() => {
    if (res[0] === true && res[2] === true) {
      setSpinner([res[0], res[1], res[2]]);
      setMainVal(res[1].trim());
    }
  }, [res]);

  const handleclick = (e) => {
    storeval(val[0].q1, val[1].q2, val[2].q3, val[3].q4, val[4].q5, val[5].q6, val[6].q7, val[7].q8, val[8].q9,
      val[9].q10, val[10].q11, val[11].q12, val[12].q13, val[13].q14, val[14].q15, val[15].q16, val[16].q17, val[17].q18);
    setSpinner([false, "value", true]);
    console.log("handleclick")
  };


  const [currentIndex, setCurrentIndex] = useState(0);
  const [isdivclick, setisdivclick] = useState(false);
  const [currentval,setcurrentval]=useState([]);
  const [ans,setans]=useState("start");
    const [inputValue, setInputValue] = useState(""); // State to store the input value

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update inputValue as the user types
  };
  // useEffect(()=>{
  //  setisvalchanged(true)  
  // },[currentval])
  const handleNext = () => {
     if (currentIndex < que.length - 1) {
      setCurrentIndex(currentIndex + 1);
      const updatedIsClicked = Array(isClicked.length).fill(false); 
      setIsClicked(updatedIsClicked);
      const valarray={...val}
      const keys = `q${currentIndex + 1}`
        valarray[currentIndex][keys]=currentval;
        setVal(valarray)
        console.log(val)
    } 
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      const updatedIsClicked = Array(isClicked.length).fill(false); 
      setIsClicked(updatedIsClicked);
    }
  };
  const setyourans=()=>{
    setans(inputValue);
    setInputValue("");
  }
  const handleDivclick = (index,e) => {
    const updatedIsClicked = Array(isClicked.length).fill(false); 
    updatedIsClicked[index] = true; 
    setisdivclick(true)
    setIsClicked(updatedIsClicked);
    const target=e.currentTarget.getAttribute("data-value");
    const array= [...currentval,target];
    setcurrentval(array);
    if (currentIndex < que.length - 1) {
      setCurrentIndex(currentIndex + 1);
      const updatedIsClicked = Array(isClicked.length).fill(false); 
      setIsClicked(updatedIsClicked);
      const valarray={...val}
      const keys = `q${currentIndex + 1}`
        valarray[currentIndex][keys]=currentval;
        setVal(valarray)
    }
    if(currentIndex==17){
      handleclick()
    }
};
useEffect(() => {
  // Scroll to the latest div when currentIndex changes
  if(ans.includes("prakriti assesment")){
  const container = document.querySelector('.qbox');
  container.scrollTop = container.scrollHeight;}
}, [currentIndex]);
// useEffect(()=>{
//   if(ans=="rese")
//   setCurrentIndex(0)
// },currentIndex)

  return (
    <>
      <div style={{ position: "sticky", top: "0" ,backgroundColor:"transparent"}}>
        <Navbar />
      </div>
      <div className='chathome' style={{height:"80vh",width:"100vw",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
      <div className='homemain'style={{height:"80vh",width:"80%",display:"flex",alignItems:"flex-end",justifyContent:"center"}}>
      {ans=="start"&&<Start/>}
      {ans.includes("my dosha") &&<Tridosha dosha={mainval}/>}
      {(ans.includes("diet")||ans.includes("Diet"))&&<Diet dosha={mainval}/>}
      </div>
      <div className='homemain2'style={{height:"80vh",width:"80%",display:"flex",alignItems:"flex-end"}}>
      {
        (ans.includes("prakriti assesment")||ans.includes("prakriti test")||ans.includes("questionnaire") )&& (
          <div className='qbox' style={{ display: "flex", flexDirection: "column", overflow:"auto",width:"100%", maxHeight:"70vh" }}>
            <h1>Welcome to Prakruti Assessment, know your dosha type for better health.</h1>
            {que.slice(0, currentIndex + 1).map((question, index) => (
              <Sample key={index} index={index} currentIndex={currentIndex} handleDivclick={handleDivclick} isdivclick={isdivclick} setisdivclick={setisdivclick} currentval={currentval} />
            ))}
          </div>
        )
      }
  {/* {
    (ans.includes("retest") || ans.includes("restart") || ans.includes("Retest")) && (
      <>
        {setCurrentIndex(0)}
        {console.log("done bhai retest", currentIndex)}
      </>
    )
  } */}
      </div>
      
      </div>

      {(spinner[0]===true&&spinner[2]===true)&& (ans.includes("prakriti assesment")||ans.includes("prakriti test")||ans.includes("questionnaire") )&&(
        <div style={{margin:"3rem", fontSize:"2rem", textAlign:"center" , fontFamily:'Samarkan Normal'}}>
          <h2>Your dosha is {mainval} </h2>
        </div>
      )}  

    <center className='chat' style={{marginBottom:"2rem", display:"flex",justifyContent:"center",alignItems:"center", gap:"1rem"}} >
       <i class="fa-solid fa-camera" style={{ fontSize: "2rem", display:"flex", alignItems:"center",justifyContent:"center",height:"50px",width:"50px", border:"2px solid black", borderRadius:"50%" }}></i>
       <input type='text' value={inputValue}  placeholder='Enter your request' onChange={handleInputChange} style={{display:"flex", alignItems:"center", width:"70vw",color:"black", height:"6vh",borderRadius:"5rem" ,backgroundColor:"#D9D9D9",border:"1px solid black",padding:"10px"}}/>
       <i class="fa-solid fa-paper-plane" onClick={() => setyourans()}  style={{color:"#34BDC4", fontSize:"2rem", display:"flex", alignItems:"center",cursor:"pointer" }}></i>
    </center>

    {/* {mainval === "kapha" && <img src={kapha} alt="jute" />}
        {mainval === "vata" && <img src={vata} alt="cofee" />}
        {mainval === "pitta" && <img src={pitta} alt="cofee" />} */}

    </>
  )
}

export default Recommend;
      {/* <div className="sub" style={{display:"flex",alignItems:"center",justifyContent:"center"}}> */}
      {/* <button onClick={handlePrevious} disabled={currentIndex === 0} style={{ display:"flex",textAlign:"center",alignItems:"center",justifyContent:"center", color:'white', backgroundColor:'#34BDC4',width:"40%",border:"3px solid #34BDC4",padding:"10px",margin:"10px",cursor:"pointer",borderRadius:"16px"  }}>
        Previous
      </button> */}
      {/* <button onClick={handleNext}  style={
  currentIndex === que.length - 1
    ? {
      display: "none",
      }
    : {
      display:"flex",textAlign:"center",alignItems:"center",justifyContent:"center", color:'white', backgroundColor:'#34BDC4',width:"40%",border:"3px solid #34BDC4",padding:"10px",margin:"10px",borderRadius:"16px" 
      }
}>
        next
      </button> */}

            {/* <button onClick={handleclick}  style={
  currentIndex === que.length - 1
    ? {
      display:"flex",textAlign:"center",alignItems:"center",justifyContent:"center", color:'white', backgroundColor:'#34BDC4',width:"40%",border:"3px solid #34BDC4",padding:"10px",margin:"10px",borderRadius:"16px" 
      }
    : {
        display: "none",
      }
}>
        Submit
      </button> */}
      {/* </div> */}
      {/* <h1>Your dosha is {mainval}</h1> */}