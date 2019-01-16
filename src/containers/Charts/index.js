import React from 'react';

import LeftSidebar from '../../components/LeftSidebar';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';

class Charts extends React.PureComponent {
    render() {
        return (
            <div>
                <LeftSidebar />
                <div className="page-container">
                    <Topbar />
                    <main className='main-content bgc-grey-100'>
                        <div id='mainContent'>
                            <div className="row gap-20 masonry pos-r">
                                <div className="masonry-sizer col-md-6 pos-a"></div>
                                <div className="masonry-item col-md-6">
                                    <div className="bgc-white p-20 bd">
                                        <h6 className="c-grey-900">Line Chart</h6>
                                        <div className="mT-30">
                                            <canvas id="line-chart" height="220"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div className="masonry-item col-md-6">
                                    <div className="bgc-white p-20 bd">
                                        <h6 className="c-grey-900">Area Chart</h6>
                                        <div className="mT-30">
                                            <canvas id="area-chart" height="220"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div className="masonry-item col-md-6">
                                    <div className="bgc-white p-20 bd">
                                        <h6 className="c-grey-900">Scatter Chart</h6>
                                        <div className="mT-30">
                                            <canvas id="scatter-chart" height="220"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div className="masonry-item col-md-6">
                                    <div className="bgc-white p-20 bd">
                                        <h6 className="c-grey-900">Bar Chart</h6>
                                        <div className="mT-30">
                                            <canvas id="bar-chart" height="220"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div className="masonry-item col-md-6">
                                    <div className="bgc-white p-20 bd">
                                        <h6 className="c-grey-900">jQuery Sparkline</h6>
                                        <div className="mT-30">
                                            <div className="peers ai-c jc-sb fxw-nw bdB pY-15">
                                                <div className="peer">
                                                    <span>Spark Line</span>
                                                </div>
                                                <div className="peer">
                                                    <span className="sparkline">&nbsp;</span>
                                                </div>
                                            </div>
                                            <div className="peers ai-c jc-sb fxw-nw bdB pY-15">
                                                <div className="peer">
                                                    <span>Spark Bar</span>
                                                </div>
                                                <div className="peer">
                                                    <span className="sparkbar">&nbsp;</span>
                                                </div>
                                            </div>
                                            <div className="peers ai-c jc-sb fxw-nw bdB pY-15">
                                                <div className="peer">
                                                    <span>Spark Tristate</span>
                                                </div>
                                                <div className="peer">
                                                    <span className="sparktri">&nbsp;</span>
                                                </div>
                                            </div>
                                            <div className="peers ai-c jc-sb fxw-nw bdB pY-15">
                                                <div className="peer">
                                                    <span>Spark Discrete</span>
                                                </div>
                                                <div className="peer">
                                                    <span className="sparkdisc">&nbsp;</span>
                                                </div>
                                            </div>
                                            <div className="peers ai-c jc-sb fxw-nw bdB pY-15">
                                                <div className="peer">
                                                    <span>Spark Bullet</span>
                                                </div>
                                                <div className="peer">
                                                    <span className="sparkbull">&nbsp;</span>
                                                </div>
                                            </div>
                                            <div className="peers ai-c jc-sb fxw-nw pT-15">
                                                <div className="peer">
                                                    <span>Spark Box</span>
                                                </div>
                                                <div className="peer">
                                                    <span className="sparkbox">&nbsp;</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="masonry-item col-md-6">
                                    <div className="bgc-white p-20 bd">
                                        <h6 className="c-grey-900">Easy Pie Charts</h6>
                                        <div className="mT-30">
                                            <div className="peers mT-20 fxw-nw@lg+ jc-sb ta-c gap-10">
                                                <div className="peer">
                                                    <div className="easy-pie-chart" data-size='80' data-percent="75" data-bar-color='#f44336'>
                                                        <span></span>
                                                    </div>
                                                    <h6 className="fsz-sm">New Users</h6>
                                                </div>
                                                <div className="peer">
                                                    <div className="easy-pie-chart" data-size='80' data-percent="50" data-bar-color='#2196f3'>
                                                        <span></span>
                                                    </div>
                                                    <h6 className="fsz-sm">New Purchases</h6>
                                                </div>
                                                <div className="peer">
                                                    <div className="easy-pie-chart" data-size='80' data-percent="65" data-bar-color='#f44336'>
                                                        <span></span>
                                                    </div>
                                                    <h6 className="fsz-sm">New Customers</h6>
                                                </div>
                                                <div className="peer">
                                                    <div className="easy-pie-chart" data-size='80' data-percent="90" data-bar-color='#ff9800'>
                                                        <span></span>
                                                    </div>
                                                    <h6 className="fsz-sm">Bounce Rate</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default Charts;
