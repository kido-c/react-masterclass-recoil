import { useRecoilState, useRecoilValue } from 'recoil';
import { todoSelector, categoryState, Categories } from '../atom';
import CreateTodo from './CreateTodo';
import Todo from './Todo';

function Todolist() {
  const [category, setCategory] = useRecoilState(categoryState);
  const todos = useRecoilValue(todoSelector);

  const selectOption = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any); // 왜 여기는 as any??
  };

  return (
    <>
      <h1>TODO LIST</h1>
      <hr />
      <form>
        <select value={category} onInput={selectOption}>
          <option value={Categories.TO_DO}>To Do</option>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.DONE}>Done</option>
        </select>
      </form>
      <CreateTodo />
      {todos?.map((aToDo) => (
        <Todo key={aToDo.id} {...aToDo} />
      ))}
    </>
  );
}

export default Todolist;

// const Container = styled.div`
//   background-color: ${(props) => props.theme.bgColor};
//   color: ${(props) => props.theme.textColor};
// `;
