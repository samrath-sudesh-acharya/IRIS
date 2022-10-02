import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import axios from "axios";
export default function Username() {
  const [data,setData]=useState('')
  const [size,setSize]=useState(0)
  return (
    <>
    <Navbar/>
    <div class="name">IRIS</div>
    <input type="text"id='search_bar' placeholder="Username"  onKeyPress={(ev) => {
        if (ev.key === "Enter") {
          ev.preventDefault();
          console.log(ev.target.value);
           axios
        .get(`https://iris-api-y2pz.onrender.com/username=${ev.target.value}`)
        .then(data => {setData(data.data);setSize(Object.keys(data.data).length)})
        .catch(error => console.log(error));
        }}}/>
        {console.table(data)}
    </>
  )
}
