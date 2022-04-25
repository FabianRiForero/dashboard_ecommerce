import React from 'react';
import { Link } from "react-router-dom"

function LastUser({id,fullname,email, }){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo usuario registrado {fullname}</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <span>{fullname}</span> <br />
                        <>{email}</>
                    </div>
                
                    <Link className="btn btn-danger" rel="nofollow" to={`/users/${id}`}>Ver detalles del usuario</Link>
                </div>
            </div>
        </div>
    )
}

export default LastUser;