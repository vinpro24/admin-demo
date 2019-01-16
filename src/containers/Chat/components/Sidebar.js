import React from 'react';

const Sidebar = props => {
    return (
        <div className="peer bdR" id="chat-sidebar">
            <div className="layers h-100">
                {/* Search */}
                <div className="bdB layer w-100">
                    <input type="text" placeholder="Search contacts..." name="chatSearch" className="form-constrol p-15 bdrs-0 w-100 bdw-0" />
                </div>

                {/* List */}
                <div className="layer w-100 fxg-1 scrollable pos-r">
                    <div className="peers fxw-nw ai-c p-20 bdB bgc-white bgcH-grey-50 cur-p">
                        <div className="peer">
                            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="" className="w-3r h-3r bdrs-50p" />
                        </div>
                        <div className="peer peer-greed pL-20">
                            <h6 className="mB-0 lh-1 fw-400">John Doe</h6>
                            <small className="lh-1 c-green-500">Online</small>
                        </div>
                    </div>
                    <div className="peers fxw-nw ai-c p-20 bdB bgc-white bgcH-grey-50 cur-p">
                        <div className="peer">
                            <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="" className="w-3r h-3r bdrs-50p" />
                        </div>
                        <div className="peer peer-greed pL-20">
                            <h6 className="mB-0 lh-1 fw-400">Moo Doe</h6>
                            <small className="lh-1 c-amber-500">Away</small>
                        </div>
                    </div>
                    <div className="peers fxw-nw ai-c p-20 bdB bgc-white bgcH-grey-50 cur-p">
                        <div className="peer">
                            <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="" className="w-3r h-3r bdrs-50p" />
                        </div>
                        <div className="peer peer-greed pL-20">
                            <h6 className="mB-0 lh-1 fw-400">Adam Jones</h6>
                            <small className="lh-1 c-grey-500">Offline</small>
                        </div>
                    </div>
                    <div className="peers fxw-nw ai-c p-20 bdB bgc-white bgcH-grey-50 cur-p">
                        <div className="peer">
                            <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="" className="w-3r h-3r bdrs-50p" />
                        </div>
                        <div className="peer peer-greed pL-20">
                            <h6 className="mB-0 lh-1 fw-400">Mizo Doe</h6>
                            <small className="lh-1 c-red-500">Busy</small>
                        </div>
                    </div>
                    <div className="peers fxw-nw ai-c p-20 bdB bgc-white bgcH-grey-50 cur-p">
                        <div className="peer">
                            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="" className="w-3r h-3r bdrs-50p" />
                        </div>
                        <div className="peer peer-greed pL-20">
                            <h6 className="mB-0 lh-1 fw-400">John Doe</h6>
                            <small className="lh-1 c-green-500">Online</small>
                        </div>
                    </div>
                    <div className="peers fxw-nw ai-c p-20 bdB bgc-white bgcH-grey-50 cur-p">
                        <div className="peer">
                            <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="" className="w-3r h-3r bdrs-50p" />
                        </div>
                        <div className="peer peer-greed pL-20">
                            <h6 className="mB-0 lh-1 fw-400">Moo Doe</h6>
                            <small className="lh-1 c-amber-500">Away</small>
                        </div>
                    </div>
                    <div className="peers fxw-nw ai-c p-20 bdB bgc-white bgcH-grey-50 cur-p">
                        <div className="peer">
                            <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="" className="w-3r h-3r bdrs-50p" />
                        </div>
                        <div className="peer peer-greed pL-20">
                            <h6 className="mB-0 lh-1 fw-400">Adam Jones</h6>
                            <small className="lh-1 c-grey-500">Offline</small>
                        </div>
                    </div>
                    <div className="peers fxw-nw ai-c p-20 bdB bgc-white bgcH-grey-50 cur-p">
                        <div className="peer">
                            <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="" className="w-3r h-3r bdrs-50p" />
                        </div>
                        <div className="peer peer-greed pL-20">
                            <h6 className="mB-0 lh-1 fw-400">Mizo Doe</h6>
                            <small className="lh-1 c-red-500">Busy</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
