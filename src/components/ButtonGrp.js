import React from 'react'
import { Link } from "react-router-dom";

export default function ButtonGrp() {
  return (
    <div class="bgrp">
  <Link to={'/username'}><button onClick={()=>console.log("clicked")}>Username</button></Link>
  <Link to={'/ip'}><button onClick={()=>console.log("clicked")}>Ip</button></Link>
  <Link to={'/phnumber'}><button onClick={()=>console.log("clicked")}>Phone Number</button></Link>
  <Link to={'/website'}><button onClick={()=>console.log("clicked")}>Website</button></Link>
  </div>
  )
}
