import {useSelector } from 'react-redux'
import styles from './Todos.module.scss'
import clsx from 'clsx'
import {FcCancel} from 'react-icons/fc'

const Todos = ({onChecked , onDel}) => {
    const todos = useSelector((state) => state.todoReducer)
    const newTodoAry = todos.sort(function(a, b) {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA - dateB;
    });
    return(
        <div>
            {newTodoAry.map((todo , index) => {
                return(
                    <div key={index} className={clsx(styles.todoContainer, {[styles.done] : todo.checked})}>
                        <label>
                            <input type='checkbox' onClick={()=> onChecked?.(todo.id)} />
                            <div className={clsx(styles.todo, { [styles.checked]: todo.checked })}>
                                {todo.text}
                            </div>
                            <div className={clsx(styles.date , {[styles.dateChecked]:todo.checked})}>
                                {todo.date}
                            </div>
                        </label>
                        <FcCancel 
                            onClick={() => onDel?.(todo.id)}   
                            style={{
                                fontSize: '25px',
                                cursor: 'pointer',
                                marginRight:'8px'
                        }}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Todos