import axios from "axios";
import { useEffect, useState } from "react";
import {useParams, Link} from "react-router-dom";

function CharacterDetails(){

    const {characterId} = useParams();

    const [character, setCharacter] = useState(null);

    useEffect(() => {
        axios.get(`https://ih-crud-api.herokuapp.com/characters/${characterId}`)
            .then( response => {
                setCharacter(response.data);
            })
            .catch( e => console.log("Error getting character details from the API", e));
    }, []);

    return(
        <>
            { character === null && <h2>Loading...</h2> }

            { character && 
                <div className="card">
                    <p>Name: {character.name}</p>
                    <p>Occupation: {character.occupation}</p>
                    <p>Weapon: {character.weapon}</p>
                </div>
            }

            <Link to="/">Back to Homepage</Link>
        </>
    );
}

export default CharacterDetails;