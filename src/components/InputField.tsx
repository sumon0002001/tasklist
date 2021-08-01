import React from 'react';
import './style.css';

export const InputField = () => {
    return (
      <form className="input">
      <input type="input" placeholder="Enter the task name"
            className="input__box "/>
      <button type="submit" className="input_submit">
        GO
      </button>

      </form>
    )
}

export default InputField;