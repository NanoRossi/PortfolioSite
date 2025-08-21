import ProjectItemEntry from "../../Templates/ProjectItemEntry"

export default function LyricsGame() {
    return (
        <div className="section">
            <ProjectItemEntry
                title="Lyrics Game"
                repoLink="https://github.com/NanoRossi/LyricsGame"
                hostingLink="https://nanorossi.itch.io/hot-milk-lyric-guesser"
            >
                <p>Since the explosion of Wordle in 2021 there have been numerous different versions and copycats of it. I wanted to create an iteration that would challenge you to guess a song title from it's lyrics.
                    This project is split into two parts, one is a lyrics scraper that will take an artist name and scrap all of their songs and lyrics from a popular website database.
                    The second part is an interactive game where you have five guesses to guess a song's title given a lyric while you have the option to receive more lyrics at the cost of less points should you be successful.
                </p>
                <p>I wrote the project in a way to enable the ability to spin up artist or genre specific versions relatively quickly. The scraper can simply be targetted where desired, and a few CSS colours can be updated and voila!</p>
                <p>The scraper was built using <b>.NET 8</b>, and the game itself using <b>React</b>. A version of the game centered around Manchester band "Hot Milk" is hosted on itch.io.</p>
            </ProjectItemEntry>
        </div>
    );
}