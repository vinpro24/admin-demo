import React from 'react';

import LeftSidebar from '../../components/LeftSidebar';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';

class Compose extends React.PureComponent {
    render() {
        return (
            <div>
                <LeftSidebar />
                <div className="page-container">
                    <Topbar />
                    <main className='main-content bgc-grey-100'>
                        <div id='mainContent'>
                            <div className="full-container">
                                <div className="email-app">
                                    <div className="email-side-nav remain-height ov-h">
                                        <div className="h-100 layers">
                                            <div className="p-20 bgc-grey-100 layer w-100">
                                                <a href="/compose" className="btn btn-danger btn-block">New Message</a>
                                            </div>
                                            <div className="scrollable pos-r bdT layer w-100 fxg-1">
                                                <ul className="p-20 nav flex-column">
                                                    <li className="nav-item">
                                                        <a href="javascript:void(0)" className="nav-link c-grey-800 cH-blue-500 active">
                                                            <div className="peers ai-c jc-sb">
                                                                <div className="peer peer-greed">
                                                                    <i className="mR-10 ti-email"></i>
                                                                    <span>Inbox</span>
                                                                </div>
                                                                <div className="peer">
                                                                    <span className="badge badge-pill bgc-deep-purple-50 c-deep-purple-700">+99</span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="" className="nav-link c-grey-800 cH-blue-500">
                                                            <div className="peers ai-c jc-sb">
                                                                <div className="peer peer-greed">
                                                                    <i className="mR-10 ti-share"></i>
                                                                    <span>Sent</span>
                                                                </div>
                                                                <div className="peer">
                                                                    <span className="badge badge-pill bgc-green-50 c-green-700">12</span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="" className="nav-link c-grey-800 cH-blue-500">
                                                            <div className="peers ai-c jc-sb">
                                                                <div className="peer peer-greed">
                                                                    <i className="mR-10 ti-star"></i>
                                                                    <span>Important</span>
                                                                </div>
                                                                <div className="peer">
                                                                    <span className="badge badge-pill bgc-blue-50 c-blue-700">3</span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="" className="nav-link c-grey-800 cH-blue-500">
                                                            <div className="peers ai-c jc-sb">
                                                                <div className="peer peer-greed">
                                                                    <i className="mR-10 ti-file"></i>
                                                                    <span>Drafts</span>
                                                                </div>
                                                                <div className="peer">
                                                                    <span className="badge badge-pill bgc-amber-50 c-amber-700">5</span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="" className="nav-link c-grey-800 cH-blue-500">
                                                            <div className="peers ai-c jc-sb">
                                                                <div className="peer peer-greed">
                                                                    <i className="mR-10 ti-alert"></i>
                                                                    <span>Spam</span>
                                                                </div>
                                                                <div className="peer">
                                                                    <span className="badge badge-pill bgc-red-50 c-red-700">1</span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="" className="nav-link c-grey-800 cH-blue-500">
                                                            <div className="peers ai-c jc-sb">
                                                                <div className="peer peer-greed">
                                                                    <i className="mR-10 ti-trash"></i>
                                                                    <span>Trash</span>
                                                                </div>
                                                                <div className="peer">
                                                                    <span className="badge badge-pill bgc-red-50 c-red-700">+99</span>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="email-wrapper row remain-height pos-r scrollable bgc-white">
                                        <div className="email-content open no-inbox-view">
                                            <div className="email-compose">
                                                <div className="d-n@md+ p-20">
                                                    <a className="email-side-toggle c-grey-900 cH-blue-500 td-n" href="javascript:void(0)">
                                                        <i className="ti-menu"></i>
                                                    </a>
                                                </div>
                                                <form className="email-compose-body">
                                                    <h4 className="c-grey-900 mB-20">Send Message</h4>
                                                    <div className="send-header">
                                                        <div className="form-group">
                                                            <input type="text" className='form-control' placeholder="To" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" className='form-control' placeholder="CC" />
                                                        </div>
                                                        <div className="form-group">
                                                            <input className="form-control" placeholder="Email Subject" />
                                                        </div>
                                                        <div className="form-group">
                                                            <textarea name="compose" className="form-control" placeholder="Say Hi..." rows='10'></textarea>
                                                        </div>
                                                    </div>
                                                    <div id="compose-area"></div>
                                                    <div className="text-right mrg-top-30">
                                                        <button className="btn btn-danger">Send</button>
                                                    </div>
                                                </form>
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

export default Compose;
