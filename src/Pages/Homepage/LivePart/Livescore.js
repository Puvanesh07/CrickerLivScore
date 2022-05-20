import React from 'react'
import "./Styles/Livescore.css"
import flags from '../../../Flags'
import ScoreBoard from './ScoreBoard'
function Livescore({stage}) {
    return (
        <div className="hero-container">
            <div className="mttop">
                <img src={flags[`${stage.Cnm}`] || flags['Twenty20 Internationals']} className="mt-img"/>
                <div>
                    <h1 className="mt-name">{stage.Snm}</h1>
                    <p className="mt-league">{stage.Csnm}</p>
                </div>
            </div>
            
            
            {
                stage.Events.map((sta,index) => (
                    <div key={index} className="scoreboard">
                      <ScoreBoard scoredetails={sta}/>
                    </div>
                ))
                
            }
        </div>
    )
}

export default Livescore
