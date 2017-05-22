import React from "react";

import lobbyStorage from "../lobbystorage";

export default class LobbyManager extends React.Component {
  constructor() {
    super();
    this.connectToLobby = this.connectToLobby.bind(this);
  }

  connectToLobby() {
    var name = document.getElementById("lobby").value;
    lobbyStorage.emit("lobbyName", name);
  }
  render() {
    return (
      <div className="lobbyManager">
          <label> Find a Lobby </label> <input id="lobby" type="text"/> <input onClick={this.connectToLobby} value="LobbyTime" type="button"/>
          <br></br>
          If it doesnt exist, one will be created when you look it up :)
      </div>
    );
  }
}
