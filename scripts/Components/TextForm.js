import React from "react";

import * as firebase from "firebase";

import * as ClientJS from "clientjs";

import lobbyStorage from "../lobbystorage";

export default class TextForm extends React.Component {
  constructor() {
    super();
    this.forceUpdate = this.forceUpdate.bind(this);
  }

  componentDidMount() {
    var that = this;
    document.addEventListener("keydown", (event) => {
      if(event.keyCode == 13) {
        that.createPost();
      }
    });
  }


  createPost() {
    var input = document.getElementById("input-content");
    if(input.value.length > 400) {
      alert("Dear God please don't do this to me.");
      input.value = "";
      return;
    }
    var post = {
      username: localStorage.getItem("username"),
      content: input.value,
    };

    firebase.database().ref("posts" + localStorage.getItem("lobbyName")).push().set({
      username: post.username,
      content: post.content,
    });

    input.value = "";
  }

  render() {
    return (
      <div className="TextFormContainer">
        <input type="text" id="input-content"/>
      </div>
    );
  }
}
