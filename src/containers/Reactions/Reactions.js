import React, {useEffect, useState} from 'react'
import Grid from "@material-ui/core/Grid";
import SimpleSlider from "../../components/SimpleSlider/SimpleSlider";
import useInterval from "@use-it/interval";
import Actions from './Actions/Actions'
import {Typography} from "@material-ui/core";
import Commands from "./Commands/Commands";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";

function Reactions() {
  useEffect(() => {
      setHeight(getHeight())
    }
  )
  const getHeight = () => window.innerHeight - 64 - 56 - 20 - 50

  const [height, setHeight] = useState(getHeight());
  console.log(height)

  const reactions = [
    {
      name: 'tan sao',
      left: false,
      meaning: 'dispersing hand',
      part: 'A'
    },
    {
      name: 'tan sao',
      left: true,
      meaning: 'dispersing hand',
      part: 'A'
    },
    {
      name: 'gan sao',
      left: false,
      meaning: 'cultivating arm',
      part: 'A'
    },
    {
      name: 'gan sao',
      left: true,
      meaning: 'cultivating arm',
      part: 'A'
    },
    {
      name: 'gam sao',
      left: false,
      meaning: 'pressing hand',
      part: 'A'
    },
    {
      name: 'gam sao',
      left: true,
      meaning: 'pressing hand',
      part: 'A'
    },
    {
      name: 'kao sao',
      left: false,
      meaning: 'detaining hand',
      part: 'A'
    },
    {
      name: 'kao sao',
      left: true,
      meaning: 'detaining hand',
      part: 'A'
    },
    {
      name: 'fook sao',
      left: false,
      meaning: 'controlling hand',
      part: 'A'
    },
    {
      name: 'fook sao',
      left: true,
      meaning: 'controlling hand',
      part: 'A'
    },
    {
      name: 'pak sao',
      left: false,
      meaning: 'slapping hand',
      part: 'B'
    },
    {
      name: 'pak sao',
      left: true,
      meaning: 'slapping hand',
      part: 'B'
    },
    {
      name: 'bong sao dessus',
      left: false,
      meaning: 'wing arm',
      part: 'B'
    },
    {
      name: 'bong sao dessus',
      left: true,
      meaning: 'wing arm',
      part: 'B'
    },
    {
      name: 'bong sao dessous',
      left: false,
      meaning: 'wing arm',
      part: 'B'
    },
    {
      name: 'bong sao dessous',
      left: true,
      meaning: 'wing arm',
      part: 'B'
    },
    {
      name: 'jam sao',
      left: false,
      meaning: 'sinking hand',
      part: 'B'
    },
    {
      name: 'jam sao',
      left: true,
      meaning: 'sinking hand',
      part: 'B'
    },
    {
      name: 'kwan sao',
      left: false,
      meaning: 'circling hand',
      part: 'B'
    },
    {
      name: 'kwan sao',
      left: true,
      meaning: 'circling hand',
      part: 'B'
    },
  ]

  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [maxLoop, setMaxLoop] = React.useState(1);
  const [loop, setLoop] = React.useState(0);
  const [userDelay, setUserDelay] = React.useState(3)
  const [delay, setDelay] = React.useState(null);
  const [status, setStatus] = React.useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [random, setRandom] = React.useState(false);
  const [partA, setPartA] = React.useState(true);
  const [partB, setPartB] = React.useState(true);

  useInterval(() => {
    if (loop === maxLoop) {
      handleStop()
    }

    if (count === getReactions().length - 1) {
      setLoop(currentLoop => currentLoop + 1)
      setCount(0)
    }

    if (random) {
      setIndex(Math.floor(Math.random() * getReactions().length))
    } else {
      setIndex(currentIndex => currentIndex + 1);
    }
    setCount(currentCount => currentCount + 1)
  }, isPaused ? null : delay);

  const handleStart = () => {
    setStatus(true)
    setIsPaused(false)
    setDelay(userDelay * 1000)
  }

  const handleStop = () => {
    setStatus(false)
    setDelay(null)
    setCount(0)
    setIndex(0)
    setLoop(0)
  }

  const handlePause = () => {
    setIsPaused(currentIsPaused => !currentIsPaused)
  }

  const onChangeDelay = (event, newValue) => {
    setUserDelay(newValue)
  }

  const onChangeMaxLoop = (event, newValue) => {
    setMaxLoop(newValue)
  }

  const onChangeA = (event, newValue) => {
    setPartA(newValue)
  }
  const onChangeB = (event, newValue) => {
    setPartB(newValue)
  }
  const onChangeRandom = (event, newValue) => {
    setRandom(newValue)
  }

  const getReactions = () => {
    return reactions.filter(el => eval('part' + el.part))
  }

  return (
    <Grid style={{height}}
          container
          direction="column"
          justify="space-between"
          alignItems="stretch">
      <Box align="center">
        <SimpleSlider
          value={userDelay}
          name={'Interval'}
          min={1}
          max={10}
          step={1}
          status={status}
          handleChange={onChangeDelay}/>
      </Box>
      <Box align="center">
        <SimpleSlider
          value={maxLoop}
          name={'Répétitions'}
          min={1}
          max={10}
          step={1}
          status={status}
          handleChange={onChangeMaxLoop}/>
      </Box>
      <Grid
        container
        direction="row"
        align="center"
      >
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Parties</FormLabel>
            <FormGroup>
              <FormControlLabel
                disabled={status}
                control={<Checkbox checked={partA} onChange={onChangeA} name="A"/>}
                label="A"
              />
              <FormControlLabel
                disabled={status}
                control={<Checkbox checked={partB} onChange={onChangeB} name="B"/>}
                label="B"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Ordre</FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  disabled={status}
                  checked={random}
                  onChange={onChangeRandom}
                  name="Aléatoire"
                  color="primary"
                />
              }
              label="Aléatoire"
            />
          </FormControl>
        </Grid>
      </Grid>
      {!status
        ? <Typography variant="h5" component="h2" align="center">Prêt ?</Typography>
        : <Typography variant="h5" component="h2" align="center">GO !</Typography>
      }
      <Actions status={status} reaction={getReactions()[index]}/>
      <Commands status={status} isPaused={isPaused} handleStart={handleStart} handleStop={handleStop}
                handlePause={handlePause}/>
    </Grid>
  )
}

export default Reactions
