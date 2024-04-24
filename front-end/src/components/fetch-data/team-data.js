// import { useState, useEffect } from 'react';
// import leagueData from './league-data';
// import axios from 'axios';

// // Can only choose team from 2010-2023
// const TeamData = () => {
//     const [teamId, setTeamId] = useState([]);
//     const [teamName, setTeamName] = useState([]);
//     const [teamLogo, setTeamLogo] = useState([]);
//     const [current, setCurrent] = useState(null);

//     const axios  = require('axios');

//     const options = {
//         method: 'GET',
//         url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
//         params: {
//             league: '78',
//             season: '2023'
//         },
//         headers: {
//             'X-RapidAPI-Key': '517c480401msha0c78d26c8b7bbfp1bd1bejsnfd252439e7aa',
//             'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = axios(options); // Use axios(options) for GET requests
//         console.log(response.data);
//         setCurrent(response.data.json); // Assuming "json" is the key in the response data
//       } catch (error) {
//         console.error(error);
//       }

//     return (
//         <>
//             <p>{current}</p>
//         </>
//     )
// }

// export default TeamData;

import { useState, useEffect } from 'react';
import axios from 'axios';

const TeamData = () => {
    const [teamProfile, setTeamProfile] = useState([]);
    const [teamId, setTeamId] = useState([]);
    const [teamName, setTeamName] = useState([]);
    const [teamLogo, setTeamLogo] = useState([]);
    const [current, setCurrent] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api-football-v1.p.rapidapi.com/v3/teams', {
                    params: {
                        league: '78',
                        season: '2023'
                    },
                    headers: {
                        'X-RapidAPI-Key': '517c480401msha0c78d26c8b7bbfp1bd1bejsnfd252439e7aa',
                        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                    }
                });
                // console.log(response.data.response);
                setCurrent(response.data.response);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []); // Empty array as dependency to run only once on component mount

    current.map((team) => {
        teamProfile.push({
            id: team.team.id,
            name: team.team.name,
            logo: team.team.logo
        })
    })
    
    console.log(teamProfile);

    return (
        <>
            {teamProfile.map((profile) => (
                <div class="card">
                    <img src={profile.logo} class="card-img-top" alt="Team-profile" />
                    <div class="card-body">
                        <h5 class="card-title">{profile.name}</h5>
                        {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            ))}
        </>
    );
};

export default TeamData;
