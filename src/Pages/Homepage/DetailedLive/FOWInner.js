import React from 'react';
import "./styles/FOW.css"

function FOWInner({fowteamwise,playerwithid}) {
    console.log(fowteamwise,playerwithid);
  return (
    <div className="FOWInnerbox">
        {
            fowteamwise.map((item,index)=>(
                <div key={index} className="FOWInnercontents">
                    <div className="wkts">
                        <p>{item.B} Overs - {item.R}/{item.WkN}</p>
                    </div>

                    <div className="whotook">
                        <p className="w">w</p>
                        <p>{playerwithid[item.Bid]} to {playerwithid[item.Pid]}</p>
                    </div>

                    <div className="comm">
                        <p>{item.Co}</p>
                    </div>
                </div>
            ))
        }
    </div>
  );
}

export default FOWInner;
