import React from 'react';

class SignUp extends React.PureComponent {
    render() {
        return (
            <div className="peers ai-s fxw-nw h-100vh">
                <div className="peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv" style={{ backgroundImage: `url(${require('../../assets/static/images/bg.jpg')})` }}>
                    <div className="pos-a centerXY">
                        <div className="bgc-white bdrs-50p pos-r" style={{ width: '120px', height: '120px' }}>
                            <img className="pos-a centerXY" src={require('../../assets/static/images/logo.png')} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style={{ minWidth: '320px' }}>
                    <h4 className="fw-300 c-grey-900 mB-40">Register</h4>
                    <form>
                        <div className="form-group">
                            <label className="text-normal text-dark">Username</label>
                            <input type="text" className="form-control" Placeholder='John Doe' />
                        </div>
                        <div className="form-group">
                            <label className="text-normal text-dark">Email Address</label>
                            <input type="email" className="form-control" Placeholder='name@email.com' />
                        </div>
                        <div className="form-group">
                            <label className="text-normal text-dark">Password</label>
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label className="text-normal text-dark">Confirm Password</label>
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;
