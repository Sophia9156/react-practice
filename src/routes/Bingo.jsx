import { useState } from 'react';

export default function Bingo() {
  const bingoArray = [];
  for(let i = 1; i < 26; i++) {
    bingoArray.push(i)
  }

  const [bingoEl, setBingoEl] = useState(bingoArray)
  
  function randomBingo() {
    let index = bingoEl.length - 1
    const newBingoArray = [...bingoArray]
    while(index > 0) {
      const randomIndex = Math.floor(Math.random() * newBingoArray.length);
      [newBingoArray[index], newBingoArray[randomIndex]] = [newBingoArray[randomIndex], newBingoArray[index]];
      index--;
    }
    return newBingoArray
  }

  function createBingo() {
    const newBingo = randomBingo()
    setBingoEl([...newBingo])
  }

  return (
    <div className='bingo'>
      <ul>
        {
          bingoEl.map((li, key) => (
            <li key={key}>{li}</li>
          ))
        }
      </ul>
      <button onClick={createBingo}>Random</button>
    </div>
  );
}