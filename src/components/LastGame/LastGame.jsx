import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function LastGame({ id, name, description, image }) {
    return (
        <div className='row justify-content-center'>
            <div className="col-9 col-md-8 col-lg-6 mb-4 bg-white p-0 border">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800 text-center">Ultimo videojuego {name}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={`${process.env.REACT_APP_BACKEND_URL}/${image}`} alt={name} />
                    </div>
                    <p>{description}</p>
                    <Link className="btn btn-danger btn-block" rel="nofollow" to={`/product/${id}`}>Ver detalles del videojuego</Link>
                </div>
            </div>
        </div>
    )
}

LastGame.defaultProps = {
    id: 0,
    name: 'No Game',
    description: 'No description',
    image: ''
}

LastGame.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default LastGame;