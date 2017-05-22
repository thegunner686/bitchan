import React from "react";
import ReactDOM from "react-dom";

import Layout from "./Components/Layout";

import lobbyStorage from "./lobbystorage";

import * as firebase from "firebase";

var config = {
  apiKey: "AIzaSyB_IwN53nMmRz_u8UXln21tnjN2-0m37K0",
  authDomain: "bitchan-ef79c.firebaseapp.com",
  databaseURL: "https://bitchan-ef79c.firebaseio.com",
  projectId: "bitchan-ef79c",
  storageBucket: "bitchan-ef79c.appspot.com",
  messagingSenderId: "282097673754"
};
firebase.initializeApp(config);

var user = localStorage.getItem("username");
if(user == null) {
  do {
    user = prompt("Enter a Username less than 30 characters.");
  } while(user == null || user.length > 30);
  localStorage.setItem("username", user);
}

var app = document.getElementById("app");

ReactDOM.render(<Layout/>, app);
