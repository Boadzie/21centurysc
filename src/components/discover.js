import React from 'react';

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