
import React , {useState} from "react";
import axios from 'axios';
import StockCharts  from "./stockcharts";
import styles from "./stockchart.module.css";
import Forecast from "./forecast";
import Risk from './risk';
import News from "./news";
import Alys from "./alys";


const Stockchart = ()=>{



    const [stName, setStName] = useState('');
    const [period , setPeriod] = useState("");
    const [stockData , setStockData] = useState("");
    const [stLabel, setStLabel] = useState("");
    const [stPrice , setStPrice] = useState("");
    const [type, setType] = useState('');
    const [trigger , setTrigger] = useState(false);
    const [newsTrigger, setNewsTrigger] = useState("none");
    const [stockNews , setStockNews] = useState("ddd");
    const [riskTriger, setRiskTriger] = useState(false);
    const [riskDisplayTriger, setRiskDisplayTriger] = useState("none");
    const [riskVal, setRiskVal] = useState("");
    const [senVal , setSenVal] = useState("");
    const [senTriger , setSenTriger] = useState(false);
    const [senDisplayTriger , setSEnDisplayTriger] = useState("none");
    const [forecast , setforecast]  =useState(false);
    const [ forecasttrigger, setforecasttrigger] = useState("none");


    let data = require('../data.json');

    function newTriggerHandler(){
      setNewsTrigger("none");
      setRiskDisplayTriger("none");
      setSEnDisplayTriger("none");
      setforecasttrigger("none");
    }


    var wall = ()=>{if (trigger){
      return(<div>
        <News tick={stName} dis={newsTrigger} hand={newTriggerHandler} ns={stockNews}/>
      </div>)
      }}


      var wallFore = ()=>{if (forecast){
        return(<div>
          <Forecast  dis={forecasttrigger} hand={newTriggerHandler}/>
        </div>)
        }}


      
  
  
      var wallRisk = ()=>{if (riskTriger){
        return(<div>
          <Risk tick={stName} dis={riskDisplayTriger} hand={newTriggerHandler} val={riskVal} />
        </div>)
        }}


        var wallSen = () =>{
          if(senTriger){

            return(<Alys val ={senVal} dis={senDisplayTriger}  hand={newTriggerHandler}/>)
          }
        }  

    

    function stock(name,period){
      axios.get(`http://127.0.0.1:8000/stock-data/?symbol=${name}&period=${period}`).then((res) => {
        let data = [];
        for(let i = 0; i < res.data.date.length; i ++ ){
          data.push({labels : res.data.date[i] , values : res.data[type]});
        }

        console.log("sending request....")

        async function riskfetch(){    
            const response = await  fetch(`http://127.0.0.1:5000/risk?ticker=${name}`);
           

            response.json().then(function(data) {
              // 'data' contains the parsed JSON data from the response body
              console.log(data);
            
             const dt = {
               "Historical" : data.Historical,
              "beta" : data.beta,
              "pE" : data.pE,
              "pb" : data.pb,
              "div" : data.div
             }
             setRiskVal(dt);
             console.log(riskVal);

              
            });

            
            
            

      


      }


      async function senfetch(){    
        const response = await  fetch(`http://127.0.0.1:5000/sen?ticker=${name}`);
       

        response.json().then(function(data) {
          // 'data' contains the parsed JSON data from the response body
          console.log(data);
        
         const dt = {
           "pos" : data.positive,
          "nev" : data.negative,
          "nu" : data.neutral
         }
         setSenVal(dt);
         console.log(riskVal);

          
        });

        
        
        

  


  }

        console.log("whyyy....")
        setStockData(data);
        setStLabel(res.data.date);
        setStPrice(res.data[type]);
        



        

        console.log("whyyy....11")






          var arr= [];




        console.log("news...")
        async function fetchdata(){
            if (name){
                console.log("sending request....")
            const response =  await fetch(`https://newsapi.org/v2/everything?q=${name}&apiKey=9c8925debaa947298b96428fbba4022c&pageSize=20`).then((res)=>{return res.json()});
            
            var data = response.articles;
            for(let i =0; i < 20 ; i++){
                    arr.push([data[i].author, data[i].content,data[i].title, data[i].url]);
            }
            setStockNews(arr);
            console.log(stockNews);
    
            
        
        
        }
    
    
    
        }
    
        fetchdata();
        riskfetch();
        senfetch();















      
        });

    }
  
    
    
        return(<div>

          <div className={styles.form}>
            <select id = "selectStock" onChange={(e) => {
              const sel = document.getElementById('selectStock').value;
              setStName(sel);
            }}>
              <option >Select Stock </option>
    {data.map((da) => {
      return <option key={da.Ticker} value={da.Ticker}>{da.Name}</option>
    })}


  </select>




  <select id="stockperiod" onChange={() => {

    const per = document.getElementById('stockperiod').value;
    setPeriod(per);

  }} >
<option value="" > Select Period </option>
    <option value="max" > MAX </option>
    
    <option value="ytd" > Year to Date </option>
    <option value="10y">10 Years</option>
    
    <option value="5y" > 5 Years </option>
    
    <option value="2y" > 2 years </option>
    
    <option value="1y" > 1 Year </option>
    
    <option value="6mo" > 6 Month </option>
    
    <option value="3mo" > 3 Month </option>
    
    <option value="1mo" > 1 Month </option>

    
    <option value="5d" > 5 Days </option>

    
    <option value="1d" > 1 Day </option>

  </select>




<select onChange={(e) => {

const per = e.target.value;
setType(per);

}}>
    <option value="" > Type </option>
    <option value="close" > Close </option>
    
    <option value="open" > Open </option>
    <option value="high">High</option>
    
    <option value="low" >Low </option>
    
    <option value="volume" > Volume </option>
    
   

    </select>



  <button className={styles.button} onClick={()=>{
    stock(stName , period);
    console.log("extra");

  }} >Submit</button>

  </div>

  

<h1 className = {styles.h1}>
  <StockCharts data= {stockData}  labels = {stLabel} values = {stPrice}/>
  </h1>



<div className={styles.menu}>
  <div className={styles.news} onClick={()=>{
    
    setTrigger(true);
    setNewsTrigger("block");
  }}>News</div>
  
  <div className={styles.risk} onClick={()=>{
    
    
   setRiskTriger(true);
   setRiskDisplayTriger("block");
  }} >Risk</div>


<div className={styles.risk} onClick={()=>{
    
    
    setforecast(true);
    setforecasttrigger("block");
   }} >Forecast</div>




  <div className={styles.senti}  onClick={()=>{
    
    
    setSenTriger(true);
    setSEnDisplayTriger("block");
   }}>
    Alys
    </div>



  <div className={styles.about}><a href="https://drive.google.com/file/d/1e3zpqHB7r2lI2BoUMFKBdLEXocvfdGW4/view" rel="noreferrer" target="_blank" className={styles.a}>About</a></div>
</div>

{wall()}
{wallRisk()}
{wallSen()}
{wallFore()}






    </div>)
}

export default Stockchart;