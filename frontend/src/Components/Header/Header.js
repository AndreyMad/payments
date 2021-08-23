import React from 'react'
import Navbar from '../Navbar/Navbar'
import style from './Header.module.css'

export default function Header() {
    return (
        <header className={style.container}>
            
            <Navbar></Navbar>
        </header>
    )
}
