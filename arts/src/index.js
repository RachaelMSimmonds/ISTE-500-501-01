import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Component } from "react";
import { Text } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from "react-router-dom";
import App from './App';
//import { DatePicker, message, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

//import React from 'react';
//import reportWebVitals from './reportWebVitals';


//
//// If you want to start measuring performance in your app, pass a function
//// to log results (for example: reportWebVitals(console.log))
//// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
