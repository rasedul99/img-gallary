import React from 'react'
import Gallary from './Components/Gallary/Gallary'
import styles from "./App.module.css";
const App = () => {
  return (
    <div className={styles.container}>
      <Gallary />
    </div>
  )
}

export default App