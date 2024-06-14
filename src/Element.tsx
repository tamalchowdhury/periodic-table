import { data } from "./lib/data"
import { useState } from "react"

type ElementProps = {
  num: number
  showInfo: (num: number) => void
}

export default function Element({ num, showInfo }: ElementProps) {
  const [hover, setHover] = useState(false)

  const element = data[num]
  return (
    <div
      title={element.name}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => showInfo(num)}
      className={`element element-${num} ${element.category} ${
        hover ? "active" : ""
      }`}
    >
      <div className='number'>{element.number}</div>
      <div className='symbol'>{element.symbol}</div>
      <div className='element-name'>{element.name}</div>
    </div>
  )
}
