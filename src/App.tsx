import { useState } from "react"
import Element from "./Element"
import "./styles/main.css"
import { data } from "./lib/data"
import GitHubButton from "react-github-btn"

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

  const {
    name,
    summary,
    symbol,
    category,
    number,
    source,
    appearance,
    atomic_mass,
    molar_heat,
    density,
    melt,
    boil,
  } = element

  return (
    <>
      <header className='header'>
        <div className='wrap'>
          <h1>The Periodic Table</h1>
        </div>
      </header>
      <div className='wrapper'>
        <div id='table'>
          {/* Elements 1-4 */}
          {populateElements(1, 4)}
          {/* Information Table */}
          {showInfo && (
            <>
              <div id='element-box' className={`${category}`}>
                <div className='number'>{number}</div>
                <div className='symbol'>{symbol}</div>
                <div className='element-name'>{name}</div>
              </div>
              <div id='information'>
                <div
                  onClick={handlecloseInfo}
                  className='close-button'
                  title='Close Info'
                >
                  Close [&times;]
                </div>
                <div>
                  <h1 className='big_title'>{name}</h1>
                  <span className={`cat_name ${category}`}>{category}</span>
                  {appearance && (
                    <div className='appearance'>
                      <strong>Appearance:</strong> {appearance}
                    </div>
                  )}
                  <div className='atom_info'>
                    <span>Atomic Mass: {atomic_mass} | </span>
                    <span>Density: {density}</span>
                    {molar_heat && <span> | Molar Heat: {molar_heat}</span>}
                    {melt && <span> | Melt: {melt}K</span>}
                    {boil && <span> | Boil: {boil}K</span>}
                  </div>
                  <div>
                    {summary} ...{" "}
                    <a target='_blank' href={source}>
                      Source
                    </a>
                  </div>
                </div>
              </div>
            </>
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
        <footer className='footer center'>
          <span>
            2024, Put together by{" "}
            <a href='https://blogkori.com' target='_blank' rel='noopener'>
              Tamal Chowdhury
            </a>
          </span>
          <GitHubButton
            href='https://github.com/tamalchowdhury/periodic-table'
            data-color-scheme='no-preference: light; light: light; dark: dark;'
            data-show-count='true'
            aria-label='Star tamalchowdhury/periodic-table on GitHub'
          >
            Star
          </GitHubButton>
        </footer>
      </div>
    </>
  )
}
