import { Title, Button, Group, TextInput } from '@mantine/core'

export default function TodoForm({ handleClickAdd, value, setValue }) {
    return (
        <div>
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
                    onKeyDown={(event) => event.key === "Enter" && handleClickAdd()}
                >
                </TextInput>
                <Button onClick={handleClickAdd}
                    radius="xl"
                >Add</Button>
            </Group>
        </div>
    )
}
