import { useRecoilValue } from 'recoil';
import { todoState } from '../atom';
import CreateTodo from './CreateTodo';
import Todo from './Todo';

function Todolist() {
  const todos = useRecoilValue(todoState);

  return (
    <>
      <h1>TODO LIST</h1>
      <hr />
      <CreateTodo />
      <ul>
        {todos.map((value) => (
          <Todo {...value} />
        ))}
      </ul>
    </>
  );
}

export default Todolist;

// const Container = styled.div`
//   background-color: ${(props) => props.theme.bgColor};
//   color: ${(props) => props.theme.textColor};
// `;
