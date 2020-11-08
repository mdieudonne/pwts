import React from 'react'
import Grid from "@material-ui/core/Grid";
import SimpleSlider from "../../../../components/SimpleSlider/SimpleSlider";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

function Settings(props) {

  return (
    <Grid style={{paddingTop: 20}}
          container
          direction="row"
          justify="space-between"
          alignItems="stretch">
      <Grid item xs={12} align={"center"}>
        <SimpleSlider
          name={'Interval'}
          value={props.settings.userDelay}
          handleChange={props.settings.onChangeDelay}
          isRunning={props.status.isRunning}
          min={1}
          max={10}
          step={1}
        />
      </Grid>
      <Grid item xs={12} align={"center"}>
        <SimpleSlider
          name={'Répétitions'}
          value={props.settings.maxLoop}
          handleChange={props.settings.onChangeMaxLoop}
          isRunning={props.status.isRunning}
          min={1}
          max={10}
          step={1}
        />
      </Grid>
      <Grid
        container
        direction="row"
        align="center"
      >
        <Grid item xs={4} align={"center"}>
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
        <Grid item xs={4} align={"center"}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Directions</FormLabel>
            <FormGroup>
              <FormControlLabel
                disabled={props.status.isRunning}
                control={<Checkbox checked={props.settings.left} onChange={props.settings.onChangeLeft}
                                   name="Gauche"/>}
                label="Gauche"
              />
              <FormControlLabel
                disabled={props.status.isRunning}
                control={<Checkbox checked={props.settings.right} onChange={props.settings.onChangeRight}
                                   name="Droite"/>}
                label="Droite"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4} align={"center"}>
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
