import React from 'react';

import LeftSidebar from '../../components/LeftSidebar';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';

import '../../assets/static/js/fullcalendar/fullcalendar.min.js';
import '../../assets/static/js/fullcalendar/fullcalendar.min.css';

class Calendar extends React.PureComponent {

    componentDidMount() {
        const date = new Date();
        const d = date.getDate();
        const m = date.getMonth();
        const y = date.getFullYear();

        const events = [{
            title: 'All Day Event',
            start: new Date(y, m, 1),
            desc: 'Meetings',
            bullet: 'success',
        }, {
            title: 'Long Event',
            start: new Date(y, m, d - 5),
            end: new Date(y, m, d - 2),
            desc: 'Hangouts',
            bullet: 'success',
        }, {
            title: 'Repeating Event',
            start: new Date(y, m, d - 3, 16, 0),
            allDay: false,
            desc: 'Product Checkup',
            bullet: 'warning',
        }, {
            title: 'Repeating Event',
            start: new Date(y, m, d + 4, 16, 0),
            allDay: false,
            desc: 'Conference',
            bullet: 'danger',
        }, {
            title: 'Birthday Party',
            start: new Date(y, m, d + 1, 19, 0),
            end: new Date(y, m, d + 1, 22, 30),
            allDay: false,
            desc: 'Gathering',
        }, {
            title: 'Click for Google',
            start: new Date(y, m, 28),
            end: new Date(y, m, 29),
            url: 'http ://google.com/',
            desc: 'Google',
            bullet: 'success',
        }];

        $('#full-calendar').fullCalendar({
            events,
            height: 800,
            editable: true,
            header: {
                left: 'month,agendaWeek,agendaDay',
                center: 'title',
                right: 'today prev,next',
            },
        });
    }

    render() {
        return (
            <div>
                <LeftSidebar />
                <div className="page-container">
                    <Topbar />
                    <main className='main-content bgc-grey-100'>
                        <div id='mainContent'>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="bdrs-3 ov-h bgc-white bd">
                                            <div className="bgc-deep-purple-500 ta-c p-30">
                                                <h1 className="fw-300 mB-5 lh-1 c-white">01<span className="fsz-def">st</span></h1>
                                                <h3 className="c-white">Monday</h3>
                                            </div>
                                            <div className="pos-r">
                                                <button type="button" className="mT-nv-50 pos-a r-10 t-2 btn cur-p bdrs-50p p-0 w-3r h-3r btn-warning">
                                                    <i className="ti-plus"></i>
                                                </button>
                                                <ul className="m-0 p-0 mT-20">
                                                    <li className="bdB peers ai-c jc-sb fxw-nw">
                                                        <a className="td-n p-20 peers fxw-nw mR-20 peer-greed c-grey-900" href="javascript:void(0);" data-toggle="modal" data-target="#calendar-edit">
                                                            <div className="peer mR-15">
                                                                <i className="fa fa-fw fa-clock-o c-red-500"></i>
                                                            </div>
                                                            <div className="peer">
                                                                <span className="fw-600">All Day Event</span>
                                                                <div className="c-grey-600">
                                                                    <span className="c-grey-700">Nov 01 - </span>
                                                                    <i>Website Development</i>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className="peers mR-15">
                                                            <div className="peer">
                                                                <a href="" className="td-n c-deep-purple-500 cH-blue-500 fsz-md p-5">
                                                                    <i className="ti-pencil"></i>
                                                                </a>
                                                            </div>
                                                            <div className="peer">
                                                                <a href="" className="td-n c-red-500 cH-blue-500 fsz-md p-5">
                                                                    <i className="ti-trash"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="bdB peers ai-c jc-sb fxw-nw">
                                                        <a className="td-n p-20 peers fxw-nw mR-20 peer-greed c-grey-900" href="javascript:void(0);" data-toggle="modal" data-target="#calendar-edit">
                                                            <div className="peer mR-15">
                                                                <i className="fa fa-fw fa-clock-o c-blue-500"></i>
                                                            </div>
                                                            <div className="peer">
                                                                <span className="fw-600">All Day Event</span>
                                                                <div className="c-grey-600">
                                                                    <span className="c-grey-700">Nov 01 - </span>
                                                                    <i>Website Development</i>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className="peers mR-15">
                                                            <div className="peer">
                                                                <a href="" className="td-n c-deep-purple-500 cH-blue-500 fsz-md p-5">
                                                                    <i className="ti-pencil"></i>
                                                                </a>
                                                            </div>
                                                            <div className="peer">
                                                                <a href="" className="td-n c-red-500 cH-blue-500 fsz-md p-5">
                                                                    <i className="ti-trash"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="bdB peers ai-c jc-sb fxw-nw">
                                                        <a className="td-n p-20 peers fxw-nw mR-20 peer-greed c-grey-900" href="javascript:void(0);" data-toggle="modal" data-target="#calendar-edit">
                                                            <div className="peer mR-15">
                                                                <i className="fa fa-fw fa-clock-o c-indigo-500"></i>
                                                            </div>
                                                            <div className="peer">
                                                                <span className="fw-600">All Day Event</span>
                                                                <div className="c-grey-600">
                                                                    <span className="c-grey-700">Nov 01 - </span>
                                                                    <i>Website Development</i>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className="peers mR-15">
                                                            <div className="peer">
                                                                <a href="" className="td-n c-deep-purple-500 cH-blue-500 fsz-md p-5">
                                                                    <i className="ti-pencil"></i>
                                                                </a>
                                                            </div>
                                                            <div className="peer">
                                                                <a href="" className="td-n c-red-500 cH-blue-500 fsz-md p-5">
                                                                    <i className="ti-trash"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="bdB peers ai-c jc-sb fxw-nw">
                                                        <a className="td-n p-20 peers fxw-nw mR-20 peer-greed c-grey-900" href="javascript:void(0);" data-toggle="modal" data-target="#calendar-edit">
                                                            <div className="peer mR-15">
                                                                <i className="fa fa-fw fa-clock-o c-green-500"></i>
                                                            </div>
                                                            <div className="peer">
                                                                <span className="fw-600">All Day Event</span>
                                                                <div className="c-grey-600">
                                                                    <span className="c-grey-700">Nov 01 - </span>
                                                                    <i>Website Development</i>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <div className="peers mR-15">
                                                            <div className="peer">
                                                                <a href="" className="td-n c-deep-purple-500 cH-blue-500 fsz-md p-5">
                                                                    <i className="ti-pencil"></i>
                                                                </a>
                                                            </div>
                                                            <div className="peer">
                                                                <a href="" className="td-n c-red-500 cH-blue-500 fsz-md p-5">
                                                                    <i className="ti-trash"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div id='full-calendar'></div>
                                    </div>
                                </div>
                                <div className="modal fade" id="calendar-edit">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="bd p-15">
                                                <h5 className="m-0">Add Event</h5>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <div className="form-group">
                                                        <label className="fw-500">Event title</label>
                                                        <input className="form-control bdc-grey-200" />
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <label className="fw-500">Start</label>
                                                            <div className="timepicker-input input-icon form-group">
                                                                <div className="input-group">
                                                                    <div className="input-group-addon bgc-white bd bdwR-0">
                                                                        <i className="ti-calendar"></i>
                                                                    </div>
                                                                    <input type="text" className="form-control bdc-grey-200 start-date" placeholder="Datepicker" data-provide="datepicker" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label className="fw-500">End</label>
                                                            <div className="timepicker-input input-icon form-group">
                                                                <div className="input-group">
                                                                    <div className="input-group-addon bgc-white bd bdwR-0">
                                                                        <i className="ti-calendar"></i>
                                                                    </div>
                                                                    <input type="text" className="form-control bdc-grey-200 end-date" placeholder="Datepicker" data-provide="datepicker" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="fw-500">Event title</label>
                                                        <textarea className="form-control bdc-grey-200" rows='5'></textarea>
                                                    </div>
                                                    <div className="text-right">
                                                        <button className="btn btn-primary cur-p" data-dismiss="modal">Done</button>
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

export default Calendar;
