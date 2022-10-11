import React from "react";
import { useState } from "react";
import './Search.css'


export default function Image(props) {

    return(
        <>
        
        <div className=" imgBack" >
         <img
          className="img"
          key={props.id}
          src={props.urls.small}
          alt="val.alt_description"
        
        />
        </div>
        </>
    )    
}
