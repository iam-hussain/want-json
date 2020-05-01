import React, { Component } from 'react';
import {connect} from 'react-redux';
import Link from "next/link";

import FullPage from '../components/FullPage';
import LoginForm from '../components/Form/LoginForm';

class Login extends Component {
    render() {
        return (
            <FullPage>
                <div className="form-box">
                <h2 className="form-box-title">Account Login {this.props.user.logged ? "Yes": "No"}</h2>
                <LoginForm />
                {/* <p className="lined-text">Login with your Social Account</p>
                <div className="social-links">
                    <button className="social-link button hover-animate ">
                        <i className="fab fa-github fa-2x"></i>
                    </button>
                    <button className="social-link button hover-animate ">
                        <i className="fab fa-google fa-2x"></i>
                    </button>
                    <button className="social-link button hover-animate ">
                        <i className="fab fa-facebook fa-2x"></i>
                    </button>

                </div> */}
                <div className='form-box-bottom'>
                    <Link href="/reset_password"><button className="button form-text">Forgot Password</button></Link>
                </div>
            </div>
            </FullPage>
        )
    }
}



const mapStateToProps = state => ({
    user: state.user
});

// const mapDispatchToProps = {
//     incrementCounter: incrementCounter,
//     decrementCounter: decrementCounter,
// };




// const mapStateToProps = state => ({
//     user: state.user
// });

// const mapDispatchToProps = {
//     incrementCounter: incrementCounter,
//     decrementCounter: decrementCounter,
// };

export default connect(mapStateToProps)(Login);