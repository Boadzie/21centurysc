import React from 'react';

// COMPONENTS
import Footer from './Home/footer';
const About = () => {
    return (
        <div>
            <section className="develop">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-center">About Us</h1>
                        </div>
                    </div>
                </div>
                <span></span>
            </section>
            <section className="what-we-do">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>What We Do...</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="the-team">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Meet The Team</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 team-card">
                            <img src={require("../images/discover.jpg")} alt="Daniel Boadzie"/>
                            <h3>Daniel Boadzie</h3>
                            <p>Founder of 21st Century Skills Clinic. Expert Web Developer and Data Scientist.</p>
                        </div>
                        <div className="col-md-4 team-card">
                            <img src={require("../images/discover.jpg")} alt="Daniel Boadzie"/>
                            <h3>Joseph Akayesi</h3>
                            <p>The designer behind the designs. Building mobile apps with the React Native community.</p>
                        </div>
                        <div className="col-md-4 team-card">
                            <img src={require("../images/victor.jpg")} alt="Victor Bruce"/>
                            <h3>Victor Bruce-Crabbe</h3>
                            <p>JavaScript lover! Full-Stack Developer.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default About;