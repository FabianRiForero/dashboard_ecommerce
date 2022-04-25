import React from 'react';
import { Link } from "react-router-dom"

function LastGame({id,name, description, image}){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo videojuego {name}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={`http://localhost:3001/${image}`} alt={name}/>
                    </div>
                    <p>{description}</p>
                    <Link className="btn btn-danger" rel="nofollow" to={`/api/product/${id}`}>Ver detalles del videojuego</Link>
                </div>
            </div>
        </div>
    )
}

export default LastGame;