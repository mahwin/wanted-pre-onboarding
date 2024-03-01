import { ToDoList } from "./pages/TodoList";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToDoList />
    </ThemeProvider>
  );
}

export default App;
