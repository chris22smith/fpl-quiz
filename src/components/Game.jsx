"use client";

import "./Game.css";
import { useState, useEffect, useRef, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { SlButton, SlSpinner } from "@shoelace-style/shoelace/dist/react";
import { getBootstrap } from "../utilities/FplData";
import Scores from "./Scores";
import Question from "./Question";
import Answer from "./Answer";

function Game() {
  //states
  const [bootstrapData, setBootstrapData] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(
    parseInt(localStorage.getItem("highScore")) || 0
  );
  const [answeredCorrectly, setAnsweredCorrectly] = useState(null); // can be true (right), false (wrong) or null (not answered)
  const [questionCount, setQuestionCount] = useState(1);

  //refs
  const data = useRef(null);
  const player1 = useRef(null);
  const player2 = useRef(null);
  const metric = useRef(null);

  // game mechanics
  const popularityPercentage = 2.5;

  // runs when answer comes back
  function setAnswerHandler(correctness) {
    if (correctness === true) {
      setScore((score) => score + 1);
      if (score > highScore) {
        // might need to be score + 1 if not yet updated here
        setHighScore(score);
        localStorage.setItem("highScore", score);
      }
    }
    if (correctness === false) {
      setScore(0);
    }
    setAnsweredCorrectly(correctness);
  }

  // filters

  //   function isFinished(gameweek) {
  //     return gameweek.finished === true;
  //   }

  function isRegistered(player) {
    return player.status === "a" || player.status === "d";
  }

  function hasPoints(player) {
    return player.total_points > 0;
  }

  function isPopular(player) {
    return player.selected_by_percent >= popularityPercentage;
  }

  function basicPlayerData(player) {
    const {
      id,
      first_name,
      second_name,
      total_points,
      goals_scored,
      assists,
      bonus,
      minutes,
      selected_by_percent,
      bps,
      now_cost,
      points_per_game,
      yellow_cards,
    } = player;
    return {
      id,
      first_name,
      second_name,
      total_points,
      goals_scored,
      assists,
      bonus,
      minutes,
      selected_by_percent,
      bps,
      now_cost,
      points_per_game,
      yellow_cards,
    };
  }

  function nextQuestionClickHandler() {
    setQuestionCount((count) => count + 1);
    setAnsweredCorrectly(null);
  }

  function randomItem(array) {
    if (array) {
      return array[Math.floor(Math.random() * array.length)];
    } else {
      return {};
    }
  }

  // on initial load, runs once
  useEffect(() => {
    setBootstrapData(getBootstrap);
  }, []);

  // when data loads, runs once
  useEffect(() => {
    if (bootstrapData && bootstrapData.elements) {
      const popularRegisteredPlayersWithPoints = bootstrapData.elements
        .filter(isRegistered)
        .filter(hasPoints)
        .filter(isPopular);
      const byPoints = popularRegisteredPlayersWithPoints.sort((a, b) =>
        a.total_points > b.total_points ? 1 : -1
      );
      data.current = byPoints.map(basicPlayerData);
      setAnsweredCorrectly(undefined);
    }
  }, [bootstrapData]);

  useEffect(() => {
    if (data.current && answeredCorrectly !== null) {
      // question format: Who has {label} ?
      const metrics = [
        { prop: "total_points", label: "scored more FPL points" },
        { prop: "goals_scored", label: "scored more goals" },
        { prop: "assists", label: "more FPL assists" },
        { prop: "minutes", label: "played more minutes" },
        { prop: "bonus", label: "been awarded more bonus points" },
        { prop: "selected_by_percent", label: "the higher ownership" },
        { prop: "bps", label: "the higher BPS score" },
        { prop: "now_cost", label: "the higher price" },
        { prop: "points_per_game", label: "averaged more points per game" },
        { prop: "yellow_cards", label: "received more yellow cards" },
      ];
      // updating refs only so no render, changes in background then seen on next render
      player1.current = randomItem(data.current);
      const reducedList = data.current.filter(
        (item) => item.id !== player1.current.id
      );
      player2.current = randomItem(reducedList);
      metric.current = randomItem(metrics);
    }
  }, [answeredCorrectly]);

  return (
    <ErrorBoundary fallback={<span>Game error</span>}>
      <Suspense fallback={<SlSpinner />}>
        {bootstrapData && (
          <>
            <Scores score={score} highScore={highScore} />
            <Question
              count={questionCount}
              player1={player1.current}
              player2={player2.current}
              metric={metric.current}
              setAnswerHandler={setAnswerHandler}
              answeredCorrectly={answeredCorrectly}
            />
            <Answer answeredCorrectly={answeredCorrectly} />
            <SlButton
              variant="primary"
              id="next"
              disabled={answeredCorrectly === null}
              onClick={() => nextQuestionClickHandler()}
            >
              Next question
            </SlButton>
          </>
        )}
      </Suspense>
    </ErrorBoundary>
  );
}

export default Game;
