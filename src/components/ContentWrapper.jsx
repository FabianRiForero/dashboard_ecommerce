import React from 'react';
import ContentRowTop from './ContentRowTop';
function ContentWrapper() {
    return (
        <>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <ContentRowTop />
                </div>
            </div>
        </>
    );
}

export default ContentWrapper;