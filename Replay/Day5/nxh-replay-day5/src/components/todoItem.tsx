type TodoItemProps = {
    task: string;
    completed: boolean;
}
const TodoItem: React.FC<TodoItemProps> = ({ task, completed }) => {
    return <li>
        <input type="checkbox" checked={completed} />
        <span>{task}</span>
    </li>;
};
export default TodoItem;