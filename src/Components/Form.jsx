import React, { useState } from 'react'
import './Form.css'
const Form = (props) => {
    const [valInput , setInput] = useState('');


   const handleSubmit = (e) => {
        // prevent default action
          e.preventDefault();
          //--test show value input in console   
          //console.log(valInput);

          props.addList(valInput);

           // vider le champ  
          setInput("")
        };
    const handleInput =(e)=>{
        setInput(e.target.value);
    }
    const addTask = ()=>{
        props.addList(valInput)
        setInput("")
      }
  return (
    <div className="form-header">
        <div className="section">
           <form id="form-tasks" className="grid-container" onSubmit={handleSubmit} >
             <input className="input-text" value={valInput} placeholder="Enter your task to do" onChange={handleInput}/> 
             <button type="submit" className="button"onClick={addTask}>Add</button>
           </form>
  </div>
</div>
);
}


export default Form