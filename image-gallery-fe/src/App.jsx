import React from 'react';
import styles from "./App.module.css";
import Gallery from './Components/Gallery/Gallery';
const App = () => {
  return (
    <div className={styles.container}>
      <Gallery />
    </div>
  );
};



export default App;
