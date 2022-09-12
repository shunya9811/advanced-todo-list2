import { useState } from 'react';

import CreateTodo from '../component/createTodo';
import Todo from '../component/Todo'


import AddIcon from '@mui/icons-material/Add';

import { useParams } from 'react-router-dom';

import { useTodoContext } from '../store/index';

function TodoList(){
    const [show, setShow] = useState(false)
    const openModal = () => {
        setShow(true)
    }

    const { todoList } = useTodoContext();

    const { date } = useParams();

    const dateTitle = date.slice(4, 6) + "/" + date.slice(6, 8) 

    const [display, setDisplay ] = useState('all')

    const handleChange = (event) => {
        setDisplay(event.target.value)
    }

    const renderList = []

    todoList.forEach((todo) => {
        if (todo.date === date){
            if (display === 'all') {
                renderList.push(
                    <Todo
                        todo={todo}
                        key={todo.date+todo.title}
                    />
                )
            } else {
                if (todo.priority === display){
                    renderList.push(
                        <Todo
                            todo={todo}
                            key={todo.date+todo.title}
                        />
                    )
                }
            }

        }
    });

    return (
        <div className='page'>
            <div className='header'>
                <h2>{dateTitle}'s todo</h2>
                <div className='selectBar'>
                    <h2>Priority</h2>
                    <select onChange={handleChange}>
                        <option value="all">All</option>
                        <option value="3">top priority 3</option>
                        <option value="2">high priority 2</option>
                        <option value="1">low priority 1</option>
                    </select>
                </div>
            </div>
            <div className='todoCards'>
                {renderList}
                <div className='todoCardContainer'>
                    <button className='addTodoButton' onClick={openModal}>
                        <AddIcon
                            sx={{ color: 'white', fontSize: "40px" }}
                            ></AddIcon>
                    </button>
                    <CreateTodo show={show} setShow={setShow}/>
                    <p className='addTodoText'>Add Todo</p>
                </div>
            </div>
        </div>
    )
}

export default TodoList;