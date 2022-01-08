import React, { useEffect, useState } from 'react';
import Header from '../components/atom/header';
import Form from '../components/organism/Form';

const Login = () => {
    const [initialData, setInitialData] = useState(undefined);
   
    useEffect(() => {
        const savedData = localStorage.getItem('loginData');
        if(savedData){
            setInitialData(JSON.parse(savedData))
        }
    }, [])

    const onSubmit = (loginData, remeberMe) => {
        if(remeberMe){
            localStorage.setItem('loginData', JSON.stringify(loginData));
        }
        console.log('send to api', loginData)
    }

    return (
        <div>
            <Header/>
            <Form onSubmit={onSubmit} initialData={initialData}/>
           
        </div>
    )
}

export default Login;
