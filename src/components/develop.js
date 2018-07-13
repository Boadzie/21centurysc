import React from 'react';
import {Link} from 'react-router-dom';

// COMPONENTS
import Footer from './Home/footer';

const Develop = () => {
    return (
        <div>
            <section className="develop">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-center">Develop</h1>
                        </div>
                    </div>
                </div>
                <span></span>
            </section>
            <section className="clinics">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title">Personal Clinic</h2>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <Link to="" className="btn btn-primary float-right">More...</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title">Personal Clinic</h2>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <Link to="" className="btn btn-primary float-right">More...</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title">Personal Clinic</h2>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <Link to="" className="btn btn-primary float-right">More...</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title">Personal Clinic</h2>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <Link to="" className="btn btn-primary float-right">More...</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Develop;