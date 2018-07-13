import React from 'react';

// COMPONENTS
import Footer from './Home/footer';

const Contact = () => {
    return (
        <div>
            <section className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div>
                                <h1>Contact  Us Via:</h1>
                                <p><strong>Email</strong>: 21stcenturysc@gmail.com</p>
                                <p><strong>Telephone:</strong> 020 00 00 000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Contact;