import React from 'react';

import ReactDOM from 'react-dom/client';

import "../components/checkboxes.css"
import "../components/phonenum.css"
import "../components/buttons.css"
import CheckBoxes from './checkboxes';

function TakeValue() {
    var x = document.getElemnetById("boo")
    console.log(x)
}

function PhoneNum() {
    return (
        <form action = "http://localhost:8080/submitted" method="POST">
            <div className="phonenum">
                Input Phone #
            </div>
            <div className="input">
                <input placeholder="xxxxxxxxxx" type="text" name="number" className="num" autocomplete="on"></input>
            </div>
            <CheckBoxes></CheckBoxes>
            <div className="submit">
                <button onClick={TakeValue} className="submitb" id = "boo">
                    Submit
                </button>
            </div>
        </form>

    );

}

export default PhoneNum;