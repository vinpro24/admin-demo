import React from 'react';

import LeftSidebar from '../../components/LeftSidebar';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';

class Blank extends React.PureComponent {

    render() {
        return (
            <div>
                <LeftSidebar />
                <div className="page-container">
                    <Topbar />
                    <main className='main-content bgc-grey-100'>
                        <div id='mainContent'>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Blank;
