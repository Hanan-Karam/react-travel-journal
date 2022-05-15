import React from "react";
import NavBar from "./NavBar";
import Trip from "./Trip";
import data from "./data";

export default function App (){
    const trips = data.map(item => {
        return (
            <Trip
            
            {...item}
            /*
            key={item.title}
            imageUrl ={item.imageUrl}
            icon={item.icon}
            location={item.location}
            googleMapsUrl={item.googleMapsUrl}
            title={item.title}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            */
            
            />
        )
    })
    
    return(
        <div>
            <NavBar/>
            {trips}
            
        </div>
        
    )
}

    