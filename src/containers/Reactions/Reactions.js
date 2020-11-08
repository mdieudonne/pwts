import React, {useState} from 'react'
import '../../App.css'
import Grid from "@material-ui/core/Grid";
import UpperPanel from "./UpperPanel/UpperPanel";
import useInterval from "@use-it/interval";
import LowerPanel from "./LowerPanel/LowerPanel";

function Reactions() {

  const reactions = [
    {
      name: 'tan sao',
      left: true,
      meaning: 'dispersing hand',
      part: 'A'
    },
    {
      name: 'tan sao',
      left: false,
      meaning: 'dispersing hand',
      part: 'A'
    },
    {
      name: 'gan sao',
      left: true,
      meaning: 'cultivating arm',
      part: 'A'
    },
    {
      name: 'gan sao',
      left: false,
      meaning: 'cultivating arm',
      part: 'A'
    },
    {
      name: 'gam sao',
      left: true,
      meaning: 'pressing hand',
      part: 'A'
    },
    {
      name: 'gam sao',
      left: false,
      meaning: 'pressing hand',
      part: 'A'
    },
    {
      name: 'kao sao',
      left: true,
      meaning: 'detaining hand',
      part: 'A'
    },
    {
      name: 'kao sao',
      left: false,
      meaning: 'detaining hand',
      part: 'A'
    },
    {
      name: 'fook sao',
      left: true,
      meaning: 'controlling hand',
      part: 'A'
    },
    {
      name: 'fook sao',
      left: false,
      meaning: 'controlling hand',
      part: 'A'
    },
    {
      name: 'pak sao',
      left: true,
      meaning: 'slapping hand',
      part: 'B'
    },
    {
      name: 'pak sao',
      left: false,
      meaning: 'slapping hand',
      part: 'B'
    },
    {
      name: 'bong sao dessus',
      left: true,
      meaning: 'wing arm',
      part: 'B'
    },
    {
      name: 'bong sao dessus',
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
      name: 'bong sao dessous',
      left: false,
      meaning: 'wing arm',
      part: 'B'
    },
    {
      name: 'jam sao',
      left: true,
      meaning: 'sinking hand',
      part: 'B'
    },
    {
      name: 'jam sao',
      left: false,
      meaning: 'sinking hand',
      part: 'B'
    },
    {
      name: 'kwan sao',
      left: true,
      meaning: 'circling hand',
      part: 'B'
    },
    {
      name: 'kwan sao',
      left: false,
      meaning: 'circling hand',
      part: 'B'
    },
  ]

  const handleStart = () => {
    setStatus({...defaultStatus, isRunning: true})
    setSettings(currentSettings => ({...currentSettings, delay: currentSettings.userDelay * 1000}))
  }

  const handleStop = () => {
    setSettings(currentSettings => ({...currentSettings, delay: null}))
    setStatus({...defaultStatus})
  }

  const handlePause = () => {
    setStatus(currentStatus => ({...currentStatus, isPaused: !currentStatus.isPaused}))
  }

  const onChangeDelay = (event, newValue) => {
    setSettings(currentSettings => ({...currentSettings, userDelay: newValue}))
  }

  const onChangeMaxLoop = (event, newValue) => {
    setSettings(currentSettings => ({...currentSettings, maxLoop: newValue}))
  }

  const onChangeA = (event, newValue) => {
    setSettings(currentSettings => {
      if (!newValue && !currentSettings.partB) {
        return currentSettings
      }
      return {...currentSettings, partA: newValue}
    })
  }

  const onChangeB = (event, newValue) => {
    setSettings(currentSettings => {
      if (!newValue && !currentSettings.partA) {
        return currentSettings
      }
      return {...currentSettings, partB: newValue}
    })
  }

  const onChangeLeft = (event, newValue) => {
    setSettings(currentSettings => {
      if (!newValue && !currentSettings.right) {
        return currentSettings
      }
      return {...currentSettings, left: newValue}
    })
  }

  const onChangeRight = (event, newValue) => {
    setSettings(currentSettings => {
      if (!newValue && !currentSettings.left) {
        return currentSettings
      }
      return {...currentSettings, right: newValue}
    })
  }

  const onChangeRandom = (event, newValue) => {
    setSettings(currentSettings => ({...currentSettings, random: newValue}))
  }

  const [settings, setSettings] = useState({
    partA: true,
    partB: true,
    random: false,
    left: true,
    right: true,
    delay: null,
    userDelay: 2,
    maxLoop: 1,
    onChangeA,
    onChangeB,
    onChangeLeft,
    onChangeRight,
    onChangeRandom,
    onChangeDelay,
    onChangeMaxLoop,
  })

  const defaultStatus = {
    isRunning: false,
    isPaused: false,
    index: 0,
    count: 0,
    totalCount: 0,
    loop: 0,
    handleStart,
    handleStop,
    handlePause,
  }
  const [status, setStatus] = useState({...defaultStatus})

  useInterval(() => {
    if (status.loop === settings.maxLoop) {
      handleStop()
      return
    }
    if (settings.random) {
      const randomIndex = Math.floor(Math.random() * getReactions().length)
      if (status.count === getReactions().length - 1) {
        setStatus(currentStatus => ({...currentStatus, loop: currentStatus.loop + 1, count: 0, index: randomIndex}))
      } else {
        setStatus(currentStatus => ({
          ...currentStatus,
          index: randomIndex,
          count: currentStatus.count + 1,
          totalCount: currentStatus.totalCount + 1
        }))
      }
    } else {
      if (status.count === getReactions().length - 1) {
        setStatus(currentStatus => ({...currentStatus, loop: currentStatus.loop + 1, count: 0, index: 0}))
      }else {
        setStatus(currentStatus => ({
          ...currentStatus,
          index: currentStatus.index + 1,
          count: currentStatus.count + 1,
          totalCount: currentStatus.totalCount + 1
        }))
      }
    }

  }, status.isPaused ? null : settings.delay);

  const getReactions = () => {
    return reactions.filter(el => {
      if (settings.left && settings.right) {
        return (
          settings['part' + el.part]
        )
      } else {
        return (
          settings['part' + el.part]
          && settings.left === el.left
        )
      }
    })
  }

  return (
    <Grid className="fillHeight"
          container
          direction="row"
          justify="space-between"
          alignItems="stretch">
      <Grid item xs={12} sm={6} md={4}>
        <UpperPanel settings={settings} status={status}/>
      </Grid>
      <Grid item xs={12} sm={6} md={8}>
        <LowerPanel settings={settings} status={status} reactions={getReactions()}/>
      </Grid>
    </Grid>
  )
}

export default Reactions
