import React from 'react'
import "./styles/Info.css"
import moment  from 'moment'
import TossFind from './TossFind'
function Info({live}) {
    return (
        <div className="info">
            <p className="top-info">Match Info</p>

            {
                live.Stg && 
                <div className="info-table">
                <div>
                    <p className="ti">Event</p>
                    <p className="tt">{live.Stg.Sdn}-{live.Stg.Csnm}</p>
                </div>
                
                <div>
                    <p className="ti">This Match</p>
                    <p className="tt">{live.ErnInf}</p>
                </div>

                {
                    live.Esd && 
                    <div>
                        <p className="ti">Starts</p>
                        <p className="tt">{moment(live.Esd,"YYYYMMDDdddd").format("MMM Do YYYY dddd")}</p>
                    </div>
                }

                <div className="toss">
                    
                    <p className="ti">Toss</p>
                    
                    {
                        live.TCho ? 
                            <p className="toss-win"><TossFind TCho={live.TCho} TPa={live.TPa} T1={live.T1} T2={live.T2}/></p> : <p>Toss before the match</p>
                        
                    }
                    
                </div>

                <div>
                    <p className="ti">Country</p>
                    <p className="tt">{live.VCnm}</p>
                </div>

                <div>
                    <p className="ti">City</p>
                    <p className="tt">{live.VCity}</p>
                </div>

                <div>
                    <p className="ti">Venue</p>
                    <p className="tt">{live.Vnm}</p>
                </div>

                {
                    live.Refs && 
                    live.Refs.slice(0,2).map((ref,index) => (
                        <div>
                            <p className="ti">Umpire {index + 1}</p>
                            <p className="tt">{ref.Nm}</p>
                        </div>
                    ))
                }

                

                {
                    live.Refs && 
                    live.Refs.slice(3).map((ref,index) => (
                        <div>
                            <p className="ti">Refree</p>
                            <p className="tt">{ref.Nm}</p>
                        </div>
                    ))
                }


            </div>
            }
            
        </div>
    )
}

export default Info
