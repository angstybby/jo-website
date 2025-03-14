import './App.css';

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Welcome to Jovanka's World!</h1>
      </div>

      <div className="circles">
        <div className="resume">
          <h3>My Resume</h3>
          <a href="/Jovanka Kurniawan CV 2025.pdf" target="_blank" rel="noopener noreferrer">Download</a>
        </div>
        <div className="projects">
          <h3>My past and present projects</h3>
          <a href="https://github.com/angstybby" target="_blank" rel="noopener noreferrer">Link to my Github</a>
        </div>
        <div className="fun-button">
          <h3>Don't press the Fun Button!</h3>
          <button type="button" class="btn btn-outline-primary">Fun Button</button>
        </div>
      </div>

      <div className = "pixel-daschund">
        <img src="/pixel dog.png" alt="a daschund"></img>

      </div>
    </div>
  );
}

export default App;
