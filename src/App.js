import './App.css';
import Header from './components/header/Header';
import CreateTodo from './components/createTodo/CreateTodo';
import TodoElements from './components/todoElement/TodoElements';
import { useEffect, useState } from 'react';

function App() {
  const [arr, setArr] = useState(JSON.parse(localStorage.getItem('todoLists')) || []);
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

  useEffect(() => {
    console.log('state arr is changed');
    localStorage.setItem('todoLists', JSON.stringify(arr))
  }, [arr])

  const result = arr.reduce((acc, currentItem) => {
    return acc + currentItem.status;
  }, 0);

  const addTask = (newText) => {
    setArr([...arr, { text: newText, status: false, id: Date.now() }]);
  };

  const deleteTask = (id) => {
    const task = arr.filter((item) => {
      return item.id !== id;
    });
    setArr(task);
  };

  const statusChange = (id) => {
    const status = arr.map((item) => {
      if (item.id === id) {
        return {...item, status: !item.status}
      }
      return item
    })
    setArr(status)
  }
  const onEdit = (id,newText) => {
    const edited = arr.map((item) => {
      if (item.id === id) {
        return {...item, text:newText}
      }
      return item
    })
    setArr(edited)
  }

  const newArr = arr.map((item) => {
    return (
      <TodoElements
        onEdit={onEdit}
        statusChange={statusChange}
        deleteTask={deleteTask}
        id={item.id}
        text={item.text}
        status={item.status}
      />
    );
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
          {newArr.length ? newArr : <h1>Список задач пуст!</h1>}
        </div>
      </div>
    </div>
  );
}

export default App;
