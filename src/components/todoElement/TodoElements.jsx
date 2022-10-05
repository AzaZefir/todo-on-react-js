import './TodoElements.css';
// props === text='Купить хлеб',status: false || true, deleteTask(), id
const TodoElements = (props) => {

  const onDelete = () => {
    props.deleteTask(props.id)
  }
  const onEdit = () => {
    alert('edited')
  }
  return (
    <div className='todo-elem'>
      <div>
        <input type='checkbox' checked={props.status} />
        <span className={props.status === true ? 'text-line-through': ''}>{props.text}</span>
      </div>
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