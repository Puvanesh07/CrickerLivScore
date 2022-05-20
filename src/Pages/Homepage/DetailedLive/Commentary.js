import { Button } from 'evergreen-ui'
import React, { useState } from 'react'
import CommentaryInner from './CommentaryInner'
import "./styles/CommentaryBox.css"

function Commentary({live,players}) {
    
    const Team1FowDetails = live.slice(0,1).map((team1) => (team1))
    const Team2FowDetails = live.slice(1,2).map((team2) => (team2))
    const Team3FowDetails = live.slice(2,3).map((team3) => (team3))
    const Team4FowDetails = live.slice(3,4).map((team4) => (team4))
    const[teamneeded,setteamneeded] = useState(Team1FowDetails)

    const playerwithid = players.reduce((player,index) => ({...player,[index.Pid]:index.Fn + index.Ln}),{})
    console.log(teamneeded);
    return (
        <div className='commentary-container'>
            <div className="twoinnings">
               {
                   Team1FowDetails && Team1FowDetails.map((Team1FowDetail) => (
                        <Button onClick={() => (setteamneeded(Team1FowDetails))}>{Team1FowDetail.Ti}</Button>
                   ))
               }

                {
                   Team2FowDetails && Team2FowDetails.map((Team2FowDetail) => (
                    <Button onClick={() => (setteamneeded(Team2FowDetails))}>{Team2FowDetail.Ti}</Button>
                ))
               }

                {
                   Team3FowDetails && Team3FowDetails.map((Team3FowDetail) => (
                    <Button onClick={() => (setteamneeded(Team3FowDetails))}>{Team3FowDetail.Ti}</Button>
                ))
               }

                {
                   Team4FowDetails && Team4FowDetails.map((Team4FowDetail) => (
                    <Button onClick={() => (setteamneeded(Team4FowDetails))}>{Team4FowDetail.Ti}</Button>
                ))
               }
                
            </div>

            <div className='abc'> 
                {
                    teamneeded && teamneeded.map((team) => (
                        <div className='abcd'>
                            <CommentaryInner Com={team.Com} playerwithid={playerwithid}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Commentary
