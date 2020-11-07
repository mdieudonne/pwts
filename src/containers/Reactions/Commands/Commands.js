import React from 'react'
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

function Commands(props) {

  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="flex-end"
    >
      {!props.status
        ? (<Grid item xs={4}>
          <Button color="primary" fullWidth={true} variant="contained" onClick={props.handleStart}>Démarrer</Button>
        </Grid>)
        : (<Grid item xs={4}>
          <Button fullWidth={true} variant="contained"
                  onClick={props.handlePause}> {props.isPaused ? 'Reprendre' : 'Pause'}</Button>
        </Grid>)}
      <Grid item xs={4}>
        <Button color="secondary" fullWidth={true} disabled={!props.status} variant="contained"
                onClick={props.handleStop}>Stop</Button>
      </Grid>
    </Grid>
  )
}

export default Commands
