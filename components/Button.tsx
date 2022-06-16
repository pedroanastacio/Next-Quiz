import Link from 'next/link';
import React from 'react';
import styles from '../styles/Button.module.css'

interface ButtonProps {
    children: string
    href?: string
    onClick?: (e: any) => void
    backgroundColor?: string
    fontColor?: string
}


const Button: React.FC<ButtonProps> = (props) => {

    const renderButton = () => (
        <button
            className={styles.button}
            onClick={props.onClick}
            style={{
                backgroundColor: props.backgroundColor ?? '#4273fe',
                color: props.fontColor ?? '#fdfdfd'
            }}
        >
            {props.children}
        </button>
    )

    return props.href ? (
        <Link href={props.href}>
            {renderButton()}
        </Link>
    ) : renderButton()
}

export default Button;