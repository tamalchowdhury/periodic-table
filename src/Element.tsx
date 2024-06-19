import { data } from "./lib/data"

type ElementProps = {
  num: number
  showInfo: (num: number) => void
}

export default function Element({ num, showInfo }: ElementProps) {
  const element = data[num]
  return (
    <div
      title={element.name}
      onClick={() => showInfo(num)}
      className={`element element-${num} ${element.category}`}
    >
      <div className='number'>{element.number}</div>
      <div className='symbol'>{element.symbol}</div>
      <div className='element-name'>{element.name}</div>
    </div>
  )
}
