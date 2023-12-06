import { useState } from "react";
import './App.css';


function App() {

  const [items, setItems] = useState([])

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((item) => item.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    console.log(id)
    setItems((items) => items.map(item =>
      item.id === id ? { ...item, packed: !item.packed } : item))
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
      />
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
          {Array.from({ length: 20 }, (_, i) => ++i)
            .map(num => <option value={num} key={num}>{num}</option>)}
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
function PackingList({ items, onDeleteItem, onToggleItems }) {
  return (
    <ul className="lines">
      {items.map(item => {
        return <Item item={item}
          onDeleteItem={onDeleteItem}
          onToggleItems={onToggleItems}
          key={item.id} />
      })}
    </ul>
  )
}

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
