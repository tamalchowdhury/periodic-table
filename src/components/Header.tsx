import { SITE_TITLE } from "../lib/consts"

export default function Header() {
  return (
    <header className='header'>
      <div className='wrap'>
        <h1>
          <a href='/'>{SITE_TITLE}</a>
        </h1>
      </div>
    </header>
  )
}
