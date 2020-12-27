import React, { useEffect, useState } from 'react'
import ConductorContext from '../context/conductor_context'

export default function Conductor({ children, song, beatsPerMinute }) {
  const beatsPerSecond = beatsPerMinute / 60;

  const [treble, setTreble] = useState([]);

  useEffect(() => {
    let beat = 0;
    for (const press of song) {
      const startTime = beat * beatsPerSecond * 1000;
      setTimeout(() => setTreble([press]), startTime);
      beat += press.beats;
    }
  }, [])

  return (
    <ConductorContext.Provider value={{ treble }}>
      {children}
    </ConductorContext.Provider>
  )
}
