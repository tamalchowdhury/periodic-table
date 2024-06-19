import GitHubButton from "react-github-btn";

export default function Footer() {
  return (
    <>
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
    </>
  )
}
