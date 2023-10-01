
import './App.css';
import Form from './Components/Form';
import Header from './Components/Header';
import {useState} from 'react'
import List from './Components/List';
function App() {

  const [listTasks,setList]=useState([]);


    const addList = (valInput)=>{
      if(valInput!=='')
         setList([...listTasks,valInput]);
       }


    const deleteTask = (key)=>{
         let NewList = [...listTasks];
           NewList.splice(key,1)
         setList([...NewList])
      }
  return (
     <>
     <Header />
        <Form  addList={addList}/>
        {listTasks.map((task,i)=>{
          return (
            <List key={i} index={i} item={task} deleteItem={deleteTask}/>
          )
        })}         

     </>
  );
}

export default App;
