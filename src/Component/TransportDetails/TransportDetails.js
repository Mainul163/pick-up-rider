import React, { useState } from 'react';

const TransportDetails = (props) => {
    const{name,img,price}=props.transportName
     const[click,setClick]=useState(false)
    const style={
        marginTop:"20px" ,
        border:"1px solid red",
        borderRadius:"10px",
        boxShadow:"10px 10px 10px gray"
    }
    return (
      
              <div className='row'>
           
                <div className="col-md-5 col-sm-12" style={style}>
                <div className='row' >
                 <div className='col-md-4'>
                   <img src={img} style={{width:"100%"}} alt=""/>
                 </div>
                 <div className='col-md-4' style={{padding:"20px"}}>
                       <h2>{name}</h2>
                  </div>
                 <div className='col-md-4' style={{padding:"20px"}}>
                    <h5>Price{price}</h5>
                  </div>
                </div>
       
               </div>
               
               </div>



              
    );
};

export default TransportDetails;