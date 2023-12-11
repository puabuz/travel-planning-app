
function Stats({ items }) {
  if (!items.length) return <footer>
    <em>Start adding some items to your packing list</em>
  </footer>
  const numItems = items.length
  const numPacked = items.filter(item => item.packed).length
  const percentage = Math.round((numPacked / numItems) * 100)
  return (
    <footer>
      {percentage === 100 ? <em>You got everithing! Ready to go airport</em>
        : <em>You have {numItems} items on your list, and you already packed {numPacked}  ({percentage}%)</em>}
    </footer>
  )
}

export default Stats;