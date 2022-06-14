import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/Countdown.module.css'

interface CountdownProps {
  duration: number
  onTimeout: () => void
}

const size = 90
const center = size / 2
const strokeWidth = 8
const radius = size / 2 - strokeWidth / 2;
const circumference = 2 * Math.PI * radius;

const Countdown: React.FC<CountdownProps> = (props) => {

  const circleRef = useRef(null)
  const [remaining, setRemaining] = useState<number>(props.duration)
  const [offset, setOffset] = useState<number>(0)

  useEffect(() => {
    if (remaining > 0) {
      const countdown = setTimeout(() => setRemaining(remaining - 1), 1000)
      return () => clearTimeout(countdown)
    }
  }, [remaining])

  return (

    <svg className={styles.svg} width={size} height={size} fill='white'>
      <defs>
        <pattern id='image' patternUnits='userSpaceOnUse' height={size} width={size}>
          <g transform='rotate(90,45,45)'>
            <image x='25%' y='25%' height={size / 2} width={size / 2} xlinkHref='https://cdn-icons-png.flaticon.com/512/4611/4611554.png'></image>
          </g>
        </pattern>
      </defs>
      <g transform='rotate(-90,45,45)'>
        <circle
          className='svg-circle-bg'
          stroke='#fdfdfd'
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className='svg-circle'
          stroke='#fe1e50'
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          fill='url(#image)'
          ref={circleRef}
        />
      </g>
    </svg>
  );
}

export default Countdown