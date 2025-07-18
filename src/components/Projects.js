import ProjectHeader from "./ProjectHeader";

function Projects() {
  return (
    <div className="section">
      <div className="item-entry">
        <ProjectHeader
          title="Portfolio Website"
          repoLink="https://github.com/NanoRossi/PortfolioSite"
          itchIoLink=""
        />
        <div className="item-details">
          <p>Following the previous two projects this felt like the natural next step, somewhere to act as a hub to it all that I can point people to.</p>
          <p>This site is written in <b>React</b></p>
        </div>
      </div>

      <div className="item-entry">
        <ProjectHeader
          title="Lyrics Game"
          repoLink="https://github.com/NanoRossi/LyricsGame"
          itchIoLink="https://nanorossi.itch.io/hot-milk-lyric-guesser"
        />
        <p>Since the explosion of Wordle in 2021 there have been numerous different versions and copycats of it. I wanted to create an iteration that would challenge you to guess a song title from it's lyrics.
          This project is split into two parts, one is a lyrics scraper that will take an artist name and scrap all of their songs and lyrics from a popular website databse.
          The second part is an interactive game where you have five guesses to guess a title given a lyric and then you can exchange more lyrics for less points.
        </p>
        <br></br>
        <p>I wrote the project in a way to enable the ability to spin up artist or genre specific versions relatively quickly</p>
        <br></br>
        <p>The scraper was built using <b>.NET 8</b>, and the game itself using <b>React</b>. A version of the game centered around Manchester band "Hot Milk" is hosted on itch.io.</p>
      </div>

      <div className="item-entry">
        <ProjectHeader
          title="EA College Football - Coach Planner"
          repoLink="https://github.com/NanoRossi/CFB-Coach-Planner"
          itchIoLink="https://nanorossi.itch.io/cfb26coachplanner"
        />
        <p>The EA College Football game series contains an indepth skill tree for your created coach, in which there are many potential paths to take.
          I play in a competitive online league and discussion often drifts to uselss tools or utiltiies that the players would like to use.
          So I thought I would take it upon myself to build one of them, a way to plan out how you intend to build your coach, allowing players to experiment and see what combinations of abilities they can or can't afford.
        </p>
        <br></br>
        <p>I initially wrote this against the '25 version of the game, but came back to it following the '26 edition's release to fully flesh out the features.</p>
        <br></br>
        <p>The tool is written in <b>React</b> and was my first attempt at using the framework.</p>
      </div>
    </div >
  );
}

export default Projects;
