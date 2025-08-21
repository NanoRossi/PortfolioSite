import ProjectItemEntry from "../../Templates/ProjectItemEntry"

export default function DiscogsDashboard() {
    return (
        <div className="section">
            <ProjectItemEntry
                title="Custom Discogs Dashboard"
                repoLink="https://github.com/NanoRossi/Custom-Discogs-Dashboard"
                hostingLink=""
            >
                <p>One of my hobbies outside of programming is music and I am a keen collector of Vinyl Records.</p>
                <p>I found myself at a loss for a record to play on a random afternoon, and had the idea to create it, a single button that would pick a random item from my collection.
                    From there the idea evolved into a full custom dashboard, displaying recent additions to the collection, a user's wantlist, and numerous ways to query the database.
                    For me the highlight is the ability for the app to generate pseudo random facts about the collection, including how many entries for a given artist,
                    or how many additions were made in a random month/year.
                </p>
                <p>I have deployed this application on my home network to a Raspberry Pi combined with a Touchscreen, allowing me to have a custom dashboard that I can interact with at any time.</p>
                <p>This project features a client written in <b>React</b> and a server written in <b>.NET 8</b> that uses the Discogs.com API to collect data.</p>
                <p>The application can also be deployed in  <b>Docker</b> and has it's own <b>Helm Charts</b></p>
            </ProjectItemEntry>
        </div>
    );
}