import React from "react";

import TextForm from "./TextForm";
import Messages from "./Messages";
import LobbyManager from "./LobbyManager";
import * as lobbyStorage from "../lobbystorage";

export default class Layout extends React.Component {
  constructor() {
    super();
    var name = localStorage.getItem("lobbyName");
    this.state = {
      lobby: (<div><Messages lobbyName={name}/>
              <TextForm lobbyName={name}/></div>),
    }
    this.changeLobby = this.changeLobby.bind(this);
  }

  componentDidMount() {
    lobbyStorage.subscribe("lobbyName", this.changeLobby);
  }

  changeLobby() {
    console.log(name);
    location.reload();
  }

  render() {
    return (
      <div>
        <div className="Title">BitChan <LobbyManager/></div>
          {this.state.lobby}
      </div>
    );
  }
}
