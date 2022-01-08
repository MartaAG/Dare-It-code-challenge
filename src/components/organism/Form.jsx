import React, {useState, useEffect} from 'react';

import Input from '../atom/input';
import Submit from '../atom/submit';

function Form({initialData, onSubmit}) {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

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
     {/*  /** Remember me checkbox  */}
      <Submit onClick={handleSubmit}/>
    </div>
  );
}

export default Form;
