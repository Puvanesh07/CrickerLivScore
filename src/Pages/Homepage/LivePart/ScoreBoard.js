import React from 'react'
import "./Styles/ScoreBoard.css"
import moment from 'moment'
import Teamwise from './Teamwise'
import {Link} from "react-router-dom"


function ScoreBoard({scoredetails}) {
    const option = scoredetails.EpsL === "Not started" || scoredetails.EpsL === "Finished" ? true : false;

    return (
    <div  className={option ? "score-hero orange-signal" : "score-hero green-signal"}>
            <Link className="remove-link" to={`/detaillive/${scoredetails.Eid}`}>
            <div className="score-top">
                <div className="type">
                    <p className="EtTx">{scoredetails.EtTx} - {scoredetails.ErnInf}</p>
                    <p className="Epsl">{scoredetails.EpsL}</p>
                </div>
                <div>
                    <p>{moment(`${scoredetails.Esd}`, "YYYYMMDD").format("MMM Do YYYY")}</p>
                </div>
            </div>
            
            <div className="score-centre">
                <div>
                    {
                        //Team 1
                        scoredetails.T1.map((teamwise,index) => (
                            <Teamwise key={index} teamwise={teamwise}/>
                        ))
                        
                    }
                    {
                        //Team 1
                        scoredetails.T2.map((teamwise,index) => (
                            <Teamwise key={index} teamwise={teamwise}/>
                        ))
                        
                    }
                </div>
                <div className="score-part">
                    {
                        scoredetails.Tr1C1 && 
                        <div className="score-part-inner">
                                <p>{scoredetails.Tr1C1}/{scoredetails.Tr1CW1} ({scoredetails.Tr1CO1})</p>
                                {
                                    scoredetails.Tr2C2 && <p> & { scoredetails.Tr2C2 }/{ scoredetails.Tr2CW2 }  ({scoredetails.Tr2CO2})</p>
                                }
                        </div>
                        
                    }
                    {
                        scoredetails.Tr2C1 && 
                        <div className="score-part-inner">
                                <p>{scoredetails.Tr2C1}/{scoredetails.Tr2CW1} ({scoredetails.Tr2CO1})</p>
                                {
                                    scoredetails.Tr2C2 && <p> & { scoredetails.Tr2C2 }/{scoredetails.Tr2CW2 } ({scoredetails.Tr2CO2})</p>
                                }
                        </div>
                       
                        
                    }
                </div>
            </div>

            <div className="score-end">
                {
                    scoredetails.ECo && <p className="result-eco">{scoredetails.ECo}</p>
                }
            </div>
            </Link>
        </div>
    )
}

export default ScoreBoard
