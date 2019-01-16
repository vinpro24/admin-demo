import React from 'react';
import PerfectScrollbar from 'perfect-scrollbar';

import LeftSidebar from '../../components/LeftSidebar';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';

import '../../assets/static/js/fullcalendar/fullcalendar.min.js';
import '../../assets/static/js/fullcalendar/fullcalendar.min.css';

class Email extends React.PureComponent {

    componentDidMount() {
        const scrollables = $('.scrollable');
        if (scrollables.length > 0) {
            scrollables.each((index, el) => {
                new PerfectScrollbar(el);
            });
        }
    }

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
                                    <div className="email-wrapper row remain-height bgc-white ov-h">
                                        <div className="email-list h-100 layers">
                                            <div className="layer w-100">
                                                <div className="bgc-grey-100 peers ai-c jc-sb p-20 fxw-nw">
                                                    <div className="peer">
                                                        <div className="btn-group" role="group">
                                                            <button type="button" className="email-side-toggle d-n@md+ btn bgc-white bdrs-2 mR-3 cur-p">
                                                                <i className="ti-menu"></i>
                                                            </button>
                                                            <button type="button" className="btn bgc-white bdrs-2 mR-3 cur-p">
                                                                <i className="ti-folder"></i>
                                                            </button>
                                                            <button type="button" className="btn bgc-white bdrs-2 mR-3 cur-p">
                                                                <i className="ti-tag"></i>
                                                            </button>
                                                            <div className="btn-group" role="group">
                                                                <button id="btnGroupDrop1" type="button" className="btn cur-p bgc-white no-after dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="ti-more-alt"></i>
                                                                </button>
                                                                <ul className="dropdown-menu fsz-sm" aria-labelledby="btnGroupDrop1">
                                                                    <li>
                                                                        <a href="" className="d-b td-n pY-5 pX-10 bgcH-grey-100 c-grey-700">
                                                                            <i className="ti-trash mR-10"></i>
                                                                            <span>Delete</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="" className="d-b td-n pY-5 pX-10 bgcH-grey-100 c-grey-700">
                                                                            <i className="ti-alert mR-10"></i>
                                                                            <span>Mark as Spam</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="" className="d-b td-n pY-5 pX-10 bgcH-grey-100 c-grey-700">
                                                                            <i className="ti-star mR-10"></i>
                                                                            <span>Star</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="peer">
                                                        <div className="btn-group" role="group">
                                                            <button type="button" className="fsz-xs btn bgc-white bdrs-2 mR-3 cur-p">
                                                                <i className="ti-angle-left"></i>
                                                            </button>
                                                            <button type="button" className="fsz-xs btn bgc-white bdrs-2 mR-3 cur-p">
                                                                <i className="ti-angle-right"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="layer w-100">
                                                <div className="bdT bdB">
                                                    <input type="text" className="form-control m-0 bdw-0 pY-15 pX-20" placeholder="Search..." />
                                                </div>
                                            </div>
                                            <div className="layer w-100 fxg-1 scrollable pos-r">
                                                <div className="">
                                                    <div className="email-list-item peers fxw-nw p-20 bdB bgcH-grey-100 cur-p">
                                                        <div className="peer mR-10">
                                                            <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                                                                <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer" />
                                                                <label htmlFor="inputCall1" className=" peers peer-greed js-sb ai-c"></label>
                                                            </div>
                                                        </div>
                                                        <div className="peer peer-greed ov-h">
                                                            <div className="peers ai-c">
                                                                <div className="peer peer-greed">
                                                                    <h6>John Doe</h6>
                                                                </div>
                                                                <div className="peer">
                                                                    <small>1 min ago</small>
                                                                </div>
                                                            </div>
                                                            <h5 className="fsz-def tt-c c-grey-900">title goes here</h5>
                                                            <span className="whs-nw w-100 ov-h tov-e d-b">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</span>
                                                        </div>
                                                    </div>
                                                    <div className="email-list-item peers fxw-nw p-20 bdB bgcH-grey-100 cur-p">
                                                        <div className="peer mR-10">
                                                            <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                                                                <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer" />
                                                                <label htmlFor="inputCall1" className=" peers peer-greed js-sb ai-c"></label>
                                                            </div>
                                                        </div>
                                                        <div className="peer peer-greed ov-h">
                                                            <div className="peers ai-c">
                                                                <div className="peer peer-greed">
                                                                    <h6>John Doe</h6>
                                                                </div>
                                                                <div className="peer">
                                                                    <small>1 min ago</small>
                                                                </div>
                                                            </div>
                                                            <h5 className="fsz-def tt-c c-grey-900">title goes here</h5>
                                                            <span className="whs-nw w-100 ov-h tov-e d-b">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</span>
                                                        </div>
                                                    </div>
                                                    <div className="email-list-item peers fxw-nw p-20 bdB bgcH-grey-100 cur-p">
                                                        <div className="peer mR-10">
                                                            <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                                                                <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer" />
                                                                <label htmlFor="inputCall1" className=" peers peer-greed js-sb ai-c"></label>
                                                            </div>
                                                        </div>
                                                        <div className="peer peer-greed ov-h">
                                                            <div className="peers ai-c">
                                                                <div className="peer peer-greed">
                                                                    <h6>John Doe</h6>
                                                                </div>
                                                                <div className="peer">
                                                                    <small>1 min ago</small>
                                                                </div>
                                                            </div>
                                                            <h5 className="fsz-def tt-c c-grey-900">title goes here</h5>
                                                            <span className="whs-nw w-100 ov-h tov-e d-b">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</span>
                                                        </div>
                                                    </div>
                                                    <div className="email-list-item peers fxw-nw p-20 bdB bgcH-grey-100 cur-p">
                                                        <div className="peer mR-10">
                                                            <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                                                                <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer" />
                                                                <label htmlFor="inputCall1" className=" peers peer-greed js-sb ai-c"></label>
                                                            </div>
                                                        </div>
                                                        <div className="peer peer-greed ov-h">
                                                            <div className="peers ai-c">
                                                                <div className="peer peer-greed">
                                                                    <h6>John Doe</h6>
                                                                </div>
                                                                <div className="peer">
                                                                    <small>1 min ago</small>
                                                                </div>
                                                            </div>
                                                            <h5 className="fsz-def tt-c c-grey-900">title goes here</h5>
                                                            <span className="whs-nw w-100 ov-h tov-e d-b">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</span>
                                                        </div>
                                                    </div>
                                                    <div className="email-list-item peers fxw-nw p-20 bdB bgcH-grey-100 cur-p">
                                                        <div className="peer mR-10">
                                                            <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                                                                <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer" />
                                                                <label htmlFor="inputCall1" className=" peers peer-greed js-sb ai-c"></label>
                                                            </div>
                                                        </div>
                                                        <div className="peer peer-greed ov-h">
                                                            <div className="peers ai-c">
                                                                <div className="peer peer-greed">
                                                                    <h6>John Doe</h6>
                                                                </div>
                                                                <div className="peer">
                                                                    <small>1 min ago</small>
                                                                </div>
                                                            </div>
                                                            <h5 className="fsz-def tt-c c-grey-900">title goes here</h5>
                                                            <span className="whs-nw w-100 ov-h tov-e d-b">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</span>
                                                        </div>
                                                    </div>
                                                    <div className="email-list-item peers fxw-nw p-20 bdB bgcH-grey-100 cur-p">
                                                        <div className="peer mR-10">
                                                            <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                                                                <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer" />
                                                                <label htmlFor="inputCall1" className=" peers peer-greed js-sb ai-c"></label>
                                                            </div>
                                                        </div>
                                                        <div className="peer peer-greed ov-h">
                                                            <div className="peers ai-c">
                                                                <div className="peer peer-greed">
                                                                    <h6>John Doe</h6>
                                                                </div>
                                                                <div className="peer">
                                                                    <small>1 min ago</small>
                                                                </div>
                                                            </div>
                                                            <h5 className="fsz-def tt-c c-grey-900">title goes here</h5>
                                                            <span className="whs-nw w-100 ov-h tov-e d-b">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</span>
                                                        </div>
                                                    </div>
                                                    <div className="email-list-item peers fxw-nw p-20 bdB bgcH-grey-100 cur-p">
                                                        <div className="peer mR-10">
                                                            <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                                                                <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer" />
                                                                <label htmlFor="inputCall1" className=" peers peer-greed js-sb ai-c"></label>
                                                            </div>
                                                        </div>
                                                        <div className="peer peer-greed ov-h">
                                                            <div className="peers ai-c">
                                                                <div className="peer peer-greed">
                                                                    <h6>John Doe</h6>
                                                                </div>
                                                                <div className="peer">
                                                                    <small>1 min ago</small>
                                                                </div>
                                                            </div>
                                                            <h5 className="fsz-def tt-c c-grey-900">title goes here</h5>
                                                            <span className="whs-nw w-100 ov-h tov-e d-b">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</span>
                                                        </div>
                                                    </div>
                                                    <div className="email-list-item peers fxw-nw p-20 bdB bgcH-grey-100 cur-p">
                                                        <div className="peer mR-10">
                                                            <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                                                                <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer" />
                                                                <label htmlFor="inputCall1" className=" peers peer-greed js-sb ai-c"></label>
                                                            </div>
                                                        </div>
                                                        <div className="peer peer-greed ov-h">
                                                            <div className="peers ai-c">
                                                                <div className="peer peer-greed">
                                                                    <h6>John Doe</h6>
                                                                </div>
                                                                <div className="peer">
                                                                    <small>1 min ago</small>
                                                                </div>
                                                            </div>
                                                            <h5 className="fsz-def tt-c c-grey-900">title goes here</h5>
                                                            <span className="whs-nw w-100 ov-h tov-e d-b">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</span>
                                                        </div>
                                                    </div>
                                                    <div className="email-list-item peers fxw-nw p-20 bdB bgcH-grey-100 cur-p">
                                                        <div className="peer mR-10">
                                                            <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                                                                <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer" />
                                                                <label htmlFor="inputCall1" className=" peers peer-greed js-sb ai-c"></label>
                                                            </div>
                                                        </div>
                                                        <div className="peer peer-greed ov-h">
                                                            <div className="peers ai-c">
                                                                <div className="peer peer-greed">
                                                                    <h6>John Doe</h6>
                                                                </div>
                                                                <div className="peer">
                                                                    <small>1 min ago</small>
                                                                </div>
                                                            </div>
                                                            <h5 className="fsz-def tt-c c-grey-900">title goes here</h5>
                                                            <span className="whs-nw w-100 ov-h tov-e d-b">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</span>
                                                        </div>
                                                    </div>
                                                    <div className="email-list-item peers fxw-nw p-20 bdB bgcH-grey-100 cur-p">
                                                        <div className="peer mR-10">
                                                            <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                                                                <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer" />
                                                                <label htmlFor="inputCall1" className=" peers peer-greed js-sb ai-c"></label>
                                                            </div>
                                                        </div>
                                                        <div className="peer peer-greed ov-h">
                                                            <div className="peers ai-c">
                                                                <div className="peer peer-greed">
                                                                    <h6>John Doe</h6>
                                                                </div>
                                                                <div className="peer">
                                                                    <small>1 min ago</small>
                                                                </div>
                                                            </div>
                                                            <h5 className="fsz-def tt-c c-grey-900">title goes here</h5>
                                                            <span className="whs-nw w-100 ov-h tov-e d-b">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</span>
                                                        </div>
                                                    </div>
                                                    <div className="email-list-item peers fxw-nw p-20 bdB bgcH-grey-100 cur-p">
                                                        <div className="peer mR-10">
                                                            <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                                                                <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer" />
                                                                <label htmlFor="inputCall1" className=" peers peer-greed js-sb ai-c"></label>
                                                            </div>
                                                        </div>
                                                        <div className="peer peer-greed ov-h">
                                                            <div className="peers ai-c">
                                                                <div className="peer peer-greed">
                                                                    <h6>John Doe</h6>
                                                                </div>
                                                                <div className="peer">
                                                                    <small>1 min ago</small>
                                                                </div>
                                                            </div>
                                                            <h5 className="fsz-def tt-c c-grey-900">title goes here</h5>
                                                            <span className="whs-nw w-100 ov-h tov-e d-b">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</span>
                                                        </div>
                                                    </div>
                                                    <div className="email-list-item peers fxw-nw p-20 bdB bgcH-grey-100 cur-p">
                                                        <div className="peer mR-10">
                                                            <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                                                                <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer" />
                                                                <label htmlFor="inputCall1" className=" peers peer-greed js-sb ai-c"></label>
                                                            </div>
                                                        </div>
                                                        <div className="peer peer-greed ov-h">
                                                            <div className="peers ai-c">
                                                                <div className="peer peer-greed">
                                                                    <h6>John Doe</h6>
                                                                </div>
                                                                <div className="peer">
                                                                    <small>1 min ago</small>
                                                                </div>
                                                            </div>
                                                            <h5 className="fsz-def tt-c c-grey-900">title goes here</h5>
                                                            <span className="whs-nw w-100 ov-h tov-e d-b">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="email-content h-100">
                                            <div className="h-100 scrollable pos-r">
                                                <div className="bgc-grey-100 peers ai-c jc-sb p-20 fxw-nw d-n@md+">
                                                    <div className="peer">
                                                        <div className="btn-group" role="group">
                                                            <button type="button" className="back-to-mailbox btn bgc-white bdrs-2 mR-3 cur-p">
                                                                <i className="ti-angle-left"></i>
                                                            </button>
                                                            <button type="button" className="btn bgc-white bdrs-2 mR-3 cur-p">
                                                                <i className="ti-folder"></i>
                                                            </button>
                                                            <button type="button" className="btn bgc-white bdrs-2 mR-3 cur-p">
                                                                <i className="ti-tag"></i>
                                                            </button>
                                                            <div className="btn-group" role="group">
                                                                <button id="btnGroupDrop1" type="button" className="btn cur-p bgc-white no-after dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <i className="ti-more-alt"></i>
                                                                </button>
                                                                <ul className="dropdown-menu fsz-sm" aria-labelledby="btnGroupDrop1">
                                                                    <li>
                                                                        <a href="" className="d-b td-n pY-5 pX-10 bgcH-grey-100 c-grey-700">
                                                                            <i className="ti-trash mR-10"></i>
                                                                            <span>Delete</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="" className="d-b td-n pY-5 pX-10 bgcH-grey-100 c-grey-700">
                                                                            <i className="ti-alert mR-10"></i>
                                                                            <span>Mark as Spam</span>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="" className="d-b td-n pY-5 pX-10 bgcH-grey-100 c-grey-700">
                                                                            <i className="ti-star mR-10"></i>
                                                                            <span>Star</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="peer">
                                                        <div className="btn-group" role="group">
                                                            <button type="button" className="fsz-xs btn bgc-white bdrs-2 mR-3 cur-p">
                                                                <i className="ti-angle-left"></i>
                                                            </button>
                                                            <button type="button" className="fsz-xs btn bgc-white bdrs-2 mR-3 cur-p">
                                                                <i className="ti-angle-right"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="email-content-wrapper">
                                                    {/* Header */}
                                                    <div className="peers ai-c jc-sb pX-40 pY-30">
                                                        <div className="peers peer-greed">
                                                            <div className="peer mR-20">
                                                                <img className="bdrs-50p w-3r h-3r" alt="" src="https://randomuser.me/api/portraits/men/11.jpg" />
                                                            </div>
                                                            <div className="peer">
                                                                <small>Nov, 02 2017</small>
                                                                <h5 className="c-grey-900 mB-5">John Doe</h5>
                                                                <span>To: email@gmail.com</span>
                                                            </div>
                                                        </div>
                                                        <div className="peer">
                                                            <a href="" className="btn btn-danger bdrs-50p p-15 lh-0">
                                                                <i className="fa fa-reply"></i>
                                                            </a>
                                                        </div>
                                                    </div>

                                                    {/* Content */}
                                                    <div className="bdT pX-40 pY-30">
                                                        <h4>Title of this email goes here</h4>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        </p>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                        </p>
                                                    </div>
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

export default Email;
