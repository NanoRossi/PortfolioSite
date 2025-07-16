import { DiGithubBadge } from 'react-icons/di';
import { FaLinkedin, FaBluesky } from 'react-icons/fa6';
import { CiMail } from 'react-icons/ci';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/ross-oliver-64425213b/', label: 'LinkedIn', Icon: FaLinkedin
  },
  {
    href: 'https://github.com/NanoRossi', label: 'GitHub', Icon: DiGithubBadge
  },
  {
    href: 'mailto:rossoliver.work@gmail.com', label: 'Email', Icon: CiMail
  },
  {
    href: 'https://bsky.app/profile/example.bsky.social', label: 'Bluesky', Icon: FaBluesky
  }
];


function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="text-theme">About Me</h2>
      <p className="text-theme">A work in progress website</p>
      <h3 className="text-theme">Connect</h3>
      <div className="social-links">
        {socialLinks.map(({ href, label, Icon, className }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label={label}
            title={label}
          >
            <Icon size={30} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;