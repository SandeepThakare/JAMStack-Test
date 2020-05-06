/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import axios from 'axios';

export default class AboutMe extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			profileData: {},
		}
	}

	componentWillMount() {
		axios.get(`/.netlify/functions/getProfileData`)
			.then(res => {
				console.log(res);
				this.setState({
					profileData: res.data.data
				});
			})
			.catch(error => {
				console.log(error);
			})
	}

	render() {
		const { profileData } = this.state;
		return (
			<section className="colorlib-about" data-section="about">
				{console.log('Inside about me')}
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-12">
							<div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
								<div className="col-md-12 col-lg-offset-1">
									<div className="about-desc col-lg-offset-3" style={{textAlign: 'left'}}>
										<span className="heading-meta">About Me</span>
										<h2 className="colorlib-heading">Who Am I?</h2>
										<p className=""><strong>Hi I'm {profileData.first_name + ' ' + profileData.last_name}</strong> Currently Working in {profileData.current_company}</p>
										<p>Working As a {profileData.post} on the technologies {profileData.tech}.</p>
										<p>Completed my {profileData.higher_education} in year {profileData.complete_year}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}