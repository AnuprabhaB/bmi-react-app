import { useState } from 'react'
import './App.css'


function App() {
  const [height,setHeight]=useState("");
  const [weight,setWeight]=useState("");
  const [bmi,setBmi]=useState(null);
  const [bmiStatus,setBmiStatus]=useState("");
  const [errorMsg,setErrorMsg]=useState("");

  const calculateBmi=()=>{
    const isValidHeight=/^\d+$/.test(height);
    const isValidWeight=/^\d+$/.test(weight);
     if(isValidHeight && isValidWeight){
        const hinmeters=height/100;
        const bmiValue=weight/(hinmeters + hinmeters);
        setBmi(bmiValue.toFixed(2));
        if(bmiValue<18.5){
          setBmiStatus("Underweight");
        }
        else if(bmiValue>=18.5 && bmiValue < 24.9){
          setBmiStatus("Normal Weight");
        }
        else if(bmiValue >=25 && bmiValue <29.9){
          setBmiStatus("Overweight");
        }
        else{
          setBmiStatus("Obese");
        }
        setErrorMsg("");
     }else{
      setBmi(null);
      setBmiStatus("");
      setErrorMsg("* Please enter a valid values for height and weight");
     }
  };

  const clearAll=()=>{
     setHeight("");
     setWeight("");
     setBmi(null);
     setBmiStatus("");
     setErrorMsg("");
  };

  return (
    <>
      <div className='bmi-container'>
        <div className="box">
           
        </div>
        <div className="data">
          <h1>BMI CALCULATOR</h1>
          {errorMsg && <p className='error'>{errorMsg}</p>}
        
        <div className="input-container">
          <label htmlFor='height'>Height (cm) :</label>
          <input type="text" id="height" value={height} onChange={(e)=>setHeight(e.target.value)}/>
        </div>
        <div className="input-container">
          <label htmlFor='weight'>Weight (kg) :</label>
          <input type="text" id="weight" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
        </div>
         <button onClick={calculateBmi}> Calculate BMI</button>
         <button onClick={clearAll}className='clear'>Clear</button>
         {bmi && <div className="result">
             <p>Your BMI is: {bmi}</p>
             <p>Status: {bmiStatus}</p>
         </div>}
         
        </div>
      </div>
    </>
  )
}

export default App
