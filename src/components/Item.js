
function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li className="line">
      <input
        onChange={() => onToggleItems(item.id)}
        className="line_item"
        type="checkbox"
        value={item.packed} />
      <span className="line_item"
        style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)} className="line_item">X</button>
    </li>
  )
}

export default Item;