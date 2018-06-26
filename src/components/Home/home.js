import React from 'react';
import {Link} from 'react-router-dom';

import Footer from './footer';

const Home = () => {
    return (
        <div>
            <header className="main-header">
                <h1>21st Century Skills</h1>
            </header>
            <section className="the-21st-skills">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>What is 21st Century Skills?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Clinics</h2>
                        </div>
                    </div>
                    <div className="row">
                    <div className="card col-md-4">
                            <img className="card-img-top" src={require("../../images/discover.jpg")} alt="discover" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/discover" class="btn btn-primary">Discover</Link>
                            </div>
                        </div>
                        <div className="card col-md-4">
                            <img className="card-img-top" src={require("../../images/build.jpg")} alt="develop"/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/develop" class="btn btn-primary">Develop</Link>
                            </div>
                        </div>
                        <div className="card col-md-4">
                            <img className="card-img-top" src={require("../../images/use.jpg")} alt="use" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/use" class="btn btn-primary">Use</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home;