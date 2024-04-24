import { useState } from 'react';
import leagueData from './league-data';

// Can only choose team from 2010-2023
// const [team, setTeam] = useState([]);

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
  params: {
    league: '78',
    season: '2023'
  },
  headers: {
    'X-RapidAPI-Key': '517c480401msha0c78d26c8b7bbfp1bd1bejsnfd252439e7aa',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}