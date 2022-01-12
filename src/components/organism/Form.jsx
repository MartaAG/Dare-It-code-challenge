import React, {useState, useEffect} from 'react';
import Checkbox from '../atom/checkbox';

import Input from '../atom/input';
import Submit from '../atom/submit';

function Form({initialData, onSubmit, rememberMe, onRememberMeChange}) {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    


    const handleSubmit = () => {
        console.log(login, password)
        onSubmit({
          login: login,
          password: password
        }, rememberMe)
    }

    useEffect(() => {
      if(initialData) {
        setPassword(initialData?.password)
        setLogin(initialData?.login)
      }
    }, [initialData])

    
  return (
    <div className="App">
      <Input name="login" value={login} onChange={(ev) => {setLogin(ev.target.value)}}/>
      <Input name="password" value={password} onChange={(ev) => {setPassword(ev.target.value)}}/>
      <Submit onClick={handleSubmit}/>
      <Checkbox label={"Remember me"} onChange={onRememberMeChange} value={rememberMe}/>
    </div>
  );
}

export default Form;
