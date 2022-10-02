import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Username from './page/Username';
import Ip from './page/Ip';
import PHNumber from './page/PHNumber';
import Website from './page/Website';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='username' element={<Username/>}/>
      <Route path='ip' element={<Ip/>}/>
      <Route path='phnumber' element={<PHNumber/>}/>
      <Route path='website' element={<Website/>}/>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
