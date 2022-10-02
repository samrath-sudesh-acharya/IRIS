import {React} from 'react'
import axios from "axios";
// import { Link, Navigate } from 'react-router-dom';
// import Username from '../page/Username';
import Display_Username from '../page/Display_Username';

export default function SearchBar(props) {
    const validator = props.k
  return (
      <>
    <input type="text"id='search_bar' placeholder={props.name}  onKeyPress={(ev) => {
        if (ev.key === "Enter") {
          ev.preventDefault();
          console.log(ev.target.value);
          switch(validator){
            case 'i' : console.log("IP Address");ip_address(ev.target.value);break;
            case 'w' : console.log("Website");website(ev.target.value);break;
            case 'p' : console.log("Phone number");phone_number(ev.target.value);break;
            case 'u' : console.log("Username");username(ev.target.value);break;
            default : console.log("Error");
          }
        }}}/>
    
    </>
  )
}

function ip_address(ip){
    axios
  .get(`http://127.0.0.1:8000/ip=${ip}`)
  .then(data => {return(<div>{data.data}</div>)})
  .catch(error => console.log(error));
  };

  function phone_number(ph){
      axios
  .get(`http://127.0.0.1:8000/phone_number=${ph}`)
  .then(data => {console.log(data.data);<Display_Username/>})
  .catch(error => console.log(error));
  }

  function website(wb){
      axios
  .get(`http://127.0.0.1:8000/web_detail=${wb}`)
  .then(data => console.log(data.data))
  .catch(error => console.log(error));
  }

  function username(user){
      axios
  .get(`http://127.0.0.1:8000/username=${user}`)
  .then(data => {console.log(data.data);})
  .catch(error => console.log(error));

  }
