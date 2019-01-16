import React from 'react';

import LeftSidebar from '../../components/LeftSidebar';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import Sidebar from './components/Sidebar';
import ChatBox from './components/ChatBox';

class Chat extends React.PureComponent {
    render() {
        return (
            <div>
                <LeftSidebar />
                <div className="page-container">
                    <Topbar />
                    <main class='main-content bgc-grey-100'>
                        <div id='mainContent'>
                            <div class="full-container">
                                <div class="peers fxw-nw pos-r">
                                    <Sidebar />
                                    <ChatBox />
                                </div>
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Chat;
