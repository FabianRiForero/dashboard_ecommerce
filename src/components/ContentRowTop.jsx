import React from 'react';
import ContentRowGames from './ContentRowGames';

function ContentRowTop (){
    return(
        <>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowGames />
					{/* <ContentRowCenter /> */}
					{/* <Chart /> */}
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </>
    );
}

export default ContentRowTop;