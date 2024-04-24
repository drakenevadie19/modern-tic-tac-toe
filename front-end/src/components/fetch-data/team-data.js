import { useState, useEffect } from 'react';
import axios from 'axios';

const TeamData = () => {
    const [allTeamInFiveLeagues, setAllTeamInFiveLeagues] = useState([]);
    const [teamProfile, setTeamProfile] = useState([]);
    const [current, setCurrent] = useState([]);

    useEffect(() => {
        const fetchData = async (leagueNumb, seasonNumb) => {
            try {
                const response = await axios.get('https://api-football-v1.p.rapidapi.com/v3/teams', {
                    params: {
                        league: leagueNumb,
                        season: seasonNumb
                    },
                    headers: {
                        'X-RapidAPI-Key': '517c480401msha0c78d26c8b7bbfp1bd1bejsnfd252439e7aa',
                        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                    }
                });
                // console.log(response.data.response);
                setCurrent(response.data.response);
                current.map((team) => {
                    teamProfile.push({
                        id: team.team.id,
                        name: team.team.name,
                        logo: team.team.logo
                    })
                })
            } catch (error) {
                console.error(error);
            }
        };
        fetchData(135, 2023);
    }); // Empty array as dependency to run only once on component mount

    
    
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
