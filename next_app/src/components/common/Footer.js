import React from "react";

class Footer extends React.Component {
  render() {
    return (
        <footer>
            <div className="container">
                <div className="row align-items-end justify-content-center">
                    <div className="col-md footer-left">
                        <div className="social">
                            <button className="button hover-animate">
                                <i className="fas fa-home"></i>
                            </button>
                            <button className="button hover-animate">
                                <i className="fas fa-laptop-code"></i>
                            </button>
                            <button className="button hover-animate">
                                <i className="fas fa-book"></i>
                            </button>
                            <button className="button hover-animate">
                                <i className="fab fa-github"></i>
                            </button>
                            <button className="button hover-animate">
                                <i className="fas fa-address-card"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-md footer-right">
                        <p><i className="fa fa-code hover-animate primary-text"></i> with <i
                                className="fa fa-heart hover-animate primary-text"></i> by ZaHu</p>
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;
