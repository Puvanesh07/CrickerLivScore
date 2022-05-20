
import { Button } from 'evergreen-ui'
import React, { useState } from 'react'
import SingleTeamScore from './SIngleTeamScore'
import "./styles/PlayerwiseScore.css"
import MatchStats from './MatchStats';
import Bowlingstats from './Bowlingstats';

function PlayerWiseScore({live,players}) {
    
        const playerwithid = players.reduce((player,index) => ({...player,[index.Pid]:index.Fn + index.Ln}),{})
    
    
    const Team1ScoreDetails = live.SDInn.slice(0,1).map((team1) => (team1))
    const Team2ScoreDetails = live.SDInn.slice(1,2).map((team2) => (team2))
    const Team3ScoreDetails = live.SDInn.slice(2,3).map((team2) => (team2))
    const Team4ScoreDetails = live.SDInn.slice(3,4).map((team2) => (team2))


    const[teamneeded,setteamneeded] = useState(Team1ScoreDetails)

    return (
        <div className="playerwisescore-hero">
            <div className="twoinnings">
                {
                    Team1ScoreDetails.map((Team1) =>(
                        <Button onClick={() => (setteamneeded(Team1ScoreDetails))}>{Team1.Ti}</Button>
                    ))
                }
                {
                    Team2ScoreDetails.map((Team2) =>(
                        <Button onClick={() => (setteamneeded(Team2ScoreDetails))}>{Team2.Ti}</Button>
                    ))
                }
                {
                    Team3ScoreDetails && 
                    Team3ScoreDetails.map((Team3) =>(
                        <Button onClick={() => (setteamneeded(Team3ScoreDetails))}>{Team3.Ti}</Button>
                    ))
                }
                {
                    Team4ScoreDetails && 
                    Team4ScoreDetails.map((Team4) =>(
                        <Button onClick={() => (setteamneeded(Team4ScoreDetails))}>{Team4.Ti}</Button>
                    ))
                }
            </div>

            <div className="battingstats">
                {
                    teamneeded &&
                    teamneeded.map((team,index) =>(
                        <SingleTeamScore playerwithid={playerwithid} team={team} key={index}/>
                    ))
                }
            </div>

            <div className="matchstats">
                <p className="stats">Stats</p>
                {
                    teamneeded && 
                    teamneeded.map((team,index) =>(
                        <MatchStats team={team}/>
                    ))
                }
            </div>

            <div className="bowlingstats">
                <p className="stats">Bowling</p>
                {
                    teamneeded && 
                    teamneeded.map((team,index) =>(
                        <Bowlingstats playerwithid={playerwithid} team={team.Bow}/>
                    ))
                }
            </div>
            
        </div>
    )
}

export default PlayerWiseScore
