import React from "react";
import styles from "./Main.module.scss";
import { CompositeComponents } from "../../components/A-CompositeComponents/CompositeComponents";
import { ControlProps } from "../../components/B-ControlProps/ControlProps";
import { CustomHooks } from "../../components/C-CustomHooks/CustomHooks";
import { PropsGetter } from "../../components/D-PropsGetter/PropsGetter";

export const Main = () => {
  return (
    <div className={styles.root}>
      <div className={styles.paragraphBlock}>
        <CompositeComponents />
      </div>
      <div className={styles.paragraphBlock}>
        <ControlProps />
      </div>
      <div className={styles.noteBlock}>
        На самом деле, разница между двумя приведенными выше патернами -
        незначителна. Второй - немного расширяет первый. Так, второй патерн
        предусматривает объявление дополнительного состояния счетчика в
        компоненте его родительского элемента и проброса его значения с функцией
        его изменения. Это то состояние, которое может задаваться пользователем.
        Вместе с тем, в самом компоненте счетчика также предусмотрено дефолтное
        его состояние и функции его модифицирующие. В случае проброса своих
        значений - компонент становится контролируемым. В обратном случае он из
        себя представляет первый вариант.
      </div>
      <div className={styles.paragraphBlock}>
        <CustomHooks />
      </div>
      <div className={styles.paragraphBlock}>
        <PropsGetter />
      </div>
    </div>
  );
};
