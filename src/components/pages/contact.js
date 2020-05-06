/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import axios from 'axios';

export default class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            contact: {},
        }
    }

    componentWillMount() {
        axios.get(`/.netlify/functions/getContactDetails`)
            .then(res => {
                console.log(res);
                this.setState({
                    contact: res.data.data
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {

        const { contact } = this.state;

        return (
            <section className="colorlib-contact" data-section="contact">
                <div className="colorlib-narrow-content col-lg-offset-1">
                    <div className="row col-lg-offset-3">
                        <div className="col-md-6 col-lg-offset-3 col-lg-pull-3 animate-box" data-animate-effect="fadeInLeft" style={{ textAlign: 'left' }}>
                            <span className="heading-meta">Get in Touch</span>
                            <h2 className="colorlib-heading">Contact</h2>
                        </div>
                    </div>
                    <div className="row col-lg-offset-3">
                        <div className="col-md-5">
                            <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="colorlib-icon">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </div>
                                <div className="colorlib-text">
                                    <p><a href="#">{contact.email ? contact.email : 'sandythakare9@gmail.com'}</a></p>
                                </div>
                            </div>

                            <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="colorlib-icon">
                                    <i className="fa fa-address-card-o" aria-hidden="true"></i>
                                </div>
                                <div className="colorlib-text">
                                    <p>{contact.address ? contact.address : 'Address Here'}</p>
                                </div>
                            </div>

                            <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                <div className="colorlib-icon">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                </div>
                                <div className="colorlib-text">
                                    <p><a href="tel://">{contact.mobile ? contact.mobile : '+91 8956916390'}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}