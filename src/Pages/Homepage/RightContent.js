import React, { useEffect, useRef, useState } from 'react'
import "./styles/RightContent.css"
import axios from "axios"

import { Combobox, deprecatedDefaultTheme } from 'evergreen-ui'
import Tablecomponent from './Tablecomponent'

function RightContent() {
  
   const [leagueData,setLeagueData] = useState({
        ccd:"australia",
        scd:"big-bash-league",
   })

   
   function getTable(selected){
            
       Leagues.filter(leag => leag.scd===selected && setLeagueData(leag))
       console.log(leagueData);
   }


   
   const Leagues = [
       {
            ccd:"india",
            scd:"ipl",
       },
       {
            ccd:"england",
            scd:"the-hundred-men"
        },
        {
            ccd:"england",
            scd:"the-hundred-women"
        },
        {
            ccd:"england",
            scd:"vitality-blast"
        },
        {
            ccd:"australia",
            scd:"big-bash-league"
        },
        {
            ccd:"pakistan",
            scd:"pakistan-super-league"
        },
        {
            ccd:"west-indies",
            scd:"caribbean-premier-league"
        },
   ]
   
  

  
   
   

    return (
        <div className="right-container">
            <h1 className="table-name">League Table</h1>
            <div>
                <Combobox
                    placeholder="World leagues"
                    items={
                        Leagues.map((league) => (league.scd))
                    }
                    autocompleteProps={{
                    title: 'Leagues'
                    }}
                    onChange={selected => getTable(selected)}
                    textTransform="uppercase"
                />
            </div>
            <div>
               
                 <Tablecomponent leagueData={leagueData}/>

            </div>
        </div>
    )
}

export default RightContent

