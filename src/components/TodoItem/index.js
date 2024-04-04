import './index.css'

const TodoItem = props => {
  const {todosList, onDeleteItem} = props
  const {id, title} = todosList
  const onDelete = () => {
    onDeleteItem(id)
  }
  return (
    <li className="list-card">
      <p className="todo-item">{title}</p>
      <button className="btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
