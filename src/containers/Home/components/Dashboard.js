import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

class Dashboard extends React.PureComponent {
    render() {
        return (
            <div className="masonry-item  w-100">
                <div className="row gap-20">
                    {/* #Toatl Visits ==================== */}
                    <div className='col-md-3'>
                        <div className="layers bd bgc-white p-20">
                            <div className="layer w-100 mB-10">
                                <h6 className="lh-1">Total Visits</h6>
                            </div>
                            <div className="layer w-100">
                                <div className="peers ai-sb fxw-nw">
                                    <div className="peer peer-greed">
                                        <BarChart width={60} height={40} data={data}>
                                            <Bar dataKey='uv' fill='#4caf50' barSize={5} />
                                        </BarChart>
                                        {/* <span id="sparklinedash"></span> */}
                                    </div>
                                    <div className="peer">
                                        <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">+10%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* #Toatl Page Views ==================== */}
                    <div className='col-md-3'>
                        <div className="layers bd bgc-white p-20">
                            <div className="layer w-100 mB-10">
                                <h6 className="lh-1">Total Page Views</h6>
                            </div>
                            <div className="layer w-100">
                                <div className="peers ai-sb fxw-nw">
                                    <div className="peer peer-greed">
                                        <BarChart width={60} height={40} data={data}>
                                            <Bar dataKey='uv' fill='#f44336' barSize={5} />
                                        </BarChart>
                                    </div>
                                    <div className="peer">
                                        <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-red-50 c-red-500">-7%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* #Unique Visitors ==================== */}
                    <div className='col-md-3'>
                        <div className="layers bd bgc-white p-20">
                            <div className="layer w-100 mB-10">
                                <h6 className="lh-1">Unique Visitor</h6>
                            </div>
                            <div className="layer w-100">
                                <div className="peers ai-sb fxw-nw">
                                    <div className="peer peer-greed">
                                        <BarChart width={60} height={40} data={data}>
                                            <Bar dataKey='uv' fill='#9c27b0' barSize={5} />
                                        </BarChart>
                                    </div>
                                    <div className="peer">
                                        <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-purple-50 c-purple-500">~12%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* #Bounce Rate ==================== */}
                    <div className='col-md-3'>
                        <div className="layers bd bgc-white p-20">
                            <div className="layer w-100 mB-10">
                                <h6 className="lh-1">Bounce Rate</h6>
                            </div>
                            <div className="layer w-100">
                                <div className="peers ai-sb fxw-nw">
                                    <div className="peer peer-greed">
                                        <BarChart width={60} height={40} data={data}>
                                            <Bar dataKey='uv' fill='#2196f3' barSize={5} />
                                        </BarChart>
                                    </div>
                                    <div className="peer">
                                        <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-blue-50 c-blue-500">33%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
