import React, { useState, useEffect } from "react";
import LastGame from "./LastGame";


function Last() {
    const [games, setGames] = useState([]);
    const [state, setState] = useState(false);

    useEffect(() => {
        async function getGames() {
            const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
            const response = await fetch(`${BACKEND_URL}/api/products/all`);
            const games = await response.json();
            // Obteniendo ultimo id
            let id = 0;
            let position = 0
            games.data.forEach((game, index) => {
                if (game.id > id) {
                    position = index
                    id = game.id
                }
            });
            const response1 = await fetch(`${BACKEND_URL}${games.data[position].detail}`);
            const game = await response1.json();
            setGames(game.data);
            setState(true);
        }
        getGames();
    }, []);

    return (
        <>
            {state ?
                Object.keys(games).length > 0 ?
                    <LastGame {...games} />
                    :
                    <></>
                :
                <p className="text-center">Cargando...</p>
            }
        </>
    );
}

export default Last;