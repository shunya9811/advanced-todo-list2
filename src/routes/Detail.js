import { useState } from 'react';

import { Link, useParams } from 'react-router-dom';

import { useTodoContext } from '../store/index';

import EditTodo from '../component/editTodo'

import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Detail(){
    const [show, setShow] = useState(false)
    const openModal = () => {
        setShow(true)
    }

    const { todoId } = useParams();

    const { todoList, changeFavo, deleteTodo } = useTodoContext();

    const todo = todoList.find((todo) => todo.id === Number(todoId))


    return (
        <div className='page'>
            <h2 className='todoDetailHeader'>Todo</h2>
            <div className='todoDetailContainer'>
                <h2 className='todoDetailTitle'>{todo.title}</h2>
                <div className='information'>
                    <div className='item'>
                        <p>Category</p>
                        <p>{todo.category}</p>
                    </div>
                    <div className='item'>
                        <p>Priority</p>
                        <p>{todo.priority}</p>
                    </div>
                    <div className='item'>
                        <p>Time</p>
                        <p>{todo.time}</p>
                    </div>
                    <div className='item'>
                        <p>Place</p>
                        <p>{todo.place}</p>
                    </div>
                </div>
                <h3 className='todoDetailTitle'>Detail</h3>
                <textarea placeholder='detail' disabled value={todo.detail}></textarea>
                <div className='cardFooter'>
                    <div className='cardBtn'>
                        <IconButton 
                            onClick={() => {changeFavo(todo)}}
                            style={{ color: todo.isFavorited ? "red" : "" }}
                        >
                            <FavoriteIcon/>
                        </IconButton>
                        <IconButton
                            component={ Link }
                            to='/'
                            onClick={() => {deleteTodo(todo)}}
                        >
                            <DeleteForeverIcon
                                fontSize='large'
                            />
                        </IconButton>
                    </div>
                    <button className='btn' onClick={openModal}>Edit Todo</button>
                    <EditTodo show={show} setShow={setShow}/>
                </div>
            </div>
        </div>
    )
}

export default Detail;