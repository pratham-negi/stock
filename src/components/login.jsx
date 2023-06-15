import React, { useState , useEffect} from "react";
import styles from './Login.module.css';
import axios from 'axios';



const Login = (props)=>{


    const [move,setMove] = useState("");

    const [myData, setMyData] = useState([]);

    const [display , setDisplay] = useState("block");

    const [value,setValue] = useState({"user":"","password" : ""});
    
useEffect(()=>{
    axios.get("http://localhost:8000").then((res) => {
    console.log(res);    
    setMyData(res.data)});
},[]);
    

    return(
        <div className={styles.backdrop} style={{display: display}} >
       <div className={styles.view}>
        <div className = {styles.main} id={move}>
            <div className = {styles.login}>
                
                <form action="javascript:void(0);" >
                    <h1>Log In</h1>
                    <input type="text" placeholder="User Name"  value={value.id}  onChange={(e)=>{
                        setValue({"user":e.target.value,"password": value.password});

                    }}/>
                    
                    <input type= "password" placeholder="Password" value={value.password} onChange={(e)=>{
                        setValue({"user":value.user,"password":e.target.value});

                    }}/>
                    
                    <input type = "submit" value= "login" className={styles.button} onClick={(e)=>{
                        
                        for(let i = 0; i < myData.length;i++){
                            // eslint-disable-next-line
                            if( myData[i].user == value.user  ){
                                // eslint-disable-next-line
                                if(myData[i].password == value.password){
                                    props.usersetter(value.user);
                                   
                                    setDisplay("none");
                                    props.setdis();
                                }
                            }
                        }

                    }}/>
                    
                    <span>New Here? <span  onClick={()=>{
                        setMove(styles.mover);
                    }}>Sign Up</span></span>
                </form>
            </div>
            <div className = {styles.signup}>
                
            <form >
                    <h1>Sign Up</h1>
                    <input type="text" placeholder="User Name" onChange={(e)=>{
                        setValue({"user":e.target.value,"password": value.password});

                    }} />
                    
                    <input type= "password" placeholder="Password" onChange={(e)=>{
                        setValue({"user":value.user,"password":e.target.value});

                    }}/>
                    
                    <input type = "button" value= "Sign Up"  className={styles.button}  onClick={()=>{
                        
                        console.log( {user: value.user,password: value.password});
                        axios.post("http://localhost:8000", {user: value.user,password: value.password}).then((response) => {
      console.log(response.status, response.data);
      if (response.status === 200){
        props.usersetter(value.user);
        
      }
    })}
}/>
                    
                    <span>Already have a account? <span onClick={()=>{
                        setMove();
                    }}>Log In</span></span>
                </form>
            </div>
        </div>
       </div>
    </div>
    )
}

export default Login;