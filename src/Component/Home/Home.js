import React, { useEffect, useState } from 'react';
import Img from '../../picture/Bg.png'
import Bike from '../../picture/Frame.png'
import Bus from '../../picture/Frame-1.png'
import Car from '../../picture/Frame-2.png'
import Train from '../../picture/Group.png'
import DataInfo from '../../Data/Data.json'

import './Home.css'
import { Link } from 'react-router-dom';

import { Grid } from '@material-ui/core';
import Details from '../Details/Details';

const Home = () => {
    const sectionStyle= {
        backgroundImage: `url(${Img})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        height:'650px',
        width:'100%',
        
         
    }
    const [data,setData]=useState([])
    useEffect(()=>{
        setData(DataInfo);
        console.log(DataInfo)
    },[])
    return (
        <div style={sectionStyle}>
           
            <br/><br/><br/><br/><br/><br/>
           


<Grid container justify="center" spacing={2} alignItems="center">
            {
                data.map(d=> <Details name={d}></Details>)
            }
</Grid>
</div>
            
           
       
    );
};

export default Home;