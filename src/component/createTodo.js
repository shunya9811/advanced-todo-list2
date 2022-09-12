import { useState } from "react"

import { useParams } from 'react-router-dom';

import { useTodoContext } from '../store/index';

function CreateTodo(props){
    const closeModal = () => {
        props.setShow(false)
    }

    const { date } = useParams();

    const { todoId, setTodoId, addTodo } = useTodoContext();

    const [ todo, setTodo ] = useState({
        id: todoId,
        date: date,
        title: "",
        category: "",
        priority: "",
        time: "",
        place: "",
        detail: "",
        isFavorited: false
    })

    const handleChange = (event) => {
        setTodo((prevState) => ({ ...prevState, [event.target.name]: event.target.value }))
    }

    const handleSubmit = () => {
        addTodo(todo)
        setTodo({
            id: todoId+1,
            date: date,
            title: "",
            category: "",
            priority: "",
            time: "",
            place: "",
            detail: "",
            isFavorited: false
        })
        setTodoId(todoId+1)
    }

    if (props.show){
        return (
            <div id="overlay" onClick={closeModal}>
                <div id="content" onClick={(e) => e.stopPropagation()}>
                    <h2 className='todoDetailHeader'>Create Todo</h2>
                    <div className='todoDetailContainer'>
                        <div className='titleCon'>
                            <p>Title</p>
                            <input type="text" name='title' placeholder='Title' className='titleInput' onChange={handleChange} value={todo.title}></input>
                        </div>
                        <div className='information'>
                            <div className='item'>
                                <p>Category</p>
                                <input type="text" name='category' placeholder='Category' className='infoInput' onChange={handleChange} value={todo.category}></input>
                            </div>
                            <div className='item'>
                                <p>Priority</p>
                                <input type="number" name='priority' placeholder='Priority(1~3)' min="1" max="3" className='infoInput' onChange={handleChange} value={todo.priority}></input>
                            </div>
                            <div className='item'>
                                <p>Time</p>
                                <input type="text" name='time' placeholder='00:00~00:00' className='infoInput' onChange={handleChange} value={todo.time}></input>
                            </div>
                            <div className='item'>
                                <p>Place</p>
                                <input type="text" name='place' placeholder='Place' className='infoInput' onChange={handleChange} value={todo.place}></input>
                            </div>
                        </div>
                        <h3 className='todoDetailTitle'>Detail</h3>
                        <textarea name="detail" onChange={handleChange} value={todo.detail}></textarea>
                    </div>
                    <div className='btnCon'>
                        <button className='btn' onClick={() => {
                            closeModal(); 
                            handleSubmit();
                        }}>Create Todo</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
}

export default CreateTodo;