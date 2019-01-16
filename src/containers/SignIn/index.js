import React from 'react';

class SignIn extends React.PureComponent {
    render() {
        return (
            <div className="peers ai-s fxw-nw h-100vh">
                <div className="d-n@sm- peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv" style={{ backgroundImage: `url(${require('../../assets/static/images/bg.jpg')})` }}>
                    <div className="pos-a centerXY">
                        <div className="bgc-white bdrs-50p pos-r" style={{ width: '120px', height: '120px' }}>
                            <img className="pos-a centerXY" src={require('../../assets/static/images/logo.png')} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style={{ minWidth: '320px' }}>
                    <h4 className="fw-300 c-grey-900 mB-40">Login</h4>
                    <form>
                        <div className="form-group">
                            <label className="text-normal text-dark">Username</label>
                            <input type="email" className="form-control" placeholder="John Doe" />
                        </div>
                        <div className="form-group">
                            <label className="text-normal text-dark">Password</label>
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <div className="peers ai-c jc-sb fxw-nw">
                                <div className="peer">
                                    <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                                        <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer" />
                                        <label for="inputCall1" className=" peers peer-greed js-sb ai-c">
                                            <span className="peer peer-greed">Remember Me</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="peer">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignIn;
