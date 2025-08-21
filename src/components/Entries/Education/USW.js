import ItemEntry from "../../Templates/ItemEntry"

export default function USW() {
    return (
        <div className="section">
            <ItemEntry
                title="MComp - Computer Games Development"
                company="University Of South Wales"
                dates="2013 - 2017"
            >
                <p>I studied an array of modules that covered core computer science understanding as well as game development specific items such as real-time graphics and game object scripting.</p>
                <p><strong>3rd Year Project:</strong> Built a discrete traffic event simulator using Python and PYGame; aiming to simulate the natural flow of traffic in a custom section of roadways</p>
                <p><strong>Final Year Project:</strong> I was a part of a team that developed a battle arena type game. I took ownership of the enemy AI behaviour; handling pathing, attack patterns and collision detection. In the process learning key lessons about project management and scope.</p>
            </ItemEntry>
        </div>
    );
}
