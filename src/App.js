
import './App.css';

function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <header>FAR AWAY</header>
}
function Form() {
  return (
    <div className="items">
      <div className="item">What di you need for you trip</div>
      <div className="item">
        <select name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div className="item"><input type="text" placeholder='Item...' /></div>
      <div className="item"><button>ADD</button></div>
    </div>
  )
}
function PackingList() {
  return (
    <div class="lines">
      <input className="line" type="checkbox" />
      <span className="line">TextTexttext</span>
      <button className="line">X</button>
    </div>
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
