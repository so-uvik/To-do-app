import React, { useState } from 'react'
import "./InputField.css";
import { Todo } from '../model';

const InputField:React.FC = (props) => {
  
  const [enteredTask, setenteredTask] = useState('');   //to keep track of entered tasks.
  const [Todos, setTodos] = useState<Todo[]>([]);        //to keep track of the array of entered tasks

  
  const addTaskHandler = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    if(enteredTask)
    {
      setTodos((prevTask)=>{
        return [...prevTask, {id: Date.now(), todo: enteredTask , isDone: false}]
      });
      setenteredTask('');
      
    }
    
     
  }

  const taskChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) =>
  {
    setenteredTask(event.target.value);
  }
  
  return (

    <>
    {console.log(Todos)}
    <form className='input' onSubmit={addTaskHandler}>
      <input type="input" placeholder='Enter a task' value={enteredTask} className='input__box' onChange={taskChangeHandler}/>
      <button className='input_submit' type='submit'>Go</button>
    </form>
    {Todos.map((t) =>(
        <li key={t.id}>{t.todo}</li>
      )
      )}
    </>
  )
}
export default InputField