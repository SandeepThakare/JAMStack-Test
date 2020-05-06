import React from 'react';
import axios from 'axios';

export default class Skills extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            skills: []
        }
    }

    componentWillMount() {
        axios.get(`/.netlify/functions/getSkills`)
            .then(res => {
                console.log(res);
                this.setState({
                    skills: res.data.data
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {

        const { skills } = this.state;

        return (
            <section className="colorlib-skills" data-section="skills">
                <div className="colorlib-narrow-content col-lg-offset-1">
                    <div className="row">
                        <div className="col-md-6 col-lg-offset-3 animate-box" data-animate-effect="fadeInLeft" style={{textAlign: 'left'}}>
                            <span className="heading-meta">My Specialty</span>
                            <h2 className="colorlib-heading animate-box">My Skills</h2>
                        </div>
                    </div>
                    <div className="row col-lg-offset-3">
                        <div className="col-md-12 animate-box " data-animate-effect="fadeInLeft" style={{textAlign: 'left'}}>
                            <p>In my revelevnt IT experience I worked on some javascript technologies, which is as follows</p>
                        </div>
                        {skills.length ? skills.map((item, index) => {

                            return <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft" style={{textAlign: 'left'}}>
                                <div className="progress-wrap">
                                    <h3>{item.technology}</h3>
                                    <div className="progress">
                                        <div className={`progress-bar color-${index+1}`} role="progressbar" aria-valuenow="75"
                                            aria-valuemin="0" aria-valuemax="100" style={{ width: `${item.percent}` }}>
                                            <span>{item.percent}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        }) : <div>No Data Present !!!</div>
                        }
                    </div>
                </div>
            </section>
        )
    }
}