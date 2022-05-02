import React from "react";
import PropTypes from "prop-types";

function Card({name,color,quantity}) {
    return (
        <div className="col-lg-6 mb-4">
            <div className={`card bg-${color} text-white shadow`}>
                <div className="card-body d-flex justify-content-between align-items-center">
                    <span>{name}</span>
                    <span>{quantity}</span>
                </div>
            </div>
        </div>
    );
}

Card.defaultProps = {
    name: 'undefined',
    color: 'dark',
    quantity: 0
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
}

export default Card;