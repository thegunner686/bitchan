import React from "react";

import Post from "./Post";

import lobbyStorage from "../lobbystorage";

import * as firebase from "firebase";

export default class Messages extends React.Component {
  constructor() {
    super();
    this.forceUpdate = this.forceUpdate.bind(this);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    var that = this;
    firebase.database().ref("posts" + localStorage.getItem("lobbyName")).on("child_added", (data) => {
      var container = document.getElementById("messagescontainer");
      container.scrollTop = container.scrollHeight;
      var p = that.state.posts;
      console.log(data.val());
      p.push(data.val());
      that.setState({
        posts: p,
      });
    }, (error) => {
      console.log(error.code);
    });
  }

  render() {
    return (
      <div id="messagescontainer" className="MessagesContainer">
        {
          this.state.posts.map((p) => {
            return (<Post key={Math.floor(Math.random() * Math.PI * 10000000 / Math.random() * 10)} data={p} />);
          })
        }
      </div>
    );
  }
}
