import React, { useState } from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab';
import * as Mat from '@material-ui/icons'
import './style.css'
import cloudy from'../imgs/cloudy.jpg'
import  hazy from '../imgs/hazy.jpg'
import sunny from '../imgs/sunny.jpg'
import  rainy from '../imgs/rain.jpg'
import  night from '../imgs/night.jpg'
import  noon from '../imgs/noon.jpg'
import  sunrise from '../imgs/sunrise.jpg'
import  sunset from '../imgs/sunset.jpg'


function Final(props) {
    const [temp,settemp]=useState(props.temp);
    const [feels,setfeels]=useState(props.feels);
    const [tempMax,settempMax]=useState(props.tempMax);
    const [tempMin,settempMin] =useState(props.tempMin);
    const [sign,setSign]= useState('ºC');
    const [style,setStyle]=useState(true);
    const [data,setdata]=useState(false);
    
    
        let bg=''; 
        const time = new Date().getHours();
        console.log(time);
        if( time>=9 && time<=14){
            bg = sunny;
        }else if(time>=6 && time<=7 ){
            bg = sunrise;
        }else if(time>=17 && time<=18){
            bg = sunset;
        }else if(time>=11 && time<=12){
            bg = noon;
        }else if( time>=20 && time<=4){
            bg = night;
        }else{
            bg = hazy;
        }
    
   
    const Show = ()=>{ (data===true)?setdata(false):setdata(true)}

   
    const fer = ()=>{
     settemp( Math.floor((props.temp)*9/5 +32)  );
     setfeels( Math.floor((props.feels)*9/5 +32) );
     settempMax( Math.floor((props.tempMax)*9/5 +32) );
     settempMin( Math.floor((props.tempMin)*9/5 +32) );
     setSign('ºF');
     setStyle(false);
    
    
    }
    const cel  = ()=>{
        settemp(props.temp);
        settempMin(props.tempMin);
        setfeels(props.feels);
        settempMax(props.tempMin);
        setSign('ºC');
        setStyle(false);
       
    }   

    return (
        <>
               <div className='data'style={{backgroundImage:`url(${bg})`}}>
                   <span id='btn'>
                    <ButtonGroup color="sucess" aria-label="outlined primary button group">
                        <Button onClick={cel}>&deg; C</Button>
                        <Button onClick={fer}>&deg; F</Button>
                    </ButtonGroup>
                   </span>
              <h2 id='err'>{props.err}</h2>
              <div className='fdata' style={{visibility:style?'hidden':'visible'}}>
              <h2 id='name'>{props.name}</h2>
              <h2> {temp}{sign} </h2>
              <h3 id='desc'>{props.Desc} {tempMax}/{tempMin}{sign}</h3>
              <h3 id='feels'>Feels Like {feels}{sign} </h3>
              <h3 id='sunrise'>SunRise :{props.Dawn}</h3>
              <h3 id='sunset'>SunSet : {props.Dusk}</h3>
              </div>
              <div className='warn'style={{visibility:data?'hidden':'visible'}}>
                  <h3>Instructions:</h3>
                  <ul>
                      <li>Enter the Name of the City or click Locate twice.</li>
                      <li>*Select your preferred Unit.(Celsius/Fahrenheit)</li>
                      <li>If u don't choose the Unit, your data won't be displayed</li>
                  </ul>
              </div>
              <div className='help'>
                <Fab color="primary" aria-label="add" onClick={Show}>
                    <Mat.HelpOutline/>
                </Fab>
              </div>
            </div>
        </>
    )
}

export default Final
