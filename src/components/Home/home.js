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
                            <p>21st Century Skills is an online platform that helps people to acquire the most crucial 21st century skills that gives them an unfair advantage in the 21st century. <Link to="/signUp">Sign up now</Link> to get started.</p>
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
                                <h5 className="card-title">Discover</h5>
                                <p className="card-text">Unearth all your potentials and passions...</p>
                                <Link to="/discover" class="btn btn-primary">Discover</Link>
                            </div>
                        </div>
                        <div className="card col-md-4">
                            <img className="card-img-top" src={require("../../images/build.jpg")} alt="develop"/>
                            <div className="card-body">
                                <h5 className="card-title">Develop</h5>
                                <p className="card-text">Develop these potentials and passion by acquiring the most crucial 21st century skills...</p>
                                <Link to="/develop" class="btn btn-primary">Develop</Link>
                            </div>
                        </div>
                        <div className="card col-md-4">
                            <img className="card-img-top" src={require("../../images/use.jpg")} alt="use" />
                            <div className="card-body">
                                <h5 className="card-title">Use</h5>
                                <p className="card-text">Use your developed potentials to serve the world through entrepreneurship...</p>
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