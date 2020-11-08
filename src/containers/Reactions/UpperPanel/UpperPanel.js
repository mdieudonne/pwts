import React from 'react'
import Settings from "./Settings/Settings";
import Commands from "./Commands/Commands";

function UpperPanel(props) {

  return (
    <>
      <Settings settings={props.settings} status={props.status}/>
      <Commands status={props.status}/>
    </>
  )
}

export default UpperPanel
