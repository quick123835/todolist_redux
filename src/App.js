import './App.css';
import Todos from './Todos/Todos';
import {useSelector , useDispatch} from 'react-redux'
import { inputChange,addTodo,checkTodo,delTodo , dateChange } from './actions/actions';
import styles from './App.module.scss'
import './reset.css'

function App() {
  const day = new Date()
  const today = `${day.getFullYear()}-${day.getMonth()+1}-${day.getDate()}`

  const dispatch = useDispatch()
  const inputValue = useSelector((state) => state.inputReducer)
  const dateValue = useSelector((state) => state.dateReducer)
  

  const handleKeyDown = (e) => {
    if(e.key === 'Enter' && e.target.value.trim() !== ''){
      dispatch(addTodo(inputValue,dateValue))
      dispatch(inputChange(''))
      dispatch(dateChange(today))
    }
  }

  const handleChange = (e) => {
    dispatch(inputChange(e.target.value))
  }

  const handleChecked = (id) => {
    dispatch(checkTodo(id))
  }

  const handleDel = (id) => {
    dispatch(delTodo(id))
  }

  const handleDateChange = (e) => {
    dispatch(dateChange(e.target.value))
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <div>
          <p>TODO LIST</p>
        </div>
        <div className={styles.inputContainer} onKeyDown={handleKeyDown}>
          <input value={inputValue} placeholder='Add a new task' onChange={handleChange}/>
          <input type='date' onChange={handleDateChange} />
        </div>
        <Todos onChecked={handleChecked} onDel={handleDel} />
      </div>
    </div>
  );
}

export default App;
