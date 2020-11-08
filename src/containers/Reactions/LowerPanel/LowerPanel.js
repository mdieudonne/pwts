import React from 'react'
import Grid from "@material-ui/core/Grid";
import Actions from "./Actions/Actions";
import SimpleLinearProgressWithLabel
  from "../../../components/SimpleLinearProgressWithLabel/SimpleLinearProgressWithLabel";

function LowerPanel(props) {
  let progress = 0

  if (props.status.isRunning) {
   progress = Math.round(((props.status.totalCount + 1) / (props.reactions.length * props.settings.maxLoop)) * 100)
  }

  return (
    <Grid style={{height: '100%', padding: '10px'}}
          container
          justify="space-between"
          direction="row"
          align="center"
    >
      <Grid item xs={12}>
        <SimpleLinearProgressWithLabel value={progress}/>
      </Grid>
      <Actions status={props.status} reaction={props.reactions[props.status.index]}/>
    </Grid>
  )
}

export default LowerPanel
