import React from 'react'
import styles from './StyledButton.module.scss'

export const StyledButton = ({children, handleClick}) => {
  return (
    <button className={styles.root} onClick={handleClick}>{children}</button>
  )
}
