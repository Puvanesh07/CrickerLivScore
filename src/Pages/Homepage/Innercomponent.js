import {React,useState} from 'react'
import DiveDeeper from './DiveDeeper'

function Innercomponent({demo1}) {
    const demo2 = demo1.L  
    return (
        <div>
            {
                demo2.map((d2,index) => (
                    <DiveDeeper key={index} d2={d2.Tables}/>
                ))    
            }
        </div>
    )
}

export default Innercomponent
