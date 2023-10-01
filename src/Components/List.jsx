import React from 'react'

const List = (props) => {
  return (
    <>
    <div className='list'>
        <p>  {props.item} </p>
     <div>
          <i class="uil uil-trash" onClick={(e)=>{props.deleteItem(props.index)}}></i>
     </div>  
    </div>
</>
  )
}
/*

function Todolist(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete" 
        onClick={e=>{
            props.deleteItem(props.index)
        }}></i>
        </span>
    </li>
  )
}*/
export default List