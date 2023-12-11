import {useState} from 'react';
import Item from './Item';

function PackingList({ items, onDeleteItem, onToggleItems, onClearList }) {
  const [sortBy, setSortBy] = useState("input")

  let sortedItem;
  if (sortBy === 'input') sortedItem = items;
  if (sortBy === 'description') sortedItem = items.slice().sort((a, b) => a.description.localeCompare(b.description))
  if (sortBy === 'packed') sortedItem = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))
  return (
    <div className="wrapper_items_list">
      <ul className="lines">
        {sortedItem.map(item => {
          return <Item item={item}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems}
            key={item.id} />
        })}
      </ul>

      <div className="edit_buttons">
        <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="edit_btn">
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList} className="edit_btn">Clear list</button>
      </div>
    </div>
  )
}

export default PackingList;