import React from "react";

function HogTile (props) {
  const isGreased = props.greased ? "Greased" : "Non-Greased";
  return (
		  <div className="ui eight wide column"> 
        <div className="name">{props.name}</div>
        <div className="specialty">{props.specialty}</div>
        <div className="greased">{isGreased}</div>
        <div className="weight">{props.weight}</div>
        <img className="image" src={props.image} width="300"></img>
      </div>
	  );
};

export default HogTile;
