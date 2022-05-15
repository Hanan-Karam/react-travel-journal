import React from "react"

export default function Trip (props){
    return(
       <div className="container">
         <div className="trip">
            <img src={props.imageUrl} className="trip--img"/> 
            <div className="trip--right">
                <img src={props.icon} className="trip--icon"/>
                <span className="trip--country">{props.location}</span>
                <a href={props.googleMapsUrl}className="trip--link">View On Google Maps</a>
                <h2 className="trip--name"> {props.title}</h2>
                <p> 
                    <span className="trip--date">{props.startDate}</span>
                    - 
                    <span className="trip--date">{props.endDate}</span>
                </p>
                 <p className="trip--desc"> 
                    {props.description}
                </p>
            
            </div>   
        </div>
               
       </div>
    )
}