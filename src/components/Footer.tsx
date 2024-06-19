import GitHubButton from "react-github-btn"
import { AUTHOR_NAME, AUTHOR_SITE, GITHUB_REPO } from "../lib/consts"

export default function Footer() {
  return (
    <>
      <footer className='footer center'>
        <span>
          2024, Put together by{" "}
          <a href={AUTHOR_SITE} target='_blank' rel='noopener'>
            {AUTHOR_NAME}
          </a>
        </span>
        <GitHubButton
          href={GITHUB_REPO}
          data-color-scheme='no-preference: light; light: light; dark: dark;'
          data-show-count='true'
          aria-label='Star Periodic Table Project on GitHub'
        >
          Star
        </GitHubButton>
      </footer>
    </>
  )
}
