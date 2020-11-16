import React from 'react'
import {Button, Grid} from "@material-ui/core";

function Commands(props) {

  return (
    <Grid style={{marginTop: 20}}
          container
          direction="row"
          justify="space-around"
          alignItems="stretch">
      {!props.status.isRunning
        ? (
          <Grid item xs={4}>
            <Button color="primary" fullWidth={true} variant="contained"
                    onClick={props.status.handleStart}>Démarrer</Button>
          </Grid>
        )
        : (
          <Grid item xs={4}>
            <Button fullWidth={true} variant="contained"
                    onClick={props.status.handlePause}> {props.status.isPaused ? 'Reprendre' : 'Pause'}</Button>
          </Grid>
        )
      }
      <Grid item xs={4}>
        <Button color="secondary" fullWidth={true} disabled={!props.status.isRunning} variant="contained"
                onClick={props.status.handleStop}>Stop</Button>
      </Grid>
    </Grid>
  )
}

export default Commands
