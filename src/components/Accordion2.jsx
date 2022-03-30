import { useState } from "react"

export default function Accordion2({content}) {
  const [isOpen, setIsOpen] = useState();
  return (
    <div>
      <h2 onClick={() => setIsOpen(!isOpen)}>{content.title}</h2>
      <div>{isOpen && <p>{content.text}</p>}</div>
    </div>
  )
}