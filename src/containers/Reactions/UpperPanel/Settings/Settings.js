import React from 'react'
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid} from "@material-ui/core";
import SimpleSlider from "../../../../components/SimpleSlider/SimpleSlider";

function Settings(props) {

  return (
    <Grid style={{paddingTop: 20}}
          container
          direction="row"
          justify="space-between"
          alignItems="stretch">
      <Grid item xs={12} sm={6} md={12} align={"center"}>
        <SimpleSlider
          name={'Interval'}
          value={props.settings.userDelay}
          handleChange={props.settings.onChangeDelay}
          isRunning={props.status.isRunning}
          min={1}
          max={5}
          step={0.5}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={12} align={"center"}>
        <SimpleSlider
          name={'Répétitions'}
          value={props.settings.maxLoop}
          handleChange={props.settings.onChangeMaxLoop}
          isRunning={props.status.isRunning}
          min={1}
          max={4}
          step={1}
        />
      </Grid>
      <Grid
        container
        direction="row"
        align="center"
      >
        <Grid item xs={6} align={"center"}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Parties</FormLabel>
            <FormGroup>
              <FormControlLabel
                disabled={props.status.isRunning}
                control={<Checkbox checked={props.settings.partA} onChange={props.settings.onChangeA} name="A"/>}
                label="A"
              />
              <FormControlLabel
                disabled={props.status.isRunning}
                control={<Checkbox checked={props.settings.partB} onChange={props.settings.onChangeB} name="B"/>}
                label="B"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6} align={"center"}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Ordre</FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  disabled={props.status.isRunning}
                  checked={props.settings.random}
                  onChange={props.settings.onChangeRandom}
                  name="Aléatoire"
                  color="primary"
                />
              }
              label="Aléatoire"
            />
          </FormControl>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Settings
