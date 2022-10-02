import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
export default function Website() {
  return (
    <>
    <Navbar/>
    <div class="name">IRIS</div>
    <SearchBar name="Website Url" k="w"/>
    </>
  )
}
