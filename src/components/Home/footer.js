import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Discover</h3>
                        <ul>    
                            <li>Skills</li>
                            <li>Abilities</li>
                            <li>Interest</li>
                            <li>Talents</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Develop</h3>
                        <ul>    
                            <li>Science</li>
                            <li>Technology</li>
                            <li>Engineering</li>
                            <li>Mathematics</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Use</h3>
                        <ul>    
                            <li>Employment</li>
                            <li>Create Jobs</li>
                            <li>Impact Society</li>
                            <li>Create Innovation</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Copyright &copy; 2018. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;