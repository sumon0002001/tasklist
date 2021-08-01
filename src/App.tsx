import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState([]);

  const HandleChange = () => {

  }

  console.log(todo);
  

  return (
    <div className="App">
      <span className="heading">  Task-List </span>
      <InputField todo={todo} setTodo={setTodo} handleChange= {HandleChange}  />
   
    </div>
  );
}

export default App;
