import React, { useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
export default function PHNumber() {
  const [data,setData] = useState('')
  return (
    <>
    <Navbar/>
    <div class="name">IRIS</div>
    <input type="text"id='search_bar' placeholder="Phone Number"  onKeyPress={(ev) => {
        if (ev.key === "Enter") {
          ev.preventDefault();
          console.log(ev.target.value);
           axios
        .get(`https://iris-api-y2pz.onrender.com/phone_number=${ev.target.value}`)
        .then(data => {setData(data.data)})
        .catch(error => console.log(error));
        }}}/>
        <div class="data">
          <h2>{data.data}</h2>
          
        </div>
    </>
  )
}
