import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../styles/nav.module.css'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <h1><Link to="/">Tyler E. Photography</Link></h1>
            {/* <div className="menu">
                <ul>
                    <li><Link to="/landscapes">Landscapes</Link></li>
                    <li><Link to="/wildlife">Wildlife</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div> */}
        
        </nav>
    )
}
