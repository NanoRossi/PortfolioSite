import { DiGithubBadge } from 'react-icons/di';
import { FaItchIo } from 'react-icons/fa';

const gitHubLabel = "GitHub Repo"
const itchIoLabel = "Itch.io Deployment"

export default function ProjectHeader({ title, repoLink, itchIoLink }) {

    let isOnItch = (itchIoLink !== "");

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
                {isOnItch && <a
                    key={itchIoLabel}
                    aria-label={itchIoLabel}
                    title={itchIoLabel}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={itchIoLink}
                    className="github-icon">
                    <FaItchIo />
                </a>}
            </div>
        </div>
    );
}