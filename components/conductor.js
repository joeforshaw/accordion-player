import React, { useEffect, useState } from 'react'
import ConductorContext from '../context/conductor_context'

export default function Conductor({ children, song, beatsPerMinute }) {
  const beatsPerSecond = beatsPerMinute / 60;

  const [treble, setTreble] = useState([]);

  const schedulePresses = () => {
    // Slight pause at the start
    setTimeout(() => {
      let beat = 0;
      for (let i = 0; i < song.length; i++) {
        const press = song[i];
        const startTime = beat * beatsPerSecond * 1000;
        const isLastPress = i === (song.length - 1);
  
        // Start of note
        setTimeout(() => setTreble([press]), startTime);
  
        // End of note
        if (startTime > 0) {
          setTimeout(() => {
            setTreble([])
            if (isLastPress) { schedulePresses(); }
          }, startTime - 100);
        }
  
        beat += press.beats;
      }
    }, 1000)
  }

  useEffect(schedulePresses, [])

  return (
    <ConductorContext.Provider value={{ treble }}>
      {children}
    </ConductorContext.Provider>
  )
}
