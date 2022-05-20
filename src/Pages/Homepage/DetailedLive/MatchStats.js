import React from 'react'
import "./styles/Matchstats.css"

function MatchStats({team}) {
    return (
        <div className="stats-table">
            <p>Total : {team.Pt}/{team.Wk} ({team.Ov})</p>
            <p>Run rate : {team.Rr}</p>
            <p>Extras: {team.Ex}</p>
            <p>LB: {team.LB} NB: {team.NB} B: {team.B} WD: {team.WB}</p>
        </div>
    )
}

export default MatchStats

