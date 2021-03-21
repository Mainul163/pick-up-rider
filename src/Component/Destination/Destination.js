import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import Transport from '../../Transports/Transports.json'
import TransportDetails from '../TransportDetails/TransportDetails';
import Map from '../../picture/Map.png'
 
const Destination = () => {
    const {details}=useParams();
    const name=details;
   
    const [transport,setTransport]=useState([])
    useEffect(()=>{
        setTransport(Transport);
       
    },[])
     const transportDetails= transport.filter(trans =>{
        return trans.name === name;
     })
     const[click,setClick]=useState(false)
     const style={
         border:"1px solid red",
         borderRadius:'10px',
         boxShadow:'10px 10px 10px gray',
         backgroundColor:"#ff6500",

     }
     const inputDestination=(e)=>{
      
         if(e.target.name==='from'){

            const gather={...information}
             gather.from=e.target.value
             setInformation(gather)
         }
         if(e.target.name==='to'){

            const gather={...information}
             gather.to=e.target.value
             setInformation(gather)
         }
         
         
     }
      
     const [information,setInformation]=useState({
          getInfo:false,
         from:'',
         to:''
     }) 
     const[display,setDisplay]=useState({ })
     const displayInfo = ()=>{
         const totalInfo={...information}
         totalInfo.getinfo=true
         setDisplay(totalInfo);
     }

     
    return (
        <div className="container " style={{marginTop:"120px"}}>
              <div className='row'>
               <div className='col-md-5 col-sm-12' style={style}>
                
               <input type="text" onBlur={inputDestination} name="from" placeholder="from" id=""/><br/><br/>
                <input type="text" onBlur={inputDestination} name="to" placeholder="to" id=""/><br/><br/>
                 {
                     display.getinfo ?<h2 style={{color:"white"}}>{display.from} to  {display.to}</h2>   :<button onClick={ displayInfo } >Click hare</button>
                 }
                
               </div>

               <div className='col-md-7 col-sm-12'>

               <img src={Map} alt=""/>

               </div>
              </div>
            
            

                { display.getinfo && transportDetails.map(update =><TransportDetails transportName={update}></TransportDetails>)}
              
        
        </div>
    );
};

export default Destination;
