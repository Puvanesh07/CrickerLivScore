import React, { useState ,useEffect, useMemo} from 'react'
import axios from 'axios'
import Innercomponent from './Innercomponent'
function Tablecomponent({leagueData}) {
    const[data,setData] = useState()

    useEffect(() => {
        var options = {
            method: 'GET',
            url: 'https://livescore6.p.rapidapi.com/matches/v2/list-by-league',
            params: {Category: 'cricket', Ccd: `${leagueData.ccd}`, Scd: `${leagueData.scd}`},
            headers: {
              'x-rapidapi-host': 'livescore6.p.rapidapi.com',
              'x-rapidapi-key': '056a22b0f4mshea0efbf44ab23d2p1349c2jsn2654dfa519cb'
            }
          };
          
          axios.request(options).then(function (response) {
            setData(response.data.Stages)
          }).catch(function (error) {
              console.error(error);
          });
       }, [leagueData])
       
    
  


    
    
   
   
    return (
        <div>
            {
                data && data.map((da,index) => {
                    return<Innercomponent key={index} demo1={da.LeagueTable}/>
                })
                // demo1 &&  <Innercomponent demo1={demo1}/>
            }
            
        </div>
    )
}

export default Tablecomponent
