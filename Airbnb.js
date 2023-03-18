import React from "react";
import "./App.css"
function Airbnb(props){
    return (
        
       <div className='card'>
      <img src={props.img}/>
      <p>{props.rating}</p>
      <h2 className="gray">{props.reviewCount}</h2>
      <p className="gray">{props.country}</p>
      <p>{props.title}</p>
      <p>${props.price}</p>
        </div>


    )
}

export default Airbnb;
