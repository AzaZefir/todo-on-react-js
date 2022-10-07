import { useState } from 'react';
import './TodoElements.css';
// props === text='Купить хлеб',status: false || true, deleteTask(), id
const TodoElements = (props) => {
  const [isInputShow, setInputShow] = useState(false)
  const [inputValue, setInputValue] = useState(props.text)

  const onDelete = () => {
    props.deleteTask(props.id);
  };
  const onEdit = () => {
    setInputShow(!isInputShow)
  };
  const submit = (e) => {
    e.preventDefault()
    props.onEdit(props.id, inputValue)
    setInputShow(false)
  }
  const inputChange = (e) => {
    setInputValue(e.target.value)
  }
  const statusEdit = () => {
    props.statusChange(props.id)
  }
  return (
    <div className='todo-elem'>
      {isInputShow ? (
        <form onSubmit={submit}>
          <input onChange={inputChange} value={inputValue}  type='text' placeholder='edit text' />
          <button>save</button>
        </form>
      ) : (
        <div>
          <input onChange={statusEdit} type='checkbox' checked={props.status} />
          <span className={props.status === true ? 'text-line-through' : ''}>{props.text}</span>
        </div>
      )}
      <div>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TodoElements;

// function f(a,b) {
//     alert(a+b)
// }

// f(1,2)
// f(3,4)
// f(6,5)
// f(4,3)

// const del = document.querySelector('.del');

// del.addEventListener('click', () => {
//   alert('delete')
// })
