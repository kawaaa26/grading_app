import {Article} from "./components/index";
// import {Main} from "./components/index";
import './App.css';

function App() {
  return (
    <div className="wrap">
      <header>
        <div className="video-area">
          <video
            className="background"
            src="geometric_patterns.mp4"
            muted
            autoPlay
            loop
          >
          </video>
        </div>
      </header>
      <div className="container">
        <h1>Grading Exams</h1>
        <p>Grading students based on their Exam results.</p>
        <br />
        {/* <Main /> */}
        <Article />
      </div>
    </div>
  );
}

export default App;
