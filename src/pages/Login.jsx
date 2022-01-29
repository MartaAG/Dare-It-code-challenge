import React, { useEffect, useState } from 'react';
import Header from '../components/atom/header';
import Form from '../components/organism/Form';
import { useNavigate } from "react-router-dom";

const LOGIN_KEY = 'loginData';


const Login = () => {
    const [initialData, setInitialData] = useState(undefined);
    const [rememberMe, setRememberMe] = useState(true);
    const navigate = useNavigate();
   
    useEffect(() => {
        const savedData = localStorage.getItem(LOGIN_KEY);
        if(savedData){
            setInitialData(JSON.parse(savedData))
        } 

    }, [])

    const onSubmit = (loginData, rememberMe) => {
        if(rememberMe) {
            localStorage.setItem(LOGIN_KEY, JSON.stringify(loginData));
        }
         else {
             localStorage.removeItem(LOGIN_KEY)
         }
        console.log('send to api', loginData)
        navigate("/content", { replace: true });
    }

    const handleCheckbox = (ev) => {
        setRememberMe(ev.target.checked)
    }


    return (
        <div>
            <Header/>
            <Form onSubmit={onSubmit} onRememberMeChange={handleCheckbox} initialData={initialData} rememberMe={rememberMe}/>
           
        </div>
    )
}

export default Login;
