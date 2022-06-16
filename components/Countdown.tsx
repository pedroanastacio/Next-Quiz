import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/Countdown.module.css'

interface CountdownProps {
  key: any
  duration: number
  onTimeout: () => void
}

const size = 90
const center = size / 2
const strokeWidth = 10
const radius = size / 2 - strokeWidth / 2;
const circumference = 2 * Math.PI * radius;

const Countdown: React.FC<CountdownProps> = (props) => {

  const circleRef = useRef(null)
  const [remaining, setRemaining] = useState<number>(props.duration)

  useEffect(() => {
    if (remaining > 0) {
      const countdown = setTimeout(() => setRemaining(remaining - 1), 1000)
      return () => clearTimeout(countdown)
    } else {
      props.onTimeout()
    }
  }, [remaining, props])

  return (
    <svg className={styles.svg} width={size} height={size}>
      <defs>
        <pattern id='p-image' patternUnits='userSpaceOnUse' height={size} width={size}>
          <g className={styles['image-container']}>
            <image
              x='25%'
              y='25%'
              height={size / 2}
              width={size / 2}
              xlinkHref='https://cdn-icons-png.flaticon.com/512/4611/4611554.png'
              className={styles.image}
            />
          </g>
        </pattern>
      </defs>
      <g className={styles['circles-container']}>
        <circle
          stroke='#2f315a'
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className={styles['svg-remaining-circle']}
          stroke='#fe1e50'
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={(circumference / props.duration) * remaining}
          fill='url(#p-image)'
          ref={circleRef}
        />
      </g>
    </svg>
  );
}

export default Countdown