import React from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Actions from "./Actions/Actions";
import Paper from "@material-ui/core/Paper";

function LowerPanel(props) {
  return (
    <Grid style={{height: '100%', padding:'10px'}}
          container
          justify="space-between"
          direction="row"
          align="center"
    >
      <Actions status={props.status} reaction={props.reactions[props.status.index]}/>
    </Grid>
  )
}

export default LowerPanel
