import React from 'react';
import styles from '../styles/Statistic.module.css'

interface StatisticProps {
    value: any
    text: string
    backgroundColor?: string
    fontColor?: string
}

const Statistic: React.FC<StatisticProps> = (props) => {

    return (
        <div className={styles.statistic}>
            <div
                className={styles.value}
                style={{
                    backgroundColor: props.backgroundColor ?? '#0073ff',
                    color: props.fontColor ?? '#fdfdfd'
                }}
            >
                {props.value}
            </div>
            <div className={styles.text}>
                {props.text}
            </div>
        </div>
    );
}

export default Statistic;