import { useState } from "react";
import './App.css';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true }
]

function App() {

  const [items, setItems] = useState([])

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((item) => item.filter(item => item.id !== id))
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} />
      <Stats />
    </div>
  );
}

function Logo() {
  return <header>FAR AWAY</header>
}
function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault()
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() }
    console.log(newItem)
    onAddItems(newItem);
    setDescription('')
    setQuantity(1)
  }

  return (
    <form className="items" onSubmit={handleSubmit}>
      <div className="item">What di you need for you trip</div>
      <div className="item">
        <select
          onChange={(e) => setQuantity(Number(e.target.value))}
          value={quantity}
          name="" id="">
          {Array.from({ length: 20 }, (_, i) => ++i).
            map(num => <option value={num} key={num}>{num}</option>)}
        </select>
      </div>
      <div className="item">
        <input type="text" placeholder='Item...'
          onChange={(e) => setDescription(e.target.value)}
          value={description} /></div>
      <div className="item"><button>ADD</button></div>
    </form>
  )
}
function PackingList({ items, onDeleteItem }) {
  return (
    <ul className="lines">
      {items.map(item => {
        return <Item item={item} onDeleteItem={onDeleteItem} key={item.id} />
      })}

    </ul>
  )
}

function Item({ item, onDeleteItem }) {
  return (
    <li className="line">
      <input className="line_item" type="checkbox" checked={item.packed} />
      <span className="line_item"
        style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)} className="line_item">X</button>
    </li>

  )
}

function Stats() {
  return (
    <footer>
      <div className="edit_buttons">
        <button className="edit_btn">SORT BY INPUT ORDER</button>
        <button className="edit_btn">CLEAR LIST</button>
      </div>
      <div>You have 10 items on your list, and you already packed 0 (0%)</div>
    </footer>
  )
}

export default App;
