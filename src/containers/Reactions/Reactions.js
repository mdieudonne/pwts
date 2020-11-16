import React, {useEffect, useState} from 'react'
import '../../App.css'
import {Grid} from "@material-ui/core";
import UpperPanel from "./UpperPanel/UpperPanel";
import LowerPanel from "./LowerPanel/LowerPanel";
import useInterval from "@use-it/interval";

import reactions from '../../models/reactions'

function Reactions() {
  // componentDidMount
  useEffect(() => {
    document.title = 'PWTSRA Training App - Réactions de bases des mains'
    document.getElementsByTagName("meta")["title"].content = 'Programme d\'entraînement aux réactions de bases des mains';
    document.getElementsByTagName("meta")["description"].content = 'Programme d\'entraînement chronométré aux réactions de base des mains du Kung Fu Wing Tsun';
  }, []);

  const handleStart = () => {
    setStatus(currentStatus => ({...currentStatus, isRunning: true}))
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

  const onChangeRandom = (event, newValue) => {
    setSettings(currentSettings => ({...currentSettings, random: newValue}))
  }

  const getFilteredReactions = () => {
    return reactions.filter(el => settings['part' + el.part])
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

  const [availableNumbers, setAvailableNumbers] = useState(getFilteredReactions().map(reaction => reaction.number))

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

  useInterval(() => {
    setTick(tick + 1)
  }, status.isPaused && status.isRunning ? null : settings.delay);

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
