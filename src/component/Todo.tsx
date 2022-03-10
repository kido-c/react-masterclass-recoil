import { ITodo, todoState } from '../atom';
import { useSetRecoilState } from 'recoil';

function Todo({ text, category, id }: ITodo) {
  const setTodos = useSetRecoilState(todoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTodos((oldTodos) => {
      const targetIndex = oldTodos.findIndex((todo) => todo.id === id);
      const newTodo = { text, id, category: event.currentTarget.name as any };
      return [
        ...oldTodos.slice(0, targetIndex),
        newTodo,
        ...oldTodos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category === 'TO_DO' ? null : (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category === 'DOING' ? null : (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category === 'DONE' ? null : (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default Todo;
