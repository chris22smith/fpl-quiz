/* eslint-disable react/prop-types */
import { ErrorBoundary } from "react-error-boundary";

function Scores(props) {
  return (
    <ErrorBoundary fallback={<span>Scores error</span>}>
      <div id="scores">
        <div id="current-score">
          <span id="score-label">Current Score</span>
          <span id="score">{props.score}</span>
        </div>
        <div id="best-score">
          <span id="high-score-label">Personal Best</span>
          <span id="high-score">{props.highScore}</span>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default Scores;
