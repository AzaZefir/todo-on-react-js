import { useState } from 'react';
import './CreateTodo.css';

// props === addTask
const CreateTodo = (props) => {
  const [value, setValue] = useState(''); //const value = 'azat', setValue()

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.addTask(value)
    setValue('')
    // console.log(event);
  };

  const onInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={onFormSubmit} className='create-wrapper'>
      <input value={value} onChange={onInputChange} type='text' placeholder='Добавить задачу' />
      <button>+ add</button>
    </form>
  );
};

export default CreateTodo;
