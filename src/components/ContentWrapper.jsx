import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import ContentRowTop from './ContentRowTop';
function ContentWrapper() {
    return (
        <>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <Footer />
                </div>
            </div>    
        </>
    );
}

export default ContentWrapper;