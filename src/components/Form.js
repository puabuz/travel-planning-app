import { useState } from 'react';

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault()
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() }
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

export default Form;
