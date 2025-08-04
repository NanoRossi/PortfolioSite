import ProjectHeader from "./ProjectHeader";

function Projects() {
  return (
    <div className="section">
      <div className="item-entry">
        <ProjectHeader
          title="Custom Discogs Dashboard"
          repoLink="https://github.com/NanoRossi/Custom-Discogs-Dashboard"
          itchIoLink=""
        />
        <div className="item-details">
          <p>One of my hobbies outside of programming is music and I am a keen collector of Vinyl Records.</p>
          <p>I found myself at a loss for a record to play on a random afternoon, and had the idea to create it, a single button that would pick a random item from my collection.
            From there the idea evolved into a full custom dashboard, displaying recent additions to the collection, a user's wantlist, and numerous ways to query the database.
            For me the highlight is the ability for the app to generate pseudo random facts about the collection, including how many entries for a given artist,
            or how many additions were made in a random month/year.
          </p>
          <p>This project features a client written in <b>React</b> and a server written in <b>.NET 8</b> that uses the Discogs.com API to collect data.</p>
          <p>The application can also be deployed in  <b>Docker</b> and has it's own <b>Helm Charts</b></p>
        </div>
      </div >

      <div className="item-entry">
        <ProjectHeader
          title="Portfolio Website"
          repoLink="https://github.com/NanoRossi/PortfolioSite"
          itchIoLink=""
        />
        <div className="item-details">
          <p>Following the previous two projects this felt like the natural next step, somewhere to act as a hub that I can point people to.</p>
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
          This project is split into two parts, one is a lyrics scraper that will take an artist name and scrap all of their songs and lyrics from a popular website database.
          The second part is an interactive game where you have five guesses to guess a song's title given a lyric while you have the option to receive more lyrics at the cost of less points should you be successful.
        </p>
        <br></br>
        <p>I wrote the project in a way to enable the ability to spin up artist or genre specific versions relatively quickly.</p>
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
          I play in a competitive online league and discussion often drifts to tools or utiltiies that the players would like to use.
          So I thought I would take it upon myself to build one of them, a way to plan out how you intend to build your coach, allowing players to experiment and see what combinations of abilities they can or can't afford.
        </p>
        <br></br>
        <p>I initially wrote this against the '25 version of the game, but came back to it following the '26 edition's release to fully flesh out the features.</p>
        <br></br>
        <p>The tool is written in <b>React</b></p>
      </div>
    </div >
  );
}

export default Projects;
