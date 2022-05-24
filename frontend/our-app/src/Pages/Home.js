import React from 'react';
import Title from '../components/title';
import { useNavigate } from "react-router-dom"
import "../components/buttons.css"
import "../components/background.css"
import { BsFillChatDotsFill } from "react-icons/bs"
import { FiPhoneCall } from "react-icons/fi"
import { AiFillAlert } from "react-icons/ai"
import Logo from '../components/logo';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="background">
            <Title></Title>
            <div className='buttons'>
                <button onClick={() => navigate("/text")} className="button1">
                    <BsFillChatDotsFill></BsFillChatDotsFill> Text
                </button>
                <button onClick={() => navigate("/call")} className="button2">
                    <FiPhoneCall></FiPhoneCall> Call
                </button>
                <button className="emergency">
                    <a href="tel:911"> <AiFillAlert></AiFillAlert> Emergency </a>
                </button>
            </div>
            <Logo></Logo>
        </div>
    );
}

export default Home;