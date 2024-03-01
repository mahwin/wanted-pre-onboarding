import { ToDoList } from "./pages/TodoList";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToDoList />
    </ThemeProvider>
  );
}

export default App;
