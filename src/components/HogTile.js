import React from "react";

function HogTile (props) {
    return (
		  <div className="ui eight wide column"> 
        <div className="name">{props.name}</div>
        <div className="specialty">{props.speciality}</div>
        <div className="greased">{props.greased}</div>
        <div className="weight">{props.weight}</div>
        <img className="image" src={props.image}></img>
      </div>
	  );
};

export default HogTile;
