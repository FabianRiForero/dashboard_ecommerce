import React from 'react';
import CategoriesInDB from './Categories/CategoriesInDB';
import ContentRowTop from './ContentRowTop';
import List from './GameList/List';
import Last from './LastGame/Last';
import LastU from './LastUser/LastU';
function ContentWrapper() {
    return (
        <>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <ContentRowTop />
                    <Last />
                    <LastU />
                    <CategoriesInDB />
                    <List />
                </div>
            </div>
        </>
    );
}

export default ContentWrapper;