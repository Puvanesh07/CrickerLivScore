import React from 'react'
import "./styles/SingleTable.css"
function ScoreTable({pl,playerwithid}) {
    const outtype = (() => {
        if(pl.LpTx == "lbw [B]"){
            return(`lbw ${playerwithid[pl.Bid]}`)
        }
        else if(pl.LpTx == "c [F] b [B]"){
            return(`c ${playerwithid[pl.Fid]} b ${playerwithid[pl.Bid]}`)
        }
        else if(pl.LpTx == "b [B]"){
            return(`b ${playerwithid[pl.Bid]}`)
        }
        else if(pl.LpTx == "run out ([F])"){
            return(`run out ${playerwithid[pl.Fid]}`);
        }
        else if(pl.LpTx == "caught(sub) b [B]"){
            return(`caught(sub) b ${playerwithid[pl.Bid]}`)
        }
        else if(pl.LpTx == "not out"){
            return(`not out`)
        }
        else if(pl.LpTx == "c & b [B]"){
            return(`c & b ${playerwithid[pl.Bid]}`)
        }
        else{
            return(`Did not bat`)
        }
    }
    )
    const nil = (() => {
        if(pl.LpTx == "did not bat"){
            return(`-`)
        }
        else{
            return(`0`)
        }
    })

    const status = pl.LpTx === "not out" ? true : false;

    return (
       
            <tr>
                <td className={status ? "playerstatus status" : "playerstatus"}><p>{playerwithid[pl.Pid]}</p><p className="out-style">{outtype()}</p></td>
                <td>{pl.R || nil()}</td>
                <td>{pl.B || nil()}</td>
                <td>{pl.$4 || nil()}</td>
                <td>{pl.$6 || nil()}</td>
                <td>{pl.Sr || nil()}</td>
            </tr>
    )
}

export default ScoreTable
