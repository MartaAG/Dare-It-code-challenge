import React from 'react';
//header, input, submit


const Input = ({ name, value, onChange }) => {
    return (
       <input name={name} placeholder={name} value={value} onChange={onChange} />
    )
}

export default Input;
