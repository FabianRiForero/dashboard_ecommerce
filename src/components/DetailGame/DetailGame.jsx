import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetailGame() {
    const { id } = useParams();
    const [game, setGame] = useState({

    });
    const [state, setState] = useState(false)

    useEffect(() => {
        async function getGame() {
            const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
            const response = await fetch(`${BACKEND_URL}/api/products/${id}`);
            const game = await response.json();
            console.log(game.data);
            setGame(game.data);
            setState(true);
        }
        getGame();
    }, [id]);

    return (
        <>
            {state ?
                Object.keys(game).length > 0 ?
                    <div className="row">
                        <div className="col-12 px-5">
                            <h1 className="h1">{game.name}</h1>
                            <div className="row py-3">
                                <div className="col-md-6 px-5 d-flex align-items-center">
                                    <img className="img-fluid" src={`${process.env.REACT_APP_BACKEND_URL}${game.image}`} alt={game.name} />
                                </div>
                                <div className="col-md-6 d-flex align-items-center">
                                    {game.description}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1 px-3 h5">SKU:</div>
                                <div className="col-3 px-3 h5">{game.sku}</div>
                                <div className="col-1 px-3 h5">Precio:</div>
                                <div className="col-3 px-3 h5">$ {game.price}</div>
                                <div className="col-1 px-3 h5">Stock:</div>
                                <div className="col-3 px-3 h5">{game.stock}</div>
                                <div className="col-6"></div>
                            </div>
                            <div className="row py-3">
                                {game.genres.length > 0 &&
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-12">
                                                <h2 className="h3 d-block">Generos</h2>
                                            </div>
                                            <div>
                                                {game.genres.map((genre,index) => {
                                                    return (
                                                        <p className="btn btn-primary mx-2" key={index}>{genre.name}</p>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                }
                                {game.platforms.length > 0 &&
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-12">
                                                <h2 className="h3 d-block">Plataformas</h2>
                                            </div>
                                            <div>
                                                {game.platforms.map((platform,index) => {
                                                    return (
                                                        <p className="btn btn-secondary mx-2" key={index}>{platform.name}</p>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <h1 className="text-center py-5">Game No Found</h1>
                :
                <>Cargando...</>
            }
        </>
    );

}

export default DetailGame;