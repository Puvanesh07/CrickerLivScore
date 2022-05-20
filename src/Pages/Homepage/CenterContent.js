import React, { useEffect, useState } from 'react'
import './styles/CenterContent.css'
import moment from "moment"
import LiveScore from "./LivePart/Livescore"
import axios from 'axios'
import PropagateLoader from 'react-spinners/PropagateLoader'


function CenterContent() {
    const todaydate = moment().format('yyyyMMDD')
    const[stages,setStages] = useState([])
    


    const datem2 = moment().subtract(2,'days').format('ddd MMM Do')
    const datem1 = moment().subtract(1,'days').format('ddd MMM Do')
    const date1 = "Today " + moment().format('MMM Do')
    const datep1 = moment().add(1,'days').format('ddd MMM Do')
    const datep2 = moment().add(2,'days').format('ddd MMM Do')


    const dm2 = `${todaydate - 2}`;
    const dm1 = todaydate - 1;
    const dp1 = parseInt(moment().add(1, 'days').format('yyyyMMDD'));
    const dp2 = parseInt(moment().add(2, 'days').format('yyyyMMDD'));

    const recentdates = {
         [dm2]:datem2,
         [dm1]:datem1,
         [todaydate] :date1,
         [dp1]:datep1,
         [dp2]:datep2,
    }
    console.log(recentdates);

    const temp = todaydate;
    const dates = [todaydate-2,todaydate-1,parseInt(moment().format('yyyyMMDD')),parseInt(moment().add(1, 'days').format('yyyyMMDD')),parseInt(moment().add(2, 'days').format('yyyyMMDD'))]
    console.log(dates);

    const [choosendate,setChoosendate] = useState(todaydate)
    console.log(choosendate);
    useEffect(() => {
        var options = {
        method: 'GET',
        url: 'https://livescore6.p.rapidapi.com/matches/v2/list-by-date',
        params: {Category: 'cricket', Date: `${choosendate}`},
        headers: {
            'x-rapidapi-host': 'livescore6.p.rapidapi.com',
            'x-rapidapi-key': '056a22b0f4mshea0efbf44ab23d2p1349c2jsn2654dfa519cb'
        }
        };

        axios.request(options).then(function (response) {
            
            setStages(response.data.Stages)
        }).catch(function (error) {
            console.error(error);
        });
    },[choosendate])

    const [loading,setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },3000)
    },[choosendate])

    return (
        <div className="stagecard">
                
                <div>
                    <div className='dates'>
                        {dates.map((date,index) => (
                            <div className={(choosendate == date) ? 'd1 cl' : 'd1'} onClick={() => (setChoosendate(date))}>
                                <p className='prc'>{recentdates[date]}</p>
                            </div>
                        ))}
                    </div>
                    <div className={loading && "cns"}>
                    {
                        loading ?
                        <PropagateLoader color={'#F1F5F4'} loading={loading} size={15} />
                        :
                        stages && stages.map((stage,index) => (
                        <LiveScore key={index} stage={stage}/>
                        ))
                    }
                    </div>
                </div>

            {/* <LiveScore/> */}
        </div>
    )
}

export default CenterContent
