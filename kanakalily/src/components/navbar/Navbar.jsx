import React, {useState} from 'react'
import styles from './Navbar.module.css'
import logo from '../../images/logo.jpg'
import {AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser} from 'react-icons/ai'


const Navbar = () => {
const [nav, setNav] = useState(false)


    return(
        <header className={styles.navbar}>
            <div className={styles.logo}>
            <img src={logo} alt="/" />

            </div>
            
            <nav>
                <ul className={nav ? [styles.menu, styles.active].join('') : styles.menu}>
                    <li>
                        <a href="/">Learn More</a>
                    </li>
                    <li>
                        <a href="/">Log In</a>
                    </li>
                    <li>
                        <a href="/">Sign Up</a>
                    </li>
                    <li>
                        <AiOutlineSearch size={25} style={{marginTop: '6px'}} />
                    </li>
                    <li>
                        <AiOutlineUser size={25} style={{marginTop: '6px'}} />
                    </li>
                </ul>
            </nav>
            <div onClick={()=> setNav(!nav)} className={styles.mobile_btn}>
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                
                

            </div>
            
        </header>
    )
}

export default Navbar