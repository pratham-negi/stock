import React from "react";

const Forecast = (props)=>{
    return(<div style={{display : props.dis}}  className="containercase" onClick={()=>{
        props.hand();
    }}>
        <iframe title="stockmarket" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=c666c7fa-62be-43dd-8f4e-1b2043e04dce&autoAuth=true&ctid=9b33b91a-cb4a-4942-8f68-a820d6ef3b49" frameborder="0" allowFullScreen="true"></iframe>
    </div>);
}

export default Forecast;
