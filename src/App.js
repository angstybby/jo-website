import './App.css';

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Hi I'm Jo!</h1>
        <h1>Welcome to my website.</h1>
      </div>

      <div className="title-page-content">
        <div>
          <h3>Find my resume here ⤵️</h3>
          <a href="/Jovanka Kurniawan CV 2025.pdf" target="_blank" rel="noopener noreferrer">Download</a>
        </div>
        <div>
          <h3>Find my past projects here ⤵️</h3>
          <a href="https://github.com/angstybby" target="_blank" rel="noopener noreferrer">Link to my Github</a>
        </div>
        <div>
          <h3>Don't care about my resume or projects?</h3>
          <button type="button" class="btn btn-outline-primary">Click here!</button>
          <h5>This button is supposed to take you to another cool site but I'm still working on it.</h5>
        </div>
      </div>

      <div className = "pixel-daschund">
        <img src="/pixel dog.png" alt="a daschund"></img>

      </div>
    </div>
  );
}

export default App;
