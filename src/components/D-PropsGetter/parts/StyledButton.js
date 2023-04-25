import React from 'react'
import styles from './StyledButton.module.scss'

export const StyledButton = ({children, onClick, ...props}) => {
  return (
    <button className={styles.root} onClick={onClick}>{children}</button>
  )
}
