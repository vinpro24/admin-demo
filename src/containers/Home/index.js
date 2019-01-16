import React from 'react';
import 'jquery';

import LeftSidebar from '../../components/LeftSidebar';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import Dashboard from './components/Dashboard';
import SiteVisit from './components/SiteVisit';
import MonthlyStats from './components/MonthlyStats';
import TodoList from './components/TodoList';
import Report from './components/Report';
import Weather from './components/Weather';

class Home extends React.PureComponent {
    render() {
        return (
            <div>
                <LeftSidebar />
                <div className="page-container">
                    <Topbar />
                    <main className='main-content bgc-grey-100'>
                        <div id='mainContent'>
                            <div className="row gap-20 masonry pos-r" data-masonry='{ "itemSelector": ".masonry-item", "columnWidth": ".masonry-sizer" }'>
                                <div className="masonry-sizer col-md-6"></div>
                                <Dashboard />
                                <SiteVisit />
                                <MonthlyStats />
                                <TodoList />
                                <Report />
                                <Weather />
                            </div>
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Home;
