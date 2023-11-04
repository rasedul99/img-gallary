import React, { useEffect, useState } from 'react';
import styles from "./App.module.css";
import Gallary from './Components/Gallary/Gallary';
const App = () => {
  return (
    <div className={styles.container}>
      <Gallary />
    </div>
  );
};



export default App;
