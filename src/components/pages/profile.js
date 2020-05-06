import React from 'react';
import axios from 'axios';

export default class profile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        // const x = await fetch(`/.netlify/functions/getProfileData`);

        axios.get(`/.netlify/functions/getProfileData`)
        .then(res => {
            console.log('Res ---- ', res);
        })
        .catch(error => {
            console.log(error);
        })

        // console.log(x);
    }

    render() {
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <input type="url" placeholder="Enter url here" name="url" label="url" />
                    <button>View</button>
                </form>
            </main>
        )
    }
}