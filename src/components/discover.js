import React from 'react';
import {Link} from 'react-router-dom';

import Footer from './Home/footer';

const Discover = () => {
    return (
        <div>
            <section className="discover">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-center">Discover Yourself</h1>
                        </div>
                    </div>
                </div>
                <span></span>
            </section>
            <section>
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
                    </div>
                </div>
            </section>
 
            <section className="discover-form">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <form>
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Example label</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput2">Another label</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </div>
);
}

export default Discover;