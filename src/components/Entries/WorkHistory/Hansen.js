import ItemEntry from "../../Templates/ItemEntry"

export default function Hansen() {
    return (
        <div className="section">
            <ItemEntry
                title="Senior Software Engineer"
                company="Hansen Technologies"
                dates="May 2017 – Present"
            >
                <p>
                    I began at Hansen (formerly Sigma Systems) as a Junior Developer and
                    over time developed my abilities as a developer and worked my way up to the title of Senior.
                </p>
                <p>
                    When joining in 2017 the project I was assigned to was a NodeJS application, in 2018 we began porting it
                    into .NET Core, and we have maintained compaitbility with .NET versions as they have released. In 2020 we began
                    working with AWS and Containerization, allowing me to learn a whole new set of skills and technologies.
                </p>
                <p>
                    During my journey at Hansen I found my love for automation testing, taking sole ownership of an acceptance test suite written in Specflow
                    Along unit tests, integration tests and performance tests that are run on a daily basis.
                    Outside of this I have a keen interest in the concept of 'Mutation Testing', going that step further to ensure developers are writing concise and effective unit tests
                </p>
                <p>
                    <strong>Methodologies:</strong> BDD, TDD, Agile, Gitflow
                </p>
                <p>
                    <strong>Technologies:</strong> .NET, Kubernetes, Helm, Specflow,
                    Jenkins, Prometheus, Grafana, XUnit, Redis, Kafka, Kibana, NodeJS, AWS
                </p>
            </ItemEntry>
        </div>
    );
}
