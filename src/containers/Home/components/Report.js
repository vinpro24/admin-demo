import React from 'react';

const Report = props => {
    return (
        <div className="masonry-item col-md-6">
            <div className="bd bgc-white">
                <div className="layers">
                    <div className="layer w-100 p-20">
                        <h6 className="lh-1">Sales Report</h6>
                    </div>
                    <div className="layer w-100">
                        <div className="bgc-light-blue-500 c-white p-20">
                            <div className="peers ai-c jc-sb gap-40">
                                <div className="peer peer-greed">
                                    <h5>November 2017</h5>
                                    <p className="mB-0">Sales Report</p>
                                </div>
                                <div className="peer">
                                    <h3 className="text-right">$6,000</h3>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive p-20">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className=" bdwT-0">Name</th>
                                        <th className=" bdwT-0">Status</th>
                                        <th className=" bdwT-0">Date</th>
                                        <th className=" bdwT-0">Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="fw-600">Item #1 Name</td>
                                        <td>
                                            <span className="badge bgc-red-50 c-red-700 p-10 lh-0 tt-c badge-pill">Unavailable</span>
                                        </td>
                                        <td>Nov 18</td>
                                        <td>
                                            <span className="text-success">$12</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="fw-600">Item #2 Name</td>
                                        <td>
                                            <span className="badge bgc-deep-purple-50 c-deep-purple-700 p-10 lh-0 tt-c badge-pill">New</span>
                                        </td>
                                        <td>Nov 19</td>
                                        <td>
                                            <span className="text-info">$34</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="fw-600">Item #3 Name</td>
                                        <td>
                                            <span className="badge bgc-pink-50 c-pink-700 p-10 lh-0 tt-c badge-pill">New</span>
                                        </td>
                                        <td>Nov 20</td>
                                        <td>
                                            <span className="text-danger">-$45</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="fw-600">Item #4 Name</td>
                                        <td>
                                            <span className="badge bgc-green-50 c-green-700 p-10 lh-0 tt-c badge-pill">Unavailable</span>
                                        </td>
                                        <td>Nov 21</td>
                                        <td>
                                            <span className="text-success">$65</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="fw-600">Item #5 Name</td>
                                        <td>
                                            <span className="badge bgc-red-50 c-red-700 p-10 lh-0 tt-c badge-pill">Used</span>
                                        </td>
                                        <td>Nov 22</td>
                                        <td>
                                            <span className="text-success">$78</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="fw-600">Item #6 Name</td>
                                        <td>
                                            <span className="badge bgc-orange-50 c-orange-700 p-10 lh-0 tt-c badge-pill">Used</span>
                                        </td>
                                        <td>Nov 23</td>
                                        <td>
                                            <span className="text-danger">-$88</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="fw-600">Item #7 Name</td>
                                        <td>
                                            <span className="badge bgc-yellow-50 c-yellow-700 p-10 lh-0 tt-c badge-pill">Old</span>
                                        </td>
                                        <td>Nov 22</td>
                                        <td>
                                            <span className="text-success">$56</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="ta-c bdT w-100 p-20">
                    <a href="#">Check all the sales</a>
                </div>
            </div>
        </div>
    );
}

export default Report;
