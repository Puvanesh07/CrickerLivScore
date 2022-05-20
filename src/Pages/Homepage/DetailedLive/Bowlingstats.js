import React from 'react'
import "./styles/Bowlingstats.css"

function Bowlingstats({team,playerwithid}) {
    return (
        <div>
            <table className="bowlingtable">
                <tr>
                    <th>Bowler</th>
                    <th>O</th>
                    <th>M</th>
                    <th>R</th>
                    <th>W</th>
                    <th>NB</th>
                    <th>WD</th>
                    <th>E/R</th>
                </tr>
                {
                    team.map((t1,index) => (
                            <tr key={index}>
                                <td>{playerwithid[t1.Pid]}</td>
                                <td>{t1.Ov}</td>
                                <td>{t1.Md}</td>
                                <td>{t1.R}</td>
                                <td>{t1.Wk}</td>
                                <td>{t1.NB}</td>
                                <td>{t1.WB}</td>
                                <td>{t1.Er}</td>
                            </tr>
                    ))
                }
                
            </table>
        </div>
    )
}

export default Bowlingstats
