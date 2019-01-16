import React from 'react';
import { Link } from 'react-router-dom';

class SidebarMenu extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: ''
        };
    }

    componentDidMount() {
        $('.sidebar .sidebar-menu li a').on('click', function () {
            const $this = $(this);
            if ($this.parent().hasClass('open')) {
                $this.parent().children('.dropdown-menu').slideUp(200, () => {
                    $this.parent().removeClass('open');
                });
            } else {
                $this.parent().parent().children('li.open').children('.dropdown-menu').slideUp(200);
                $this.parent().parent().children('li.open').children('a').removeClass('open');
                $this.parent().parent().children('li.open').removeClass('open');
                $this.parent().children('.dropdown-menu').slideDown(200, () => {
                    $this.parent().addClass('open');
                });
            }
        });
    }

    render() {
        return (
            <ul className="sidebar-menu scrollable pos-r">
                <li className="nav-item mT-30 active">
                    <Link to="/" className='sidebar-link'>
                        <span className="icon-holder">
                            <i className="c-blue-500 ti-home"></i>
                        </span>
                        <span className="title">Dashboard</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/email" className='sidebar-link'>
                        <span className="icon-holder">
                            <i className="c-brown-500 ti-email"></i>
                        </span>
                        <span className="title">Email</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/compose" className='sidebar-link'>
                        <span className="icon-holder">
                            <i className="c-blue-500 ti-share"></i>
                        </span>
                        <span className="title">Compose</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/calendar" className='sidebar-link'>
                        <span className="icon-holder">
                            <i className="c-deep-orange-500 ti-calendar"></i>
                        </span>
                        <span className="title">Calendar</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/chat" className='sidebar-link'>
                        <span className="icon-holder">
                            <i className="c-deep-purple-500 ti-comment-alt"></i>
                        </span>
                        <span className="title">Chat</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/charts" className='sidebar-link'>
                        <span className="icon-holder">
                            <i className="c-indigo-500 ti-bar-chart"></i>
                        </span>
                        <span className="title">Charts</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/forms" className='sidebar-link'>
                        <span className="icon-holder">
                            <i className="c-light-blue-500 ti-pencil"></i>
                        </span>
                        <span className="title">Forms</span>
                    </Link>
                </li>
                <li className="nav-item dropdown">
                    <Link to="/ui-elements" className='sidebar-link'>
                        <span className="icon-holder">
                            <i className="c-pink-500 ti-palette"></i>
                        </span>
                        <span className="title">UI Elements</span>
                    </Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="dropdown-toggle" href="javascript:void(0);">
                        <span className="icon-holder">
                            <i className="c-orange-500 ti-layout-list-thumb"></i>
                        </span>
                        <span className="title">Tables</span>
                        <span className="arrow">
                            <i className="ti-angle-right"></i>
                        </span>
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                            <Link to="/basic-table" className='sidebar-link'>
                                <span>Basic Table</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/data-table" className='sidebar-link'>
                                <span>Data Table</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li className="nav-item dropdown">
                    <a className="dropdown-toggle" href="javascript:void(0);">
                        <span className="icon-holder">
                            <i className="c-purple-500 ti-map"></i>
                        </span>
                        <span className="title">Maps</span>
                        <span className="arrow">
                            <i className="ti-angle-right"></i>
                        </span>
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                            <Link to="/google-maps" className='sidebar-link'>
                                <span>Google Map</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/vector-maps" className='sidebar-link'>
                                <span>Vector Map</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="dropdown-toggle" href="javascript:void(0);">
                        <span className="icon-holder">
                            <i className="c-red-500 ti-files"></i>
                        </span>
                        <span className="title">Pages</span>
                        <span className="arrow">
                            <i className="ti-angle-right"></i>
                        </span>
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                            <Link to="/blank" className='sidebar-link'>
                                <span>Blank</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/404" className='sidebar-link'>
                                <span>404</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/500" className='sidebar-link'>
                                <span>500</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/signin" className='sidebar-link'>
                                <span>Sign In</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/signup" className='sidebar-link'>
                                <span>Sign Up</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="dropdown-toggle" href="javascript:void(0);">
                        <span className="icon-holder">
                            <i className="c-teal-500 ti-view-list-alt"></i>
                        </span>
                        <span className="title">Multiple Levels</span>
                        <span className="arrow">
                            <i className="ti-angle-right"></i>
                        </span>
                    </a>
                    <ul className="dropdown-menu">
                        <li className="nav-item dropdown">
                            <a href="javascript:void(0);">
                                <span>Menu Item</span>
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="javascript:void(0);">
                                <span>Menu Item</span>
                                <span className="arrow">
                                    <i className="ti-angle-right"></i>
                                </span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="javascript:void(0);">Menu Item</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">Menu Item</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul >
        );
    }
}

export default SidebarMenu;
