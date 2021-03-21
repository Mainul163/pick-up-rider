import React from 'react';
import { Grid } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
const Details = (props) => {
    const {name,img}=props.name;
    console.log(name);
    const style={
        border:"1px solid red ",
      
        borderRadius:"10px",
       height:"350px",
        textAlign:"center",
        boxShadow:"10px 10px 10px gray",
        paddingTop:"5px"
       
    } 
    return (
        <Grid style={style} xs={12}  sm={3}>
                <img style={{width:"300px"}} src={img} alt=""/> 
                <br/>
                <br/>
             <Link style={{textDecoration:"none"}}  className="btn btn-primary" to={`/destination/${name}`}> {name}</Link>
           </Grid>
    );
};

export default Details;