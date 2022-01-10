import React from 'react';


const Checkbox = ({ label, onChange, value  }) => {
    return (
        <label>
            <input 
            type="checkbox"
            onChange={onChange}
            checked={value}
            />
            {label}
        </label>
    )
}

export default Checkbox;
