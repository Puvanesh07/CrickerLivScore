import React, { useState } from 'react'

function TossFind({TCho,TPa,T1,T2}) {
    // console.log(TCho,TPa,T1,T2);
    const Team1 = T1.map(team1 => (team1.Nm))
    const Team2 = T2.map(team2 => (team2.Nm))
    const teams = [Team1[0],Team2[0]]
    const choice = ["bat","field"]

    
    return (
        
            <p>{`${teams[TCho-1]} won the toss and choose to ${choice[TPa-1]}`}</p>
        
    )
}

export default TossFind
