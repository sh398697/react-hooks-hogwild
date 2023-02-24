import React from "react";
import HogTile from "./HogTile";

function HogList ({hogs}) {

    const hogsArray = hogs.map((hogObject) => {
            return(
            <HogTile
                key={hogObject.name}
                name={hogObject.name}
                specialty={hogObject.specialty}
                weight={hogObject.weight}
                greased={hogObject.greased}
                image={hogObject.image}
            />);
        });

    return (
        <div className="ui grid container">
            {hogsArray}
        </div>
	);

}
export default HogList;
