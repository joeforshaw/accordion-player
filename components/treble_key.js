import styles from '../styles/treble_key.module.css'
import classes from 'classnames'
import { useContext } from 'react';
import ConductorContext from '../context/conductor_context'

export default function TrebleKey({ octave, note }) {
  const activeKeys = useContext(ConductorContext).treble;
  
  const active = activeKeys.some((activeKey) => {
    return activeKey.octave == octave && activeKey.note == note;
  });

  const containerClasses = classes({
    [styles.container]: true,
    [styles.containerBlack]: note.includes('#')
  });

  const innerClasses = classes({
    [styles.inner]: true,
    [styles.active]: active,
    [styles.innerBlack]: note.includes('#')
  });

  return (
    <div className={containerClasses}>
      <div className={innerClasses}>
        {note}
      </div>
    </div>
  );
};