import ProjectItemEntry from "../../Templates/ProjectItemEntry"

export default function CoachBuilder() {
    return (
        <div className="section">
            <ProjectItemEntry
                title="EA Sports CFB 26 - Coach Builder"
                repoLink="https://github.com/NanoRossi/CFB-Coach-Builder"
                hostingLink="https://www.cfb-coach-builder.com/"
            >
                <p>The EA Sports College Football game series contains an indepth skill tree for your created coach, in which there are many potential paths to take.
                    I play in a competitive online league and discussion often drifts to tools or utilities that the players would like to use.
                    So I thought I would take it upon myself to build one of them, a way to plan out how you intend to build your coach, allowing players to experiment and see what combinations of abilities they can or can't afford.
                    The game's own internal logic is coded into the tool, including dynamic pricing of abilities and unlock conditions.
                </p>
                <p>I initially wrote this against the '25 version of the game, but came back to it following the '26 edition's release to flesh out more features. And finally, after completing some of the other projects on this page,
                    and gaining more confidence and knowledge of not only the framework but also the deployment and hosting side, I came back to this project to get it into a "completed" state. Redesigning the UI, adding multiple new features, and spending a lot of time ensuring the
                    project was mobile friendly with responsive design.
                </p>
                <p>The tool is written in <b>React</b></p>
            </ProjectItemEntry>
        </div>
    );
}