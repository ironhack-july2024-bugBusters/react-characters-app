import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Home() {

    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        axios.get("https://ih-crud-api.herokuapp.com/characters")
            .then( response => {
                setCharacters(response.data);
            })
            .catch( e => console.log("Error getting characters from the API", e));
    }, []);

    return (
        <>

            { characters === null 
                ? <h2>Loading...</h2> 
                : <h2>Numbers of characters in our API: {characters.length}</h2>
            }


            {characters && characters.map( (characterDetails, index) => {
                return (
                    <div className="card" key={index}>
                        <h3>{characterDetails.name}</h3>
                        <p>Weapon: {characterDetails.weapon}</p>

                        <Link to={`/characters/${characterDetails.id}`}>More details</Link>
                    </div>
                )
            })}
            
        </>
    );
}

export default Home;