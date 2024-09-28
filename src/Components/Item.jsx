import { Button, Checkbox, Paper } from "@mantine/core"

export default function Item( {text} ) {
    return (
        <Paper shadow="xs" radius="lg" withBorder p="xs" style={{display: 'flex', justifyContent: 'space-between'}}>
                <Checkbox label={text} radius="xl" color="green"></Checkbox>
                <Button color="pink" radius="xl">Eliminar</Button>
        </Paper>
    )
}