import React from 'react';

import logo from '../../assets/static/images/logo.png';

class SidebarHeader extends React.PureComponent {
    render() {
        return (
            <div className="sidebar-logo">
                <div className="peers ai-c fxw-nw">
                    <div className="peer peer-greed">
                        <a className="sidebar-link td-n" href="/">
                            <div className="peers ai-c fxw-nw">
                                <div className="peer">
                                    <div className="logo">
                                        <img src={logo} alt="" />
                                    </div>
                                </div>
                                <div className="peer peer-greed">
                                    <h5 className="lh-1 mB-0 logo-text">Adminator</h5>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="peer">
                        <div className="mobile-toggle sidebar-toggle">
                            <a href="" className="td-n">
                                <i className="ti-arrow-circle-left"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SidebarHeader;
