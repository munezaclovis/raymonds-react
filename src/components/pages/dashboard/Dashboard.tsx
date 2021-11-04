import React, { FC } from 'react'

const Dashboard: FC = () => {
    return (
        <>
            <div className="row clearfix">
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                        <div className="body">
                            <div className="w_summary">
                                <div className="s_chart">
                                    <span className="chart">
                                        {/* <ApexCharts /> */}
                                    </span>
                                </div>
                                <div className="s_detail">
                                    <h2 className="font700 mb-0">$15K</h2>
                                    <span>67% <i className="fa fa-level-up text-success"></i> Total income</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                        <div className="body">
                            <div className="w_summary">
                                <div className="s_chart">
                                    <span className="chart">{/* <ApexCharts /> */}</span>
                                </div>
                                <div className="s_detail">
                                    <h2 className="font700 mb-0">$1258</h2>
                                    <span>15% <i className="fa fa-level-up text-success"></i> Total Expense</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                        <div className="body">
                            <div className="w_summary">
                                <div className="s_chart">
                                    <span className="chart">{/* <ApexCharts /> */}</span>
                                </div>
                                <div className="s_detail">
                                    <h2 className="font700 mb-0">$2315</h2>
                                    <span>23% <i className="fa fa-level-up text-success"></i> Total Growth</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                        <div className="body">
                            <div className="w_summary">
                                <div className="s_chart">
                                    <span className="chart">{/* <ApexCharts /> */}</span>
                                </div>
                                <div className="s_detail">
                                    <h2 className="font700 mb-0">$1025</h2>
                                    <span>52% <i className="fa fa-level-up text-success"></i> Bounce Rate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row clearfix">
                <div className="col-12 col-sm-12">
                    <div className="card">
                        <div className="header">
                            <h2>Product Summary</h2>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-custom spacing5 mb-0">
                                <thead>
                                    <tr>
                                        <th>#No</th>
                                        <th>Client Name</th>
                                        <th>Product ID</th>
                                        <th>Product</th>
                                        <th>Product Cost</th>
                                        <th>Payment Mode</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>#01</td>
                                        <td>Sean Black</td>
                                        <td>PRO12345</td>
                                        <td>Mi LED Smart TV 4A 80</td>
                                        <td>$14,500</td>
                                        <td>Online Payment</td>
                                        <td><span className="badge badge-success">Delivered</span></td>
                                    </tr>
                                    <tr>
                                        <td>#02</td>
                                        <td>Evan Rees</td>
                                        <td>PRO8765</td>
                                        <td>Thomson R9 122cm (48 inch) Full HD LED TV </td>
                                        <td>$30,000</td>
                                        <td>Cash on delivered</td>
                                        <td><span className="badge badge-primary">Add Cart</span></td>
                                    </tr>
                                    <tr>
                                        <td>#03</td>
                                        <td>David Wallace</td>
                                        <td>PRO54321</td>
                                        <td>Vu 80cm (32 inch) HD Ready LED TV</td>
                                        <td>$13,200</td>
                                        <td>Online Payment</td>
                                        <td><span className="badge badge-warning">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td>#04</td>
                                        <td>Julia Bower</td>
                                        <td>PRO97654</td>
                                        <td>Micromax 81cm (32 inch) HD Ready LED TV</td>
                                        <td>$15,100</td>
                                        <td>Cash on delivered</td>
                                        <td><span className="badge badge-secondary">Delivering</span></td>
                                    </tr>
                                    <tr>
                                        <td>#05</td>
                                        <td>Kevin James</td>
                                        <td>PRO4532</td>
                                        <td>HP 200 Mouse &amp; Wireless Laptop Keyboard </td>
                                        <td>$5,987</td>
                                        <td>Online Payment</td>
                                        <td><span className="badge badge-danger">Shipped</span></td>
                                    </tr>
                                    <tr>
                                        <td>#06</td>
                                        <td>Theresa Wright</td>
                                        <td>PRO6789</td>
                                        <td>Digisol DG-HR3400 Router </td>
                                        <td>$11,987</td>
                                        <td>Cash on delivered</td>
                                        <td><span className="badge badge-success">Delivering</span></td>
                                    </tr>
                                    <tr>
                                        <td>#07</td>
                                        <td>Sebastian Black</td>
                                        <td>PRO4567</td>
                                        <td>Dell WM118 Wireless Optical Mouse</td>
                                        <td>$4,700</td>
                                        <td>Online Payment</td>
                                        <td><span className="badge badge-secondary">Add to Cart</span></td>
                                    </tr>
                                    <tr>
                                        <td>#08</td>
                                        <td>Kevin Glover</td>
                                        <td>PRO32156</td>
                                        <td>Dell 16 inch Laptop Backpack </td>
                                        <td>$678</td>
                                        <td>Cash On delivered</td>
                                        <td><span className="badge badge-cyan">Delivered</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard