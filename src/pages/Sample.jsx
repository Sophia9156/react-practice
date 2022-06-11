import { useState } from "react"

export default function Sample() {
  const [fruits, setFruits] = useState({
    apple: {selected: false, stock: 5},
    strawberry: {selected: false, stock: 2},
    banana: {selected: false, stock: 4},
    kiwi: {selected: false, stock: 6}
  });
  
  const handleClick = () => {
    fruits.apple.selected && setFruits(prevState => ({...prevState, apple: {...prevState.apple, stock: prevState.apple.stock - 1}}));
    fruits.strawberry.selected && setFruits(prevState => ({...prevState, strawberry: {...prevState.strawberry, stock: prevState.strawberry.stock - 1}}));
    fruits.banana.selected && setFruits(prevState => ({...prevState, banana: {...prevState.banana, stock: prevState.banana.stock - 1}}));
    fruits.kiwi.selected && setFruits(prevState => ({...prevState, kiwi: {...prevState.kiwi, stock: prevState.kiwi.stock - 1}}));
  };

  return (
    <section className="sample">
      <ul className="display-list">
        <li className="display-item">
          <input type="checkbox" name="apple" onChange={() => setFruits({...fruits, apple: {...fruits.apple, selected: !fruits.apple.selected}})} />
          🍎 : {fruits.apple.stock}
        </li>
        <li className="display-item">
          <input type="checkbox" name="strawberry" onChange={() => setFruits({...fruits, strawberry: {...fruits.strawberry, selected: !fruits.strawberry.selected}})} />
          🍓 : {fruits.strawberry.stock}
        </li>
        <li className="display-item">
          <input type="checkbox" name="banana" onChange={() => setFruits({...fruits, banana: {...fruits.banana, selected: !fruits.banana.selected}})} />
          🍌 : {fruits.banana.stock}
        </li>
        <li className="display-item">
          <input type="checkbox" name="kiwi" onChange={() => setFruits({...fruits, kiwi: {...fruits.kiwi, selected: !fruits.kiwi.selected}})} />
          🥝 : {fruits.kiwi.stock}
        </li>
      </ul>
      <div className="btn-wrap">
        <button onClick={handleClick}>Checkout</button>
      </div>
    </section>
  )
}