import GitHubButton from "react-github-btn"
import { GITHUB_REPO } from "../lib/consts"

export default function GithubLink() {
  return (
    <GitHubButton
      href={GITHUB_REPO}
      data-color-scheme='light'
      data-show-count='true'
      aria-label='Star Periodic Table Project on GitHub'
    >
      Star
    </GitHubButton>
  )
}
