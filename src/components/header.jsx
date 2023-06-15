import React  from 'react';
import styles from './Header.module.css';
import {ReactComponent as Logo } from '../logo.svg';

const Header = (props) =>{
    const val = props.user;
    

    return (<header className={styles.header}>
        <div className={styles.logoContainer}>
        <Logo className = {styles.logo}/>
        <span>Stock</span>
        </div>

        <div className={styles.userContainer}>
            <span>Hi, {val}</span>
        </div>
    </header>)
}

export default Header;