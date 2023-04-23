import React from "react";
import styles from './Main.module.scss'
import { CompositeComponents } from "../../components/A-CompositeComponents/CompositeComponents";

export const Main = () => {
  return (
    <div className={styles.root}>
      <div className={styles.compositeComponents}>
      <CompositeComponents />

      </div>
    </div>
  );
};
