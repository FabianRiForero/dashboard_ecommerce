import React, { useState, useEffect } from "react";
import LastGame from "./LastGame";

function Last(){
    const [games,setGames] = useState([]);

    useEffect(() => {
        async function getGames(){
            const response = await fetch('http://localhost:3001/api/products/all');
            const games = await response.json();
            // Obteniendo ultimo id
            let id = 0;
            let position = 0
            games.data.forEach((game, index) => {
                if(game.id > id){
                    position = index
                    id = game.id
                }
            });
            const response1 = await fetch(`http://localhost:3001${games.data[position].detail}`);
            const game = await response1.json();
            setGames(game.data);
        }
        getGames();
    },[]);

    return(
        <>
            <LastGame {...games} />
        </>
    );
}

export default Last;