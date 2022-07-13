import { Link } from "react-router-dom"

export default function Header() {
  return(
    <header>
      <h1>React 연습</h1>
      <nav>
        <Link to="/bingo">랜덤 빙고</Link>
        <Link to="/accordion">아코디언</Link>
        <Link to="/redux">리덕스 연습</Link>
        <Link to="/sample">샘플</Link>
      </nav>
    </header>
  )
}