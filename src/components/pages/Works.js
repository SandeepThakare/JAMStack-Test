/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import axios from 'axios';
import backImage from '../../constants/images/javascript1.jpg'

export default class Work extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: {},
        }
    }

    componentWillMount() {
        axios.get(`/.netlify/functions/getProjects`)
            .then(res => {
                console.log(res);
                this.setState({
                    projects: res.data.data
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {

        const { projects } = this.state;

        return (
            <section className="colorlib-work" data-section="work">
                <div className="colorlib-narrow-content col-lg-offset-1">
                    <div className="row">
                        <div className="col-md-6 col-lg-offset-3 animate-box" data-animate-effect="fadeInLeft" style={{ textAlign: 'left' }}>
                            <span className="heading-meta">My Work</span>
                            <h2 className="colorlib-heading animate-box" >Recent Work</h2>
                        </div>
                    </div>
                    <div className="row col-lg-offset-3">
                        {projects.length ? projects.map((item, index) => {
                            return (
                                <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                                    <div className="project">
                                        <img className="project" src={backImage} alt="project"></img>
                                        <div className="desc">
                                            <div className="con">
                                                <h3><a href="work.html">Project {index + 1}</a></h3>
                                                <span><b>{item.name}</b></span>
                                                <p style={{ textAlign: 'left' }}> {item.desc} </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : <div>No Projects !!!</div>}
                    </div>

                </div>
            </section>
        )
    }
}