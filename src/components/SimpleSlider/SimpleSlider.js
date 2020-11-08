import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
});

export default function DiscreteSlider(props) {
  const classes = useStyles();

  return (
    <Box className={classes.root} pl={3} pr={3}>
      <Typography id="discrete-slider-small-steps" gutterBottom>
        {props.name}
      </Typography>
      <Slider
        disabled={props.isRunning}
        value={props.value}
        aria-labelledby={props.name}
        onChange={props.handleChange}
        min={props.min}
        max={props.max}
        step={props.step}
        defaultValue={props.min}
        marks
        valueLabelDisplay="on"
      />
    </Box>
  );
}
