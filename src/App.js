import './App.css';
import Header from './components/header/Header';
import CreateTodo from './components/createTodo/CreateTodo';
import TodoElements from './components/todoElement/TodoElements';
import { useState } from 'react';

function App() {
  const [arr, setArr] = useState([
    {
      id: 1,
      text: 'Купить хлеб',
      status: true,
    },
    {
      id: 2,
      text: 'Купить пряники',
      status: false,
    },
    {
      id: 3,
      text: 'Купить фанту',
      status: true,
    },
  ]);
  // const arr = [
  //   {
  //     text: 'Купить хлеб',
  //     status: true
  //   },
  //   {
  //     text: 'Купить пряники',
  //     status: false
  //   },
  //   {
  //     text: 'Купить фанту',
  //     status: true
  //   },
  //   {
  //     text: 'Купить crocs',
  //     status: true
  //   },
  //   {
  //     text: 'Купить cola',
  //     status: true
  //   }
  // ]

  const result = arr.reduce((acc, currentItem) => {
    return acc + currentItem.status;
  }, 0);
  // console.log(newArr);

  const addTask = (newText) => {
    setArr([...arr, { text: newText, status: false, id: Date.now() }]);
  };

  const deleteTask = (id) => {
    const task = arr.filter((item) => {
      return item.id !== id;
    });
    setArr(task);
  };
  const newArr = arr.map((item) => {
    return <TodoElements deleteTask={deleteTask} id={item.id} text={item.text} status={item.status} />;
    // TodoElem()
  });
  return (
    <div className='App'>
      <Header arrLength={arr.length} arrResult={result} />
      <div className='main-content'>
        <CreateTodo addTask={addTask} />
        <div className='todo-elements'>
          {/* {  TodoElements(text:'Купить хлеб', status: false || true)  } */}
          {/* <TodoElements text='Купить молоко' status={false} />
          <TodoElements text='Купить хлеб' status={true} />
          <TodoElements text='Купить колу' status={false} />
          <TodoElements text='Купить пряники' status={true} />
          <TodoElements text='Купить фанту' status={false} />
          <TodoElements text='Купить спрайт' status={true} /> */}
          {newArr}
        </div>
      </div>
    </div>
  );
}

export default App;
