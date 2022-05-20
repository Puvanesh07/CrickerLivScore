import React from 'react'
import ScoreTable from './ScoreTable'
import "./styles/SingleTable.css"

function SingleTeamScore({playerwithid,team}) {
    
    return (
        <div className='player-container'>
            <table className="playertable">
                <tr className="heading-table">
                    <th>Batter</th>
                    <th>R</th>
                    <th>B</th>
                    <th>4s</th>
                    <th>6s</th>
                    <th>SR</th>
                </tr>
                {
                    team && 
                    team.Bat.map((pl,index) => (
                        <ScoreTable pl={pl} key={index} playerwithid={playerwithid}/>
                    ))
                }
            </table>
                
            
        </div>
    )
}

export default SingleTeamScore
