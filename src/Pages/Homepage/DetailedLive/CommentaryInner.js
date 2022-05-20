import React from 'react';
import "./styles/CommentaryBox.css"
function CommentaryInner({Com,playerwithid}) {
    const commentary = Com.slice(0,18).map((Com1) => (Com1));
    console.log(commentary);
    console.log(playerwithid);
  return (
    <div className='commentary-container'>
      {
          commentary.map((com,index) => (
             com.Sv ?  
             <div key={index} className='comm-box'>
                <div className='ovrate'>
                  <p className='ov'>{com.Ov}</p>
                </div>

                <div className='sv'>
                  <div className={com.Sv == "W" ? 'svp w' : 'svp'}>
                    <p>{com.Sv}</p>
                  </div>
                </div>

                <div className='c-box'>
                  <div className='c-box-top'>
                    <p>{com.S}  -</p>
                    <p className='coid'>{playerwithid[com.Oid]} to {playerwithid[com.Aid]}</p>
                  </div>

                  <div className='c-box-bottom'>
                    <p>{com.T}</p>
                  </div>
                </div>
            </div>  :
            <div className='endover'>
              <div className='endover-top'>
                <p>{com.Ov}th over</p>
                <p>{com.S}</p>
              </div>
              <div className='endover-bottom'>
                <p>{com.T}</p>
              </div>
            </div>
          ))
      }
    </div>
  );
}

export default CommentaryInner;
