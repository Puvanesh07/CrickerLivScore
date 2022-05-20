import React from 'react'
import "./styles/Card.css"
import moment from 'moment'
import Teamwise from '../LivePart/Teamwise'

function CardScore({live}) {
    const option = live.EpsL === "Not started" || live.EpsL === "Finished" ? true : false;

    
    return (
        <div className={option ? "card-hero orange-signal cdh" : "card-hero  green-signal"}>
            <div className="card-top">
                <div className="type">
                    <p className="EtTx">{live.EtTx} - {live.ErnInf}</p>
                    <p className="Epsl">{live.EpsL}</p>
                </div>

                <div>
                    <p>{ moment(`${live.Esd}`, "YYYYMMDD").format("MMM Do YYYY")}</p>
                </div>
            </div>

            <div className="card-center">
                <div>
                    
                    {
                        live.T1 && 
                        live.T1.map((teamwise,index) => (
                            <Teamwise key={index} teamwise={teamwise}/>
                        ))
                    }
                    {
                        live.T2&&
                        live.T2.map((teamwise,index) => (
                            <Teamwise key={index} teamwise={teamwise}/>
                        ))
                    }
                </div>
                
                <div className="card-part">
                    {
                        live.Tr1C1 && 
                        <div className="card-part-inner">
                                <p>{live.Tr1C1}/{live.Tr1CW1} ({live.Tr1CO1})</p>
                                {
                                    live.Tr1C2 && <p> & { live.Tr1C2 }/{ live.Tr1CW2 }  ({live.Tr1CO2})</p>
                                }
                        </div>
                        
                        
                    }
                    {
                        live.Tr1C1 && 
                        <div className="card-part-inner">
                                <p>{live.Tr2C1}/{live.Tr2CW1} ({live.Tr2CO1})</p>
                                {
                                    live.Tr2C2 && <p> & { live.Tr2C2 }/{ live.Tr2CW2 }  ({live.Tr2CO2})</p>
                                }
                        </div>
                        
                    }
                </div>
                
                    
            </div>

            <div className="card-end">  
                    {
                        live.ECo&&
                        <p className="result-eco">{live.ECo}</p>
                    }
            </div>
        </div>
    )
}

export default CardScore