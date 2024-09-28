import { Container, Title } from '@mantine/core'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { useEffect } from 'react'

export default function TodoApp(){
    useEffect(()=>{
        console.log("hola")
        return
    },[])

    }
    return(
        <Container size="sm">
           <Title style={{ textAlign: 'center', marginTop: 20 }} order={1}>Todo App</Title>
           <TodoForm/>
           <TodoList/>
        </Container>
    )
}