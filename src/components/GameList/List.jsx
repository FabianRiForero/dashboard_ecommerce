import React, { useState, useEffect } from "react";
import GameRow from "./GameRow";

function List() {
    const [games, setGames] = useState([]);
    const [state, setState] = useState(false);

    useEffect(() => {
        async function getGames() {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/products/all`);
                const games = await response.json();
                setGames(games.data);
                setState(true);
            } catch (error) {
                console.log(error);
            }
        }
        getGames();
    }, [state]);
    return (
        <>
            {state ?
                games && games.length > 0 ?
                    <>
                        <div className="table-responsive px-5">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Total Generos</th>
                                        <th>Total Plataformas</th>
                                        <th>Accion</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Total Generos</th>
                                        <th>Total Plataformas</th>
                                        <th>Accion</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    {games.map((game, index) => {
                                        return <GameRow {...game} key={index} />
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </>
                    :
                    <>No hay juegos por el momento, revise mas tarde</>
                :
                <>Cargando 123 ...</>
            }
        </>
    );
}

export default List;