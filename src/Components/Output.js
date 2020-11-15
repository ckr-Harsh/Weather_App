import React  from 'react'
import * as Mat from '@material-ui/icons'
import HtmlTooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography'
import { IconButton } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import './style.css'
import Final from './final'

function Output(props) {
   
    return (
        <>
        <div className='first'>
            <div className='center'>
        <h2 id='header'>Weather App</h2>
            <br/>

            <TextField
                 id="standard-basic"
                 label="Enter City Name"
                 onChange={props.onChange} 
                 value={props.value}
                  />
                 <span onClick={props.onSelect}>
                 <HtmlTooltip
                      title={
                              <>
                                <Typography color="inherit">Locate</Typography>
                         <em>{"Just"}</em> <b>{'Double Click'}</b> <b>{'on this button '}</b>
                             </>
                          }> 
                          <IconButton color='secondary'> 
                      <Mat.GpsFixedTwoTone/>
                      </IconButton>
                      </HtmlTooltip>
                      </span>
           <span onClick={props.onClick}>
           <HtmlTooltip
        title={
          <>
            <Typography color="inherit">Search</Typography>
            <em>{"Type"}</em> <b>{'Something , and click this'}</b> <b>{'button'}</b>
          </>
        }>
        <IconButton color='primary'>
         <Mat.Search/> 
         </IconButton>
      </HtmlTooltip>

           </span>
         <Final temp={props.temp} Dusk={props.Dusk} Dawn={props.Dawn}
          feels={props.feels}  Desc={props.Desc} tempMax={props.tempMax}
           tempMin={props.tempMin} name={props.name} err={props.Err}/>
         </div>   
         </div>  
        </>
    )
}

export default Output
