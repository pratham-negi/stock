import React from "react";
import Header  from "./header";
import Stockchart from "./stockchart";

const Main = (props)=>{
 return(<div style={{display : props.dis}}>
<Header user = {props.user} />

<Stockchart />

 </div>);
}

export default Main; 