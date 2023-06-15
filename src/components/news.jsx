import React  from "react";
import styles from './news.module.css';

const News = (props)=>{
   
    
    
    

    function printer(){
        var call=Array(props.ns);
        console.log(props.ns);
        if (call){

    return(call[0].map((obj) =>{
        return(
        <div className={styles.container}><h2 className={styles.header}>{obj[2]}</h2>
        <h5 className={styles.head}>{obj[0]}</h5>
        <p className={styles.body}>{obj[1]}
        </p>
        <p className={styles.achor}><a href={obj[3]} rel="noreferrer" target="_blank" >Read More...</a></p>
        </div>)
    }))



}}





    return(<div className={styles.backdrop} style={{display : props.dis}} onClick={()=>{
      props.hand();
    }}>
        <div className={styles.box}>
        <h1 className={styles.header}>News</h1>
            {printer()}
         
        </div>
        </div>
    )
}

export default News;