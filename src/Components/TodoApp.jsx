import { Container } from '@mantine/core'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { useState } from 'react'

export default function TodoApp() {
    const [value, setValue] = useState('')
    const [labels, setLabels] = useState([])
    const [checkedLabels, setCheckedLabels]  = useState([])

    const añadirLabel = (newLabel) => {
        if(labels.includes(newLabel)) return 
        const newLabels = [...labels]
        newLabels.push(newLabel)
        setLabels(newLabels)
    }

    const handleClickAdd = () => {
        if (!value.trim()) return
        añadirLabel(value)
        setValue('')
    }

    const handleClickDelete = (label) => {
        const newLabels = [...labels]
        setLabels(newLabels.filter((newLabel)=> newLabel!==label ))
        setCheckedLabels(checkedLabels.filter((item) => item !== label))
    }

    const handleChecked = (label) => {
        checkedLabels.includes(label) 
        ? setCheckedLabels(checkedLabels.filter((text) => text !== label)) 
        : setCheckedLabels([...checkedLabels, label])
    }

    return (
        <Container size="sm">
            <TodoForm handleClickAdd={handleClickAdd} value={value} setValue={setValue}/>
            <TodoList labels={labels} handleChecked={handleChecked} checkedLabels={checkedLabels} handleClickDelete={handleClickDelete}/>
        </Container>
    )
}