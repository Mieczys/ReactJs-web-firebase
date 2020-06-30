import React, { Component } from 'react';
import './Styles/App.css';
import { Link, Route, Router } from 'react-router';
import Login from './Pages/Login';
import Productos from './Pages/Productos';
import Tienda from './Pages/Tienda';
import Home from './Pages/Home';
import * as firebase from 'firebase';


var firebaseConfig = {
  apiKey: "AIzaSyAscEbb0bhIsjLQV6Xgps3Tvj0qeKRksjo",
  authDomain: "reactibr-3037d.firebaseapp.com",
  databaseURL: "https://reactibr-3037d.firebaseio.com",
  projectId: "reactibr-3037d",
  storageBucket: "reactibr-3037d.appspot.com",
  messagingSenderId: "753399354640",
  appId: "1:753399354640:web:3adac03d3d280ab61a4195",
  measurementId: "G-V0T5FFWMNQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase.database());
firebase.analytics();


function App() {
  

  
  return (
    <>
    <div>
      <Route path='/' exact component={Home}></Route>
      <Route path='/login' exact component={Login}></Route>
      <Route path='/tienda' exact component={Tienda}></Route>
      <Route path='/tienda/:id' component={Productos}></Route>
      
    </div>
    </>
  );
}

export default App;
