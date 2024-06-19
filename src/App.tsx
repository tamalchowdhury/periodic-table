import { useState } from "react"
import Element from "./Element"
import "./styles/main.css"
import { data } from "./lib/data"
import GitHubButton from "react-github-btn"
import Footer from "./components/Footer"
import Header from "./components/Header"
import InfoBox from "./components/InfoBox"

export default function App() {
  const [showInfo, setShowInfo] = useState(false)
  const [element, setElement] = useState(data[1])

  const handleshowInfo = (num: number) => {
    setShowInfo(true)
    setElement(data[num])
  }

  const handlecloseInfo = () => {
    setShowInfo(false)
  }

  const populateElements = (start: number, end: number) => {
    const items = []
    for (let i = start; i <= end; i++) {
      items.push(<Element showInfo={handleshowInfo} num={i} key={i} />)
    }
    return items
  }

  return (
    <>
      <Header />
      <div className='wrapper'>
        <div id='table'>
          {/* Elements 1-4 */}
          {populateElements(1, 4)}
          {/* Information Table */}
          {showInfo && (
            <InfoBox element={element} handlecloseInfo={handlecloseInfo} />
          )}
          {/* Populating elements from 5-57 */}
          {populateElements(5, 57)}
          {/* Lanthanoids split 72-89 */}
          {populateElements(72, 89)}
          {/* Actinoids split 104-119*/}
          {populateElements(104, 118)}
          {/* Lanthenoids 58-71*/}
          {populateElements(58, 71)}
          {/* Actionoids 90-103 */}
          {populateElements(90, 103)}
        </div>
        <Footer />
      </div>
    </>
  )
}
