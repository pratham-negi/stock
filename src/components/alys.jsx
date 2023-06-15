import React from "react";
import styles from './risk.module.css';


const Alys = (props)=>{



return(<div className={styles.container} style={{display : props.dis}} onClick={()=>{

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
                <tr  style={{backgroundColor : "#2fe1be"}}>
                    <td > 
                    Positive
                    </td>
                    <td>
                  {props.val.pos}
                    </td>
                </tr>
                <tr>
                    <td>
                    
Neutral
                    </td>
                    <td>
                    {props.val.nu}
                    </td>
                </tr>
                <tr  style={{backgroundColor : "rgb(235, 100, 100)"}}>
                    <td>Negative

                    </td>
                    <td>{props.val.nev}
                        
                    </td>
                </tr>
               
                
            </tbody>
        </table>

    </div>
);

}

export default Alys;