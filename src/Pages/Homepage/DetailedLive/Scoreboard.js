import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CardScore from './CardScore'
import Commentary from './Commentary'
import FOW from './FOW'
import Overwise from './Overwise'

import PlayerWiseScore from './PlayerWiseScore';
import ScoreboardNav from './ScoreboardNav';
import "./styles/Scoreboard.css"
function Scoreboard({live,params}) {
    const condition = live.EpsL === "Not started" ? false : true;
    const[option,setOption] = useState("Scoreboard");
    return (
        <div>
                <div className="scoreboard-hero">
                        <div className="score-nav">
                            <nav className="scoreboard-nav">
                                <button className="links" onClick={() => 
                                {
                                    setOption("Scoreboard")
                                }}>Scoreboard</button>


                                <button className="links" onClick={() => 
                                {
                                    setOption("FOW")
                                }}>FOW</button>

                                <button className="links"  onClick={() => 
                                {
                                    setOption("Commentary")
                                }}>Commentary</button>


                            </nav>
                        </div>

                       { 
                            option === "Scoreboard" &&
                        <div>
                            <div className="score-top-card">
                                <CardScore live={live}/>
                            </div>

                            {
                                (condition && live.Prns) &&
                                <div>
                                    <PlayerWiseScore live={live} players={live.Prns}/>
                                </div>
                            }

                        </div>
                        
                        }


                        {
                            option === "FOW" && 
                            (condition && live) && <FOW live={live.SDInn} players={live.Prns}/>
                        }

                        {
                            option === "Commentary" && 
                            (condition && live) &&
                            <Commentary live={live.SDInn} players={live.Prns}/>
                        }
                </div>
        </div>
        
    )
}

export default Scoreboard
