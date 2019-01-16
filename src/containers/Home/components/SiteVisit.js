import React from 'react';
import ReactDOM from 'react-dom';
import PieChartView from '../../../components/PieChartView';

class SiteVisit extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            newUsers: [{ name: 'Tutors', value: 75, color: '#F1453D' }, { name: 'Students', value: 25, color: '#eee' }],
            newPurchases: [{ name: 'Tutors', value: 50, color: '#2B98F0' }, { name: 'Students', value: 50, color: '#eee' }],
            bounceRate: [{ name: 'Tutors', value: 90, color: '#2B98F0' }, { name: 'Students', value: 10, color: '#eee' }],
        };
    }

    componentDidMount() {
        const el = ReactDOM.findDOMNode(this.vMap);
        $(el).vectorMap({
            map: 'world_mill',
            backgroundColor: '#fff',
            borderColor: '#fff',
            borderOpacity: 0.25,
            borderWidth: 0,
            color: '#e6e6e6',
            regionStyle: {
                initial: {
                    fill: '#e4ecef',
                },
            },

            markerStyle: {
                initial: {
                    r: 7,
                    'fill': '#fff',
                    'fill-opacity': 1,
                    'stroke': '#000',
                    'stroke-width': 2,
                    'stroke-opacity': 0.4,
                },
            },

            markers: [{
                latLng: [21.00, 78.00],
                name: 'INDIA : 350',
            }, {
                latLng: [-33.00, 151.00],
                name: 'Australia : 250',
            }, {
                latLng: [36.77, -119.41],
                name: 'USA : 250',
            }, {
                latLng: [55.37, -3.41],
                name: 'UK   : 250',
            }, {
                latLng: [25.20, 55.27],
                name: 'UAE : 250',
            }],
            series: {
                regions: [{
                    values: {
                        'US': 298,
                        'SA': 200,
                        'AU': 760,
                        'IN': 200,
                        'GB': 120,
                    },
                    scale: ['#03a9f3', '#02a7f1'],
                    normalizeFunction: 'polynomial',
                }],
            },
            hoverOpacity: null,
            normalizeFunction: 'linear',
            zoomOnScroll: false,
            scaleColors: ['#b6d6ff', '#005ace'],
            selectedColor: '#c9dfaf',
            selectedRegions: [],
            enableZoom: false,
            hoverColor: '#fff',
        });
    }

    render() {
        const { newUsers, newPurchases, bounceRate } = this.state;
        return (
            <div className="masonry-item col-12">
                {/*  #Site Visits ====================  */}
                <div className="bd bgc-white">
                    <div className="peers fxw-nw@lg+ ai-s">
                        <div className="peer peer-greed w-70p@lg+ w-100@lg- p-20">
                            <div className="layers">
                                <div className="layer w-100 mB-10">
                                    <h6 className="lh-1">Site Visits</h6>
                                </div>
                                <div className="layer w-100">
                                    <div id="world-map-marker">
                                        <div id="vmap" ref={ref => this.vMap = ref} style={{ height: '490px', position: 'relative', overflow: 'hidden', backgroundColor: 'transparent' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="peer bdL p-20 w-30p@lg+ w-100p@lg-">
                            <div className="layers">
                                <div className="layer w-100">
                                    {/*  Progress Bars  */}
                                    <div className="layers">
                                        <div className="layer w-100">
                                            <h5 className="mB-5">100k</h5>
                                            <small className="fw-600 c-grey-700">Visitors From USA</small>
                                            <span className="pull-right c-grey-600 fsz-sm">50%</span>
                                            <div className="progress mT-10">
                                                <div className="progress-bar bgc-deep-purple-500" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                                                    style={{ width: '50%' }}>
                                                    <span className="sr-only">50% Complete</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="layer w-100 mT-15">
                                            <h5 className="mB-5">1M</h5>
                                            <small className="fw-600 c-grey-700">Visitors From Europe</small>
                                            <span className="pull-right c-grey-600 fsz-sm">80%</span>
                                            <div className="progress mT-10">
                                                <div className="progress-bar bgc-green-500" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '80%' }}>
                                                    <span className="sr-only">80% Complete</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="layer w-100 mT-15">
                                            <h5 className="mB-5">450k</h5>
                                            <small className="fw-600 c-grey-700">Visitors From Australia</small>
                                            <span className="pull-right c-grey-600 fsz-sm">40%</span>
                                            <div className="progress mT-10">
                                                <div className="progress-bar bgc-light-blue-500" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                                                    style={{ width: '40%' }}>
                                                    <span className="sr-only">40% Complete</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="layer w-100 mT-15">
                                            <h5 className="mB-5">1B</h5>
                                            <small className="fw-600 c-grey-700">Visitors From India</small>
                                            <span className="pull-right c-grey-600 fsz-sm">90%</span>
                                            <div className="progress mT-10">
                                                <div className="progress-bar bgc-blue-grey-500" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}>
                                                    <span className="sr-only">90% Complete</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*  Pie Charts  */}
                                    <div className="peers pT-20 mT-20 bdT fxw-nw@lg+ jc-sb ta-c gap-10">
                                        <div className="peer">
                                            <PieChartView
                                                data={newUsers}
                                                value={`${newUsers[0].value}%`}
                                                size={90}
                                                onMouseEnter={this.onPieEnter}
                                            />
                                            <h6 className="fsz-sm">New Users</h6>
                                        </div>
                                        <div className="peer" >
                                            <PieChartView
                                                data={newPurchases}
                                                value={`${newPurchases[0].value}%`}
                                                size={90}
                                                onMouseEnter={this.onPieEnter}
                                            />
                                            <h6 className="fsz-sm">New Purchases</h6>
                                        </div>
                                        <div className="peer">
                                            <PieChartView
                                                data={bounceRate}
                                                value={`${bounceRate[0].value}%`}
                                                size={90}
                                                onMouseEnter={this.onPieEnter}
                                            />
                                            <h6 className="fsz-sm">Bounce Rate</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }

}

export default SiteVisit;
