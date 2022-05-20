import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'


function Navigation() {
    const[open,setOpen] = useState(false)
    return (
        <div className="nav-container">
            <div className="nav-content">
                <h1 className="logo">CRICKINFO🏏</h1>
                <nav className="nav">
                    <Link className="lnk" to="/">LIVE</Link>
                    <Link className="lnk" to="/news">NEWS</Link>
                    <Link className="lnk" to="/ranking">RANKINGS</Link>
                    <Link className="lnk" to="/league">LEAGUES</Link>
                </nav>
                
                <div className="icons">
                    {
                        open ?<i className="fas fa-times" onClick={() => {setOpen(!open)}}></i> 
                        :
                        <i className="fas fa-bars" onClick={() => {setOpen(!open)}}></i>
                    }
                    
                </div>      
            </div> 

            {
                open &&
                <nav className="after-res">
                    <Link>LIVE</Link>
                    <Link>NEWS</Link>
                    <Link>RANKINGS</Link>
                    <Link>LEAGUES</Link>
                </nav>
            }
        </div>
    )
}

export default Navigation
