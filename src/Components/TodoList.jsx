import { Button, Stack, Paper, Checkbox } from '@mantine/core'

export default function TodoList({labels, handleChecked, checkedLabels, handleClickDelete}){
    return(
        <div>
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
        </div>
    )
}