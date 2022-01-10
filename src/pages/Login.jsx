import React, { useEffect, useState } from 'react';
import Header from '../components/atom/header';
import Form from '../components/organism/Form';

const Login = () => {
    const [initialData, setInitialData] = useState(undefined);
    const [rememberMe, setRememberMe] = useState(true);
   
    useEffect(() => {
        const savedData = localStorage.getItem('loginData');
        if(savedData){
            setInitialData(JSON.parse(savedData))
        }
    }, [])

    const onSubmit = (loginData, rememberMe) => {
        if(rememberMe) {
            localStorage.setItem('loginData', JSON.stringify(loginData));
        }
        console.log('send to api', loginData)
    }

    const handleCheckbox = () => {
        setRememberMe(false)
    }


    return (
        <div>
            <Header/>
            <Form onSubmit={onSubmit} onChange={handleCheckbox} initialData={initialData} rememberMe={rememberMe}/>
           
        </div>
    )
}

export default Login;
