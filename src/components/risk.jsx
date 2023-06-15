import React, { useEffect, useState } from "react";
import styles from './risk.module.css';


const Risk = (props)=>{

    console.log(props.val);

   
    return(<div className={styles.container} style={{display : props.dis}}onClick={()=>{
        
        props.hand();


      }}>
        <table className={styles.styletable}>
            <thead>
                <tr>
                    <th>
                        Criteria
                    </th>
                    <th>
                        Evalution
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    Historical Volatility
                    </td>
                    <td>
                    {props.val.Historical}
                    </td>
                </tr>
                <tr>
                    <td>
                    Beta Coefficient

                    </td>
                    <td>
                        {props.val.beta}
                    </td>
                </tr>
                <tr>
                    <td>P/E Ratio

                    </td>
                    <td>{props.val.pE}
                        
                    </td>
                </tr>
                <tr>
                    <td>P/B Ratio

                    </td>
                    <td>{props.val.pb}
                        
                    </td>
                </tr>
                <tr >
                    <td>
                    Dividend Yield

                    </td>
                    <td>
                        {props.val.div}
                        
                    </td>
                </tr>
            </tbody>
        </table>

    </div>)

}

export default Risk;