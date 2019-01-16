import React from 'react';

import SidebarHeader from './SidebarHeader';
import SidebarMenu from './SidebarMenu';

class LeftSidebar extends React.PureComponent {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar-inner">
                    <SidebarHeader />
                    <SidebarMenu />
                </div>
            </div>
        );
    }
}

export default LeftSidebar;
