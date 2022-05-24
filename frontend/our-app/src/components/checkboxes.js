import React from "react";
import "../components/checkboxes.css"
import { useState } from 'react'; 


function CheckBoxes() {
    const [first,setFirst] = useState(true);
    const [second,setSecond] = useState(true);
    const [third,setThird] = useState(true);
    const [fourth,setFourth] = useState(true);

    const handleClick=(choice)=>{
        }

    return (
        <>
            <div className="carrier">
                Phone Carrier
            </div>
            <div className="checkbox">
                <div>
                    <input type="radio" value={first} onChange={()=>handleClick("first")} name='same'/> 
                    <div className="verizon">Verizon</div>
                </div>
                <div>
                    <input type="radio" value={second} onChange={()=>handleClick("second")} name='same'/>
                    <div className="att">AT&T</div>
                </div>
                <div>
                    <input type="radio" value={third} onChange={()=>handleClick("third")} name='same'/> 
                    <div className="sprint">Sprint</div>
                </div>
                <div>
                    <input type="radio" value={fourth} onChange={()=>handleClick("fourth")} name='same'/>
                    <div className="t-mobile">T-Mobile</div>
                </div>
            </div>
        </>
    );
}

export default CheckBoxes;