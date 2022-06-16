import React from 'react';
import styles from '../styles/Title.module.css'

interface TitleProps {
    children: string
}

const Title: React.FC<TitleProps> = (props) => {
  return (
    <h1 data-text={props.children} className={styles.title}>
        {props.children}
    </h1>
  );
}

export default Title;