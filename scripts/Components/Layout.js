import React from "react";

import TextForm from "./TextForm";
import Messages from "./Messages";

export default class Layout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="Title">BitChan</div>
        <Messages/>
        <TextForm/>
      </div>
    );
  }
}
