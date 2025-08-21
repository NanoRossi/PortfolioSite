import { DiGithubBadge } from 'react-icons/di';
import { GoProjectSymlink } from "react-icons/go";

const gitHubLabel = "GitHub Repo"
const deploymentLabel = "Project Deployment"

export default function ProjectHeader({ title, repoLink, hostingLink }) {

    let isDeployed = (hostingLink !== "");

    return (
        <div className="project-header">
            <div className="project-title-container">
                <h3 className="project-title">{title}</h3>
                <div className="project-links">
                    <a
                        key={gitHubLabel}
                        aria-label={gitHubLabel}
                        title={gitHubLabel}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={repoLink}
                        className="github-icon"
                    >
                        <DiGithubBadge />
                    </a>
                    {isDeployed && (
                        <a
                            key={deploymentLabel}
                            aria-label={deploymentLabel}
                            title={deploymentLabel}
                            target="_blank"
                            rel="noopener noreferrer"
                            href={hostingLink}
                            className="github-icon"
                        >
                            <GoProjectSymlink />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}