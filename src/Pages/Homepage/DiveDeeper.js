import React from 'react'
import DivetooDeeper from './DivetooDeeper';

function DiveDeeper({d2}) {
    return (
        <div>
            {
                d2.map((table,index) => (
                    <DivetooDeeper key={index} table={table.team}/>
                ))
            }
        </div>
    )
}

export default DiveDeeper
