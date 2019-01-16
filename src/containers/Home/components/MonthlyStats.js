import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'January', uv: 60, pv: 70, amt: 2400 },
    { name: 'February', uv: 30, pv: 13, amt: 2210 },
    { name: 'March', uv: 20, pv: 98, amt: 2290 },
    { name: 'April', uv: 27, pv: 39, amt: 2000 },
    { name: 'May', uv: 18, pv: 48, amt: 2181 },
    { name: 'June', uv: 23, pv: 38, amt: 2500 },
    { name: 'July', uv: 34, pv: 43, amt: 2100 },
];

const MonthlyStats = props => {
    return (
        <div className="masonry-item col-md-6">
            <div className="bd bgc-white">
                <div className="layers">
                    <div className="layer w-100 pX-20 pT-20">
                        <h6 className="lh-1">Monthly Stats</h6>
                    </div>
                    <div className="layer w-100 p-20">
                        <ResponsiveContainer width="100%" aspect={2}>
                            <LineChart
                                data={data}
                                margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis yAxisId="left" />
                                <YAxis yAxisId="right" orientation="right" />
                                <Tooltip />
                                <Legend />
                                <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="layer bdT p-20 w-100">
                        <div className="peers ai-c jc-c gapX-20">
                            <div className="peer">
                                <span className="fsz-def fw-600 mR-10 c-grey-800">10%
                          <i className="fa fa-level-up c-green-500"></i>
                                </span>
                                <small className="c-grey-500 fw-600">APPL</small>
                            </div>
                            <div className="peer fw-600">
                                <span className="fsz-def fw-600 mR-10 c-grey-800">2%
                          <i className="fa fa-level-down c-red-500"></i>
                                </span>
                                <small className="c-grey-500 fw-600">Average</small>
                            </div>
                            <div className="peer fw-600">
                                <span className="fsz-def fw-600 mR-10 c-grey-800">15%
                          <i className="fa fa-level-up c-green-500"></i>
                                </span>
                                <small className="c-grey-500 fw-600">Sales</small>
                            </div>
                            <div className="peer fw-600">
                                <span className="fsz-def fw-600 mR-10 c-grey-800">8%
                                    <i className="fa fa-level-down c-red-500"></i>
                                </span>
                                <small className="c-grey-500 fw-600">Profit</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MonthlyStats;
