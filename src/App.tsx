import {useUsers} from "./hooks/useUsers.ts";
import Container from "./components/Container.tsx";
import UsersView from "./components/users/UsersView.tsx";

function App() {
    const {state, reload, reset } = useUsers();


  return (
      <Container>
          <h1>Users list</h1>

          <UsersView
              state={state}
              onReload={reload}>
          </UsersView>

          <button onClick={reset}>Очистить список</button>
          <button onClick={reload}>Загрузить</button>
      </Container>

  );
}

export default App
