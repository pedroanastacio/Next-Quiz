import React from 'react';
import styles from '../styles/Wording.module.css'

interface WordingProps {
    text: string
}

const Wording: React.FC<WordingProps> = (props) => {
  
  return (
      <div className={styles.wording}>
          <span className={styles.text}>
              {props.text}
          </span>
      </div>
  );
}

export default Wording;