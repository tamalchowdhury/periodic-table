import GitHubButton from "react-github-btn"
import { AUTHOR_NAME, AUTHOR_SITE, GITHUB_REPO } from "../lib/consts"

export default function Footer() {
  return (
    <>
      <footer className='footer center'>
        <span>
          2024, Put together by{" "}
          <a
            href='https://www.blogkori.com/periodic-table-react'
            target='_blank'
            rel='noopener'
          >
            {AUTHOR_NAME}
          </a>
        </span>
      </footer>
    </>
  )
}
