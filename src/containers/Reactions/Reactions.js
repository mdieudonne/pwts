import React, {useEffect, useState} from 'react'
import '../../App.css'
import Grid from "@material-ui/core/Grid";
import UpperPanel from "./UpperPanel/UpperPanel";
import useInterval from "@use-it/interval";
import LowerPanel from "./LowerPanel/LowerPanel";

function Reactions() {
  // componentDidMount
  useEffect(() => {
    document.title = 'PWTSRA Training App - Réactions de bases des mains'
    document.getElementsByTagName("meta")["title"].content = 'Programme d\'entraînement aux réactions de bases des mains';
    document.getElementsByTagName("meta")["description"].content = 'Programme d\'entraînement chronométré aux réactions de base des mains du Kung Fu Wing Tsun';
  }, []);

  const reactions = [
    {
      number: 1,
      name: 'tan sao',
      left: true,
      meaning: 'dispersing hand',
      part: 'A',
    },
    {
      number: 2,
      name: 'tan sao',
      left: false,
      meaning: 'dispersing hand',
      part: 'A',
    },
    {
      number: 3,
      name: 'gan sao',
      left: true,
      meaning: 'cultivating arm',
      part: 'A',
    },
    {
      number: 4,
      name: 'gan sao',
      left: false,
      meaning: 'cultivating arm',
      part: 'A',
    },
    {
      number: 5,
      name: 'gam sao',
      left: true,
      meaning: 'pressing hand',
      part: 'A',
    },
    {
      number: 6,
      name: 'gam sao',
      left: false,
      meaning: 'pressing hand',
      part: 'A',
    },
    {
      number: 7,
      name: 'kao sao',
      left: true,
      meaning: 'detaining hand',
      part: 'A',
    },
    {
      number: 8,
      name: 'kao sao',
      left: false,
      meaning: 'detaining hand',
      part: 'A',
    },
    {
      number: 9,
      name: 'fook sao',
      left: true,
      meaning: 'controlling hand',
      part: 'A',
    },
    {
      number: 10,
      name: 'fook sao',
      left: false,
      meaning: 'controlling hand',
      part: 'A',
    },
    {
      number: 11,
      name: 'pak sao',
      left: true,
      meaning: 'slapping hand',
      part: 'B',
    },
    {
      number: 12,
      name: 'pak sao',
      left: false,
      meaning: 'slapping hand',
      part: 'B',
    },
    {
      number: 13,
      name: 'bong sao dessus',
      left: true,
      meaning: 'wing arm',
      part: 'B',
    },
    {
      number: 14,
      name: 'bong sao dessus',
      left: false,
      meaning: 'wing arm',
      part: 'B',
    },
    {
      number: 15,
      name: 'bong sao dessous',
      left: true,
      meaning: 'wing arm',
      part: 'B',
    },
    {
      number: 16,
      name: 'bong sao dessous',
      left: false,
      meaning: 'wing arm',
      part: 'B',
    },
    {
      number: 17,
      name: 'jam sao',
      left: true,
      meaning: 'sinking hand',
      part: 'B',
    },
    {
      number: 18,
      name: 'jam sao',
      left: false,
      meaning: 'sinking hand',
      part: 'B',
    },
    {
      number: 19,
      name: 'kwan sao',
      left: true,
      meaning: 'circling hand',
      part: 'B',
    },
    {
      number: 20,
      name: 'kwan sao',
      left: false,
      meaning: 'circling hand',
      part: 'B',
    },
  ]

  const handleStart = () => {
    setStatus(currentStatus => ({...currentStatus, isRunning: true}))
    setSettings(currentSettings => ({...currentSettings, delay: currentSettings.userDelay * 1000}))
  }

  const handleStop = () => {
    setSettings(currentSettings => ({...currentSettings, delay: null}))
    setStatus(currentStatus => ({...defaultStatus, number: availableNumbers[0]}))
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

  const onChangeRandom = (event, newValue) => {
    setSettings(currentSettings => ({...currentSettings, random: newValue}))
  }

  const [settings, setSettings] = useState({
    partA: true,
    partB: true,
    random: false,
    delay: null,
    userDelay: 2,
    maxLoop: 1,
    onChangeA,
    onChangeB,
    onChangeRandom,
    onChangeDelay,
    onChangeMaxLoop,
  })

  const getFilteredReactions = () => {
    return reactions.filter(el => settings['part' + el.part])
  }
  const defaultStatus = {
    isRunning: false,
    isPaused: false,
    index: 0,
    number: 1,
    count: 0,
    totalCount: 0,
    loop: 0,
    handleStart,
    handleStop,
    handlePause,
  }
  const [status, setStatus] = useState({...defaultStatus})

  const [tick, setTick] = useState(0)

  useEffect(() => {
    if (status.isRunning) {
      const newAvailableNumbers = [...availableNumbers]
      const indexAvailableNumbers = newAvailableNumbers.findIndex(el => el === status.number)
      newAvailableNumbers.splice(indexAvailableNumbers, 1)
      setAvailableNumbers(newAvailableNumbers)

      if (settings.random) {
        if (!newAvailableNumbers.length) {
          if (status.loop + 1 === settings.maxLoop) {
            handleStop()
          } else {
            setStatus(currentStatus => ({...currentStatus, count: 0, loop: currentStatus.loop + 1}))
          }
        } else {
          setStatus(currentStatus => {
            let nextNumber = newAvailableNumbers[0]

            if (Math.abs(newAvailableNumbers.number % 2) === 1) {
              nextNumber = Math.floor(Math.random() * availableNumbers.length / 2) * 2
            }
            return {
              ...currentStatus,
              count: currentStatus.count + 1,
              totalCount: currentStatus.totalCount + 1,
              number: nextNumber
            }
          })
        }
      } else {
        if (!newAvailableNumbers.length) {
          if (status.loop + 1 === settings.maxLoop) {
            handleStop()
          } else {
            setStatus(currentStatus => ({...currentStatus, count: 0, loop: currentStatus.loop + 1}))
          }
        } else {
          setStatus(currentStatus => ({
              ...currentStatus,
              index: reactions.findIndex(el => el.number === newAvailableNumbers[0]),
              count: currentStatus.count + 1,
              totalCount: currentStatus.totalCount + 1,
              number: newAvailableNumbers[0]
            })
          )
        }
      }
    }
  }, [tick]);

  useEffect(() => {
    if (settings.random) {
      resetAvailableNumberRandom()
    } else {
      resetAvailableNumber()
    }
  }, [settings, status.loop]);

  const [availableNumbers, setAvailableNumbers] = useState(getFilteredReactions().map(reaction => reaction.number))

  const resetAvailableNumber = () => {
    const newAvailableNumbers = getFilteredReactions().map(reaction => reaction.number)
    setAvailableNumbers(newAvailableNumbers)
    setStatus(currentStatus => ({...currentStatus, number: newAvailableNumbers[0]}))
  }

  const resetAvailableNumberRandom = () => {
    let availableNumbers = getFilteredReactions().map(reaction => reaction.number)
    let availableNumbersRandom = []
    let i = 0
    availableNumbers.forEach((el, index) => {
      if (index % 2 === 0) {
        availableNumbersRandom.push([el])
        i++
      } else {
        availableNumbersRandom[i - 1].push(el)
      }
    })
    availableNumbersRandom.sort(() => Math.random() - 0.5);
    availableNumbersRandom = availableNumbersRandom.flat()
    setAvailableNumbers(availableNumbersRandom)
    setStatus(currentStatus => ({...currentStatus, number: availableNumbersRandom[0]}))
  }

  useInterval(() => {
    setTick(tick + 1)
  }, status.isPaused && status.isRunning ? null : settings.delay);

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
        <LowerPanel settings={settings} status={status} reactions={getFilteredReactions()}/>
      </Grid>
    </Grid>
  )
}

export default Reactions
