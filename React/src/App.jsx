import { useState } from 'react'
import { Item, Container, TodoList, Input, Button, List } from './styles'

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
        <Container> 
            <TodoList>
                <Input
                    placeholder="Digite a sua Tarefa"
                    value={inputValue}
                    onChange={inputonChange}
                />
                <Button onClick={buttononClick}>Adicionar Tarefa</Button>
                <List>
                    {tasks.map((task) => (
                        <Item key={task.id}>{task.name}</Item>
                    ))}
                </List>
            </TodoList>
        </Container>
    )
}

export default App