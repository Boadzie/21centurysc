import React from 'react';

// COMPONENT
import Footer from './Home/footer';

const SignUp = () => {
return (
    <div>
        <section className="sign-up">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center">Sign Up</h1>
                    </div>
                </div>
            </div>
            <span></span>
        </section>
        <section className="signup-form">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <form>
                            <div class="form-group">
                                <label for="email">Email Address:</label>
                                <input type="email" class="form-control" id="email" placeholder="example@gmail.com" />
                            </div>
                            <div class="form-group">
                                <label for="password">Password:</label>
                                <input type="password" class="form-control" id="password" placeholder="password" />
                            </div>
                            <button type="submit" class="btn btn-primary">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
);
}

export default SignUp;