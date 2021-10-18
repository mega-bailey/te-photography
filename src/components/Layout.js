import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({children}) {
    return (
        <div>
            <Navbar/>
            <div className="content">
                {children}
            </div>
            <footer>
                <p class="text-right">Copyright 2021 Tyler E Photography</p>
            </footer>
        </div>
    )
}
