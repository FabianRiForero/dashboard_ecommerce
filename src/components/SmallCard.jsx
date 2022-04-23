import React from 'react';

function SmallCard({title,color,quantity,icon}) {
    return (
        <>
            <div className="col-sm-6 col-lg-3 mb-3">
                <div className={`card border-left-${color} shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>{title} </div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800"> {quantity} </div>
                            </div>
                            <div className="col-auto">
                                <i className={`fas ${icon} fa-2x text-gray-300`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SmallCard;