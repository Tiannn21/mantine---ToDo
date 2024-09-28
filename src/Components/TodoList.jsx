import { Stack } from "@mantine/core"
import Item from "./Item"
import { useState } from "react"


export default function TodoList(){
  const [labels, setLabels] = useState(['Hacer cama', 'Lavar la loza'])
  
  export const añadirLabel = (newLabel) => {
    const newLabels = [...labels]
    newLabels.push(newLabel)
    setLabels(newLabels)
  }

    return(
    <Stack
      bg="var(--mantine-color-body)"
      align="stretch"
      justify="center"
      gap="md"
    >
        {
          labels.map(label =>(
            // eslint-disable-next-line react/jsx-key
            <Item text={label}/>
          ))
        }
    </Stack>
    )
}