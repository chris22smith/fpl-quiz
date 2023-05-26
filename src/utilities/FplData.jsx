const proxyUrl1 = "https://api.allorigins.win/raw?url=";
const proxyUrl2 = "https://cors-anywhere.herokuapp.com/"; // backup proxy, limit 200 requests/hour
const baseURL = "https://fantasy.premierleague.com/api/";

const reqType = {
  bootstrap: "bootstrap-static/", // Overview
  element: "element-summary/", // Players (playerID)
  events: "events", // Get all gameweeks
  event: "event", // A selected gameweek
  entry: "entry", // Get a team
  elementTypes: "element-types", // Get all player positions
  gameweekFixtures: "fixtures/?event", // Get all fixtures for a specified gameweek (gameweek number)
  teams: "teams/", // Get all teams,
  leagueClassicStanding: "leagues-classic/", // Get league standing at current gameweek
};

// base request
const doCORSRequest = async (reqType) => {
  let request = new Request(proxyUrl1 + baseURL + reqType);
  let response = await fetch(request);
  if (response.status !== 200) {
    console.error("1st proxy failed");
    request = new Request(proxyUrl2 + baseURL + reqType);
    response = await fetch(request);
    if (response.status !== 200) {
      console.error("2nd proxy failed");
      return false;
    }
  }
  const json = await response.json();
  window.sessionStorage.setItem(reqType, JSON.stringify(json));
  return json;
};

// hardcoded for now
let dataSrc = "live";

// use json file for previous seasons
const getLocalFile = async (reqType) => {
  const request = new Request(`/data/${dataSrc}/${reqType.slice(0, -1)}.json`);
  const response = await fetch(request);
  const json = await response.json();
  return json;
};

// check data source

// initially set to value of season-picker dropdown
// let dataSrc = seasonPicker.value;

// function updateDataSrc(event) {
//   dataSrc = event.target.value;
// }

// seasonPicker.addEventListener("dataSrcChanged", updateDataSrc);

// specific requests

export const getBootstrap = () => {
  if (dataSrc === "live") {
    const stored = window.sessionStorage.getItem(reqType.bootstrap);
    if (stored) {
      return JSON.parse(stored);
    }
    const data = doCORSRequest(reqType.bootstrap);
    return data;
  } else {
    const data = getLocalFile(reqType.bootstrap);
    return data;
  }
};
