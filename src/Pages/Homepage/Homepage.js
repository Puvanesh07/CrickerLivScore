import React, { useEffect, useState } from 'react'
import CenterContent from './CenterContent'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
import './styles/Homepage.css'
import Navigation from "../../Navigation bar/Navigation"
import PropagateLoader from 'react-spinners/PropagateLoader'

function Homepage() {
    const[loading,setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },5000)
    },[1])
    return (
        <div className={loading ? "home-container cn" : "home-container"}>
            {
                loading ? 
                    <PropagateLoader color={'#F1F5F4'} loading={loading} size={16} />
                :
                <div className='home-hero'>
                    <div className="navpart">
                        <Navigation/>
                    </div>
                    <div className="parts">
                        
                        <div className="home-left">
                            <LeftContent/>
                        </div>

                        <div className="home-center">
                            <CenterContent/>
                        </div>


                        <div className="home-right">
                            <RightContent/>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Homepage
