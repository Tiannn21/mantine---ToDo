import { Container, Title, Button, Group, TextInput, Stack, Paper, Checkbox } from '@mantine/core'
import { useState } from 'react'

export default function TodoApp() {
    const [value, setValue] = useState('')
    const [labels, setLabels] = useState([])
    const [checkedLabels, setCheckedLabels]  = useState([])

    const añadirLabel = (newLabel) => {
        if(labels.includes(newLabel)) return // Hacer que salte un anuncio de que la tarea ya existe 
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
            <Title style={{ textAlign: 'center', marginTop: 20 }} order={1}>Todo App</Title>
            <Group justify="center">
                <TextInput
                    radius="xl"
                    placeholder="Add Todo Task"
                    mb="md"
                    flex={1}
                    style={{ marginTop: 17 }}
                    value={value}
                    onChange={(event) => setValue(event.currentTarget.value)}
                >
                </TextInput>
                <Button onClick={handleClickAdd}
                    radius="xl"
                >Add</Button>
            </Group>
            <Stack
                bg="var(--mantine-color-body)"
                align="stretch"
                justify="center"
                gap="md"
            >
                {
                    labels.map(label => (
                         
                        <Paper key={label} shadow="xs" radius="lg" withBorder p="xs" style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Checkbox onChange={() => handleChecked(label)} label={label} radius="xl" color="green"
                            style={{textDecoration: checkedLabels.includes(label) ? 'line-through' : 'none', // Cambia el estilo según si está marcada o no
                        }}></Checkbox>
                            <Button color="pink" radius="xl" onClick={()=>handleClickDelete(label)}>Eliminar</Button>
                        </Paper>
                    ))
                }
            </Stack>
        </Container>
    )
}