import React from 'react';
import './style.css';

interface Props {
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
  handleChange:() => void;
}

const InputField = ({todo, setTodo,handleChange }: Props) => {
    return (
      <form className="input" onSubmit={handleChange}>
      <input 
      type="input" 
      placeholder="Enter the task name"
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      className="input__box "
      />
      <button type="submit" className="input_submit">
        GO
      </button>

      </form>
    )
}

export default InputField;