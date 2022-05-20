import React from 'react'
import "./styles/Divetoodeeper.css"
function DivetooDeeper({table}) {
    return (
        <div>
            
            <table class="styledtable">
                <tr>
                    <th>Rank</th>
                    <th>Team</th>
                    <th>MT</th>
                    <th>W</th>
                    <th>L</th>
                    <th>PT</th>
                    <th>NRR</th>
                </tr>
                 {table.map((tab,index) => (
                    // <li>{tab.Tnm}</li>
                    <tr key={index}>
                        <td>{tab.rnk}</td>
                        <td>{tab.Tnm}</td>
                        <td>{tab.pld}</td>
                        <td>{tab.win}</td>
                        <td>{tab.lst}</td>
                        <td>{tab.pts}</td>
                        <td>{tab.nrr}</td>
                        
                    </tr>
                ))}
            </table>
           
        </div>
    )
}

export default DivetooDeeper
