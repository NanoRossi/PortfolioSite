import { DiGithubBadge } from 'react-icons/di';

const gitHubLabel = "GitHub Repo"


export default function ProjectHeader({ title, repoLink }) {

    return (
        <div className="item-header">
            <div className="item-title">
                <h3>{title}</h3>
                <a
                    key={gitHubLabel}
                    aria-label={gitHubLabel}
                    title={gitHubLabel}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={repoLink}
                    className="github-icon">
                    <DiGithubBadge />
                </a>
            </div>
        </div>
    );
}