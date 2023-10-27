import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Todo from './Todo';

function App() {

  const [todoid, setTodoId] = useState(2);

  const [todo, setTodo] = useState([
    {id:1, text:'learn web', checked:false},
    {id:2, text:'get a job', checked:false}
  ]);

  // const objString = JSON.stringify(todo); //객체, 배열 -> 문자로 변경
  // window.localStorage.setItem('todo', objString); //스토리지에 저장
  // window.localStorage.getItem('todo'); //스토리지 값 읽기
  // const personObj = JSON.parse(personString); //문자열 -> 객체, 배열


  const getTodoList = () => {
    let todoListFromStorage = window.localStorage.getItem('todo');
    console.log(todoListFromStorage);
    if(todoListFromStorage !== null){
      //값이 있다면
      const todoObj = JSON.parse(todoListFromStorage);
      setTodo(todoObj);
    }
  }
  useEffect(() => {
    getTodoList();
  }, [])

  const deleteTodo = (id) => {
    let newTodos = [...todo];
    let index = newTodos.findIndex(item => (item.id === id));
    newTodos.splice(index,1);
    setTodo(newTodos);
  }

  let todos = todo.map(item => (
    <Todo data={item} key={item.id} deleteTodo={deleteTodo}/>
  ));

  let addTodo = (value) => {
    let newTodos = [...todo];
    let newId = todoid + 1;
    
    setTodoId(newId);
    newTodos.push({id:newId, text:value, checked:false});
    setTodo(newTodos);
    document.getElementById('todo').value='';
  }

  const setStorage = () => {
    const todoString = JSON.stringify(todo);
    window.localStorage.setItem('todo', todoString);
    console.log('스토리지 저장');
  }

  useEffect(()=>{
    setStorage();
  }, [todo]);

  return (
    <div className="container">
      <h1 className='mt-5 text-center'>To Do List</h1>
      <Form onSubmit={e => {
        e.preventDefault();
        // console.log(e.target.todo.value);
        addTodo(e.target.todo.value);
      }}>
        <Form.Group className="mb-3" controlId="todo1">
          <Form.Label>Todo Input</Form.Label>
          <Form.Control type="text" name="todo" placeholder="할 일을 입력하세요" />
        </Form.Group>
      </Form>

      <hr/>
      <div>
        { todos }
      </div>
    </div>
  );
}

export default App;
