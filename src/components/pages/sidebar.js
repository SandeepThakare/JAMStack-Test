/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../../constants/images/profile.jpg'

export default class SideBar extends React.Component {

    render() {
        return (
            <aside id="colorlib-aside" role="complementary" className="border js-fullheight" style={{ height: "90%" }}>
                <div className="text-center">
                    <div>
                        <img className="author-img" src={profileImage} alt="profile"></img>
                    </div>
                    <h1 id="colorlib-logo"><a href="index.html">Sandeep Thakare</a></h1>
                    <span className="position"><a href="#">Full Stack Developer</a> in India</span>
                </div>
                <nav id="colorlib-main-menu" role="navigation" className="navbar">
                    <div id="navbar" className="collapse">
                        <ul>
                            <li>
                                <Link to={'/about'}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to={'/skills'}>
                                    Skill
                                </Link>
                            </li>
                            <li>
                                <Link to={'/works'}>
                                    Work
                                </Link>
                            </li>
                            <li>
                                <Link to={'/contact'}>
                                    Contact Details
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </aside>

        )
    }
}