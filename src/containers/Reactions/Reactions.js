import React from 'react'
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import SimpleSlider from "../../components/SimpleSlider/SimpleSlider";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Reactions() {

  const classes = useStyles();
  const reactions = [
    {
      name: 'tan sau',
      meaning: 'dispersing hand'
    },
    {
      name: 'gaun sau',
      meaning: 'cultivating arm'
    },
    {
      name: 'gum sau',
      meaning: 'pressing hand'
    },
    {
      name: 'kau sau',
      meaning: 'detaining hand'
    },
    {
      name: 'fook sau',
      meaning: 'controlling hand'
    },
    {
      name: 'pak sau',
      meaning: 'slapping hand'
    },
    {
      name: 'bong sau dessus',
      meaning: 'wing arm'
    },
    {
      name: 'bong sau dessous',
      meaning: 'wing arm'
    },
    {
      name: 'jam sau',
      meaning: 'sinking hand'
    },
    {
      name: 'quan sau',
      meaning: 'circling hand'
    },
  ]

  const [index, setIndex] = React.useState(0);
  const [timer, setTimer] = React.useState(2);
  const [interval, setIntervalTime] = React.useState(2);
  const [number, setNumber] = React.useState(10);
  const [status, setStatus] = React.useState(false);

  const handleStart = () => {
    setTimer(setInterval(() => {
      setIndex(index + 1)
    }, interval * 1000,))
    setStatus(true)
  }

  const handleStop = () => {
    clearInterval(timer)
    setStatus(false)
    setIndex(0)
  }

  const onChangeNumber = (value) => {
    setNumber(value)
  }

  const onChangeInterval = (value) => {
    setIntervalTime(value)
  }

  const display = status ? <p>{reactions[index].name}</p> : <p>Prêt ?</p>
  const commands = !status
    ? <Button variant="contained" onClick={handleStart}>Démarrer</Button>
    : <Button variant="contained" onClick={handleStop}>Stop</Button>

  return (
    <div className={classes.root}>
      <Grid container justify={"center"}>
        <Box className={classes.root} pl={3} pr={3}>
          <Grid item xs={12}>
            <SimpleSlider
              name={'Interval'}
              min={1}
              max={10}
              step={1}
              status={status}
              handleChange={onChangeInterval}/>
          </Grid>
          <Grid item xs={12}>
            <SimpleSlider
              name={'Répétitions'}
              min={10}
              max={100}
              step={10}
              status={status}
              handleChange={onChangeNumber}/>
          </Grid>
          <Grid item xs={12}>
            {display}
          </Grid>
          <Grid item xs={12}>
            {commands}
          </Grid>
        </Box>
      </Grid>
    </div>
  )
}

export default Reactions
