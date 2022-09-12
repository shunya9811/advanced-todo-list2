import { Link } from 'react-router-dom';

import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { useTodoContext } from '../store/index';

function Todo(props) {

    const { changeFavo, deleteTodo } = useTodoContext();

    return (
        <div className='todoCardContainer'>
            <div className='cardHeader'>
                <p className='cardTitle'>{props.todo.title}</p>
            </div>
            <div className='cardContent'>
                <div className='cardText'>
                    <p>Category</p>
                    <p>{props.todo.category}</p>
                </div>
                <div className='cardText'>
                    <p>priority</p>
                    <p>{props.todo.priority}</p>
                </div>
                <div className='cardText'>
                    <p>Time</p>
                    <p>{props.todo.time}</p>
                </div>
            </div>
            <div className='cardFooter'>
                <div className='cardBtn'>
                    <IconButton 
                        onClick={() => {changeFavo(props.todo)}}
                        style={{ color: props.todo.isFavorited ? "red" : "" }}
                    >
                        <FavoriteIcon/>
                    </IconButton>
                    <IconButton
                        onClick={() => {deleteTodo(props.todo)}}
                    >
                        <DeleteForeverIcon
                            fontSize='large'
                        />
                    </IconButton>
                </div>
                <div>
                    <Link to={`/todoList/${props.todo.id}`}><p>Show More</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Todo;