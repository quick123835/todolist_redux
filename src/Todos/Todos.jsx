import {useSelector } from 'react-redux'
import { useEffect } from 'react'
import styles from './Todos.module.scss'
import clsx from 'clsx'
import {FcCancel} from 'react-icons/fc'

const Todos = ({onChecked , onDel}) => {
    const todos = useSelector((state) => state.todoReducer)
    useEffect(() => {
        
    },[todos])
    return(
        <div>
            {todos.map((todo , index) => {
                return(
                    <div key={index} className={clsx(styles.todoContainer, {[styles.done] : todo.checked})}>
                        <label>
                            <input type='checkbox' onClick={()=> onChecked?.(todo.id)} />
                            <span className={clsx(styles.todo, { [styles.checked]: todo.checked })}>{todo.text}</span>
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