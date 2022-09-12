import './App.css';

import { Routes, Route, NavLink, Outlet } from 'react-router-dom';

import TopPage from './routes/TopPage'
import TodoList from './routes/TodoList'
import Detail from './routes/Detail'

function App() {
  return (
    <div className="App">
      <header>
        <NavLink to='/' style={{ color: "white"}}>
          <h1 className='title'>Advanced Todo List</h1>
        </NavLink>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<TopPage/>}></Route>
          <Route path='/:date' element={<TodoList/>}></Route>
          <Route path='/todoList/:todoId' element={<Detail/>}></Route>
        </Routes>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default App;
