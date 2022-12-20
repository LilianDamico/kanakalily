import React from 'react'
import styles from './Lux.module.css'
import Computador from '../../images/computador.jpg'

const Lux = () => {
  return (
    <div className={styles.lux}>
        <div className={styles.heading}>
            <h2>Top Selection</h2>
            <div className={styles.text_bg}>
                <p>
                    <span>Select from the Top Machines to roll in style!</span>
                </p>
            </div>
        </div>
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.left}>
                      <img src={Computador} alt="/" />
                      
            </div>
            <div className={styles.content}>
                <h3>Model</h3>
            </div>
        </div>
        </div>
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.left}>
                    <img src={Computador} alt="/" />
            </div>
            <div className={styles.content}>
                <h3>Model</h3>
            </div>
        </div>
        </div>
        
        
        
    </div>
    
  )
}

export default Lux