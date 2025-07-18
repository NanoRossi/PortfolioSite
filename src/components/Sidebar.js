import { DiGithubBadge } from 'react-icons/di';
import { FaLinkedin } from 'react-icons/fa6';
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
  }
];

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile-picture-container">
        <img
          src={`${process.env.PUBLIC_URL}/profile-picture.jpeg`}
          alt="Your Name"
          className="profile-picture"
        />
      </div>

      <h2 className="text-theme">About Me</h2>
      <p className="text-theme">A Welsh Software Developer with a love for all things video games, pop punk/emo music, NFL, F1 and Newport County AFC</p>
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