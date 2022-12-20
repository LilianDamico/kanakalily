import React from 'react'
import styles from './Footer.module.css'
import logo from '../../images/logo.jpg'

const footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="/" />
        </div>
          
        <button>Share</button>      
      </div>

    </div>
  )
}

export default footer