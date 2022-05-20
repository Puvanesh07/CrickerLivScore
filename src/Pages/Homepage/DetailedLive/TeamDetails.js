import React, { useState } from 'react'
import "./styles/TeamDetails.css"

function TeamDetails({live,players,team1,team2}) {
    const Team1 = team1.map(t1 => (t1.Nm))[0]
    const Team2 = team2.map(t2 => (t2.Nm))[0]

    const Team1players = players.slice(0,11).map(player => (player.Fn+" "+player.Ln))
    const Team2players = players.slice(11,22).map(player => (player.Fn+" "+player.Ln))

    // console.log(live);
    // console.log(live,players,team1,team2);

    return (
        <div className="team-hero">
            <h1 className="team">Team</h1>
            <div className="team-details">
              <div className="team1">
                  <div>
                    <h1 className="h1">{Team1}</h1>
                  </div>
                  
                  <div className="players">
                    {
                        Team1players.map((t1players,index) => (
                            <p>{index+1}. {t1players}</p>
                        ) )
                    }
                  </div>
              </div>

              <div className="team2">
                  <div>
                         <h1 className="h1">{Team2}</h1>
                  </div>
                  
                  <div className="players">
                  {
                        Team2players.map((t2players,index) => (
                            <p>{index+1}. {t2players}</p>
                        ) )
                    }
                  </div>
              </div>
            </div>
        </div>
    )
}

export default TeamDetails
