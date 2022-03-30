import { Link } from "react-router-dom"

export default function Header() {
  return(
    <header>
      <h1>React 연습</h1>
      <nav>
        <Link to="/bingo">랜덤 빙고</Link>
        <Link to="/accordian">Context API 아코디언</Link>
      </nav>
    </header>
  )
}