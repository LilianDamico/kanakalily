import React from 'react'
import styles from './Driver.module.css'
import Computador from '../../images/computador.jpg'

const Driver = () => {
  return (
    <div className={styles.driver}>
        <div className={styles.left}>
            <img src={Computador} alt="/" />
        </div>
        <div>
            <h2>Consulte a arquitetura que <span> melhor se ajusta ao seu estilo!</span> </h2>
              <p>Projetos, Design ou simplesmente jogos!</p>
              <p>Oferecemos arquitetura de hardware que combina com tudo!</p>
            <button>Pesquise!</button>

        </div>

    </div>
  )
}

export default Driver