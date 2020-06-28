import React from 'react';
import CheckBox from './TodoComponents';
import todosData from './todosData'
import './style.css';

const renderList = todosData.map(item => <CheckBox key = {item.id} component = {item}/>)

function App() {
  return (
      <div className = "todo-list">
        {renderList}
      </div>
  )
}


export default App;
