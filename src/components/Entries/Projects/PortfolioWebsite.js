import ProjectItemEntry from "../../Templates/ProjectItemEntry"

export default function PortfolioWebsite() {
    return (
        <div className="section">
            <ProjectItemEntry
                title="Portfolio Website"
                repoLink="https://github.com/NanoRossi/PortfolioSite"
                hostingLink=""
            >
                <p>Following the previous two projects this felt like the natural next step, somewhere to act as a hub that I can point people to,
                    somewhere I can contain all of my personal information that I would try to cram into a CV, instead in a living document with plenty of room to breath.
                </p>
                <p>I have made it a point to come back to this site fairly often in order to update it when I make significant changes to other projects,
                    as well as being a safe space to try new React and CSS patterns
                </p>
                <p>This site is written in <b>React</b></p>
            </ProjectItemEntry>
        </div>
    );
}