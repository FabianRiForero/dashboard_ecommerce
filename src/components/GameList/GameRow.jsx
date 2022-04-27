import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function GameRow({id, name, platforms, genres}){
    return(
        <tr>
            <td>{name}</td>
            <td>{genres}</td>
            <td>{platforms}</td>
            <td>
                <Link className="btn btn-info" to={`/product/${id}`}>Ver más detalles</Link>
            </td>
        </tr>
    );
}

GameRow.defaultProps = {
    id: 0,
    name: 'No Game',
    genres: 0,
    platforms: 0
}

GameRow.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    genres: PropTypes.number.isRequired,
    platforms: PropTypes.number.isRequired,
}

export default GameRow;