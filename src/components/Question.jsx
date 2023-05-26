/* eslint-disable react/prop-types */

import "./Question.css";
import { ErrorBoundary } from "react-error-boundary";
import { SlButton, SlButtonGroup } from "@shoelace-style/shoelace/dist/react";

function Question(props) {
  // exit if we don't have data
  if (props.player1 === null) return;

  function formatMetric(player) {
    switch (props.metric.prop) {
      case "selected_by_percent":
        return player[props.metric.prop] + "%";
      case "now_cost":
        return player[props.metric.prop] / 10;
      default:
        return player[props.metric.prop];
    }
  }

  function handlePlayer1Click() {
    if (
      Number(props.player1[props.metric.prop]) >
      Number(props.player2[props.metric.prop])
    ) {
      props.setAnswerHandler(true);
    } else {
      props.setAnswerHandler(false);
    }
  }

  function handleDrawClick() {
    if (
      Number(props.player1[props.metric.prop]) ===
      Number(props.player2[props.metric.prop])
    ) {
      props.setAnswerHandler(true);
    } else {
      props.setAnswerHandler(false);
    }
  }

  function handlePlayer2Click() {
    if (
      Number(props.player1[props.metric.prop]) <
      Number(props.player2[props.metric.prop])
    ) {
      props.setAnswerHandler(true);
    } else {
      props.setAnswerHandler(false);
    }
  }

  return (
    <ErrorBoundary fallback={<span>Question error</span>}>
      <div className="question">
        <h2>
          {props.count}. Who has <span id="metric">{props.metric.label}</span>?
        </h2>
        <SlButtonGroup>
          <SlButton
            variant="primary"
            id="player1"
            onClick={() => handlePlayer1Click()}
            disabled={props.answeredCorrectly !== null}
          >
            <span className="name">{`${props.player1.first_name} ${props.player1.second_name}`}</span>
            {props.answeredCorrectly !== null && (
              <span className="metric">{formatMetric(props.player1)}</span>
            )}
          </SlButton>
          <SlButton
            className="draw"
            onClick={() => handleDrawClick()}
            disabled={props.answeredCorrectly !== null}
          >
            DRAW
          </SlButton>
          <SlButton
            variant="primary"
            id="player2"
            onClick={() => handlePlayer2Click()}
            disabled={props.answeredCorrectly !== null}
          >
            <span className="name">{`${props.player2.first_name} ${props.player2.second_name}`}</span>
            {props.answeredCorrectly !== null && (
              <span className="metric">{formatMetric(props.player2)}</span>
            )}
          </SlButton>
        </SlButtonGroup>
      </div>
    </ErrorBoundary>
  );
}

export default Question;
