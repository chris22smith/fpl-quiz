/* eslint-disable react/prop-types */
import { ErrorBoundary } from "react-error-boundary";

function Answer(props) {
  return (
    <ErrorBoundary fallback={<span>Answer error</span>}>
      <div className="answer">
        {props.answeredCorrectly === true && <p id="right">&#10004; Right</p>}
        {props.answeredCorrectly === false && <p id="wrong">&#10008; Wrong</p>}
        {props.answeredCorrectly === null && <p id="pending">...</p>}
      </div>
    </ErrorBoundary>
  );
}

export default Answer;
