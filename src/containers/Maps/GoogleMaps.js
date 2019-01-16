import React from 'react';

import LeftSidebar from '../../components/LeftSidebar';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import GoogleMapView from './components/GoogleMapView';

class GoogleMaps extends React.PureComponent {
    render() {
        return (
            <div>
                <LeftSidebar />
                <div className="page-container">
                    <Topbar />
                    <main className='main-content bgc-grey-100'>
                        <div id='mainContent'>
                            <div className="container-fluid">
                                <h4 className="c-grey-900 mT-10 mB-30">Google Maps</h4>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="bgc-white bd bdrs-3 p-20 mB-20">
                                            <h6 className="c-grey-900 mB-20">Google Maps</h6>
                                            <GoogleMapView
                                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDW8td30_gj6sGXjiMU0ALeMu1SDEwUnEA&v=3.exp&libraries=geometry,drawing,places"
                                                loadingElement={<div style={{ height: `100%` }} />}
                                                containerElement={<div style={{ height: `400px` }} />}
                                                mapElement={<div style={{ height: `100%` }} />}
                                            />
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

export default GoogleMaps;
