import React, {useState } from 'react'
import Axios from 'axios'
import Output from './Output'

function Weather() {
    const [loc,setLoc] = useState();
    const [ x,setx]= useState();
    const [Err, setErr]= useState();
    const [ temp,setTemp]= useState();
    const [feels, setfeels] = useState();
    const [Dawn, setDawn] = useState();
    const [Dusk, setDusk] = useState();
    const [Desc,setDesc] = useState();
    const [lon, setlon] = useState();
    const [lat, setlat] = useState();
    const [Name, setName] = useState();
    const [tempMin, settempMin] = useState();
    const [tempMax, settempMax] = useState();


    const Place = (e)=>{
        setLoc(e.target.value);
    }
    const Fetch= ()=>{
        setx(loc);
        Fetchdata();
        console.log(loc);
        setLoc('');
    }
   
    const Live = async()=>{
       navigator.geolocation.getCurrentPosition(post=>{
            setlat(post.coords.latitude);
            setlon(post.coords.longitude);
            console.log(post.coords.latitude);
            console.log(post.coords.longitude);
       })
     
        let result = await Axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${api}`)
          .catch( (e)=>{
                  setErr('Try Again');
                  throw e;
          });
          console.log(result.data);
          setTemp((Math.floor(result.data.main.temp)-273));
          setfeels(Math.floor(result.data.main.feels_like)-273);
          let sunrise = new Date(result.data.sys.sunrise *1000).toLocaleTimeString();
          setDawn(sunrise);
          let sunset = new Date(result.data.sys.sunset *1000).toLocaleTimeString();
          setDusk(sunset);
          setErr('');
          setName(result.data.name);
          setDesc(result.data.weather[0].main);
          settempMax(Math.floor(result.data.main.temp_max)-273);
          settempMin(Math.floor(result.data.main.temp_min)-273);
            
     }
    const Fetchdata= async ()=>{
        let result = await Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${loc}&APPID=${api}`)
          .catch( (e)=>{
                  setErr('Try Again');
                  throw e;
          });
       
                 console.log(result.data);
                    setTemp((Math.floor(result.data.main.temp)-273));
                    setfeels(Math.floor(result.data.main.feels_like)-273);
                    let sunrise = new Date(result.data.sys.sunrise *1000).toLocaleTimeString();
                    setDawn(sunrise);
                    let sunset = new Date(result.data.sys.sunset *1000).toLocaleTimeString();
                    setDusk(sunset);
                    setErr('');
                    setName(result.data.name);
                    setDesc(result.data.weather[0].main);
                    settempMax(Math.floor(result.data.main.temp_max)-273);
                    settempMin(Math.floor(result.data.main.temp_min)-273);
    }
    return (
        <>
        <Output Dusk={Dusk} Dawn={Dawn} feels={feels} temp={temp} Desc={Desc} 
              name={Name}  onChange={Place} onClick={Fetch} value={loc} Err={Err}
               onSelect={Live} tempMax={tempMax} tempMin={tempMin}/>          
        </>
    )
}

export default Weather
