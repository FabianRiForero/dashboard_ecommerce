import React, { useState, useEffect } from "react";
import Card from "./Card";

function CategoriesInDB() {
    const [categories, setCategories] = useState([]);
    const [state, setState] = useState(false);

    useEffect(() => {
        async function getCategories() {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/products/all`);
                const games = await response.json();
                const genres = Object.entries(games.meta.countByCategory.genre);
                const platforms = Object.entries(games.meta.countByCategory.platform);
                setCategories([{ genres, platforms }]);
                setState(true);
            } catch (error) {
                console.log(error);
            }
        }
        getCategories();
    }, []);

    return (
        <>
            {state ?
                <div className="row px-3">
                    {Object.keys(categories[0]).map((category, index) => {
                        return (
                            <div className="col-lg-6 mb-4" key={index}>
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h5 className="m-0 font-weight-bold text-gray-800">
                                            {category === 'genres' ? 'Generos' : category === 'platforms' ? 'Plataformas' : null}
                                        </h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            {categories[0][category].map((genre, index) => {
                                                const genre1 = { name: genre[0], quantity: genre[1], color: category === 'genres' ? 'secondary' : 'dark'};
                                                return <Card {...genre1} key={index} />;
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                :
                <>Cargando ...</>
            }
        </>
    );
}

export default CategoriesInDB;