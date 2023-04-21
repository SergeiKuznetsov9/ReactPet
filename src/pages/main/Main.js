import React from 'react'
import { SingleCounter } from '../../components/singleCounter/SingleCounter'
import { DoubleCounter } from '../../components/doubleCounter/DoubleCounter'
import styles from './Main.module.scss'

export const Main = () => {
  return (
    <div className={styles.root}>
      <SingleCounter />
      <DoubleCounter />
    </div>
  )
}
