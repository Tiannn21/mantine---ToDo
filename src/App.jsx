import '@mantine/core/styles.css';
import TodoApp from './Components/TodoApp';

import { MantineProvider } from '@mantine/core';

export default function App() {
  return (
    <MantineProvider>
      <TodoApp></TodoApp>
    </MantineProvider>
    )
}
