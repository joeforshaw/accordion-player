import styles from '../styles/treble_keyboard.module.css'
import keys from '../data/12_bass_keys'
import TrebleKey from './treble_key'

export default function TrebleKeyboard() {
  return (
    <div className={styles.container}>
      {keys.map((key) => <TrebleKey key={`${key.octave}-${key.note}`} {...key}/>)}
    </div>
  );
};