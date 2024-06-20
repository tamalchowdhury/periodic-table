import { SITE_TITLE } from "../lib/consts"
import GithubLink from "./GithubLink"

export default function Header() {
  return (
    <header className='header'>
      <div className='wrap header__wrap'>
        <h1>
          <a href='/'>{SITE_TITLE}</a>
        </h1>
        <span>
          <GithubLink />
        </span>
        <span>
          <a
            style={{ textDecoration: "underline" }}
            href='https://www.blogkori.com/periodic-table-react'
            target='_blank'
          >
            How I Built it?
          </a>
        </span>
        
      </div>
    </header>
  )
}
