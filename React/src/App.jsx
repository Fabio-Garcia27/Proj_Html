import { useState } from 'react'
 
function App() {
    const [tasks, setTasks] =  useState([]);
    const [inputValue, setInputValue] =  useState('');

    function inputonChange(event) {
       setInputValue(event.target.value);
    }

    function buttononClick() {
        if (inputValue.trim() !== '') {
            setTasks([...tasks, { id: Date.now(), name: inputValue }]);
            setInputValue('');
        }
    }

    return (
        <div> 
            <input
              placeholder="Digite a sua Tarefa"
              value={inputValue}
              onChange={inputonChange}
            />
            <button onClick={buttononClick}>Adicionar Tarefa</button>
            <ul>
                {tasks.map((task) => (
                  <li key={task.id}>{task.name}</li> 
                ))}
            </ul>
        </div>
    )
}

export default App