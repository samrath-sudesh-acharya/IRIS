import React, { useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'

export default function Ip() {
  const [data,setData] = useState('')
  return (
      <>
    <Navbar/>
    <div class="name">IRIS</div>
    <input type="text"id='search_bar' placeholder="IP Address"  onKeyPress={(ev) => {
        if (ev.key === "Enter") {
          ev.preventDefault();
          console.log(ev.target.value);
           axios
        .get(`https://iris-api-y2pz.onrender.com/ip=${ev.target.value}`)
        .then(data => {const obj = JSON.parse(data.data);setData(obj)})
        .catch(error => console.log(error));
        }}}/>

        <div class="data">
          <h2>Ip : {data.ip}</h2><br/>
          <h2>City : {data.city}</h2><br/>
          <h2>Region : {data.region}</h2><br/>
          <h2>Country : {data.country}</h2><br/>
          <h2>Location : {data.loc}</h2><br/> 
          <h2>Organization : {data.org}</h2><br/>
          <h2>Postal Code : {data.postal}</h2><br/>
          <h2>Time Zone : {data.timezone}</h2><br/>
        </div>
        
    </>
  )
}
