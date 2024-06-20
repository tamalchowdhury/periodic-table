import { GITHUB_REPO, SITE_TITLE } from "../lib/consts"
import GithubLink from "./GithubLink"

export default function Header() {
  return (
    <header className='header'>
      <div className='wrap header__wrap'>
        <h1 className='header__logo'>
          <a href='/'>{SITE_TITLE}</a>
        </h1>
        <span className='header__text u-flex'>
          <a href={GITHUB_REPO} target='_blank'>
            Star on Github
          </a>{" "}
          🌟 <GithubLink />
        </span>
        <span className='header__text u-flex'>
          <a
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
