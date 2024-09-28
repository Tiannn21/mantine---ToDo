import { Button, Group, TextInput } from "@mantine/core"
import { useState } from "react"


export default function TodoForm() {
    const [value, setValue] = useState('')

    const handleClickAdd = () => {
        return value
    }

    return (
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
    )
}