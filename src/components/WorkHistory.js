function WorkHistory() {
  return (
    <div className="section">
      <div className="item-entry">
        <div className="item-header">
          <div>
            <h3 className="item-title">Senior Software Engineer</h3>
          </div>
          <div className="item-dates">
            <span>May 2017 – Present</span>
          </div>
        </div>
        <div className="item-details">
          <p>I began at Hansen (formerly Sigma Systems) as a Junior Developer and over my time have worked my way up to the title of Senior.</p>
          <p>During that time the project team I am a part of rewrote the application from NodeJS into .NET and then into the world of containerisation and AWS.</p>
          <p>Along the way I found my love for all things automated testing, taking ownership of the acceptance test that I led the creation of. At the time of writing the application boasts over 11000 automated tests of all shapes and sizes, and I am always looking to improve our coverage and techniques whenever possible.</p>
          <p><strong>Methodologies:</strong> Behaviour Driven Development, Test Driven Development, Agile, Gitflow</p>
          <p><strong>Technologies:</strong> .NET, Kubernetes, Helm, Specflow, Jenkins, Prometheus, Grafana, XUnit, Redis, Kafka</p>
        </div>
      </div>
    </div>
  );
}

export default WorkHistory;
