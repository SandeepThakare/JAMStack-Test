export async function handler(event) {
    console.log('Inside Proifle APi ---- ');

    const userData = {
        'id': 101,
        'first_name': 'Sandeep',
        'last_name': 'Thakare',
        'higher_education': 'MCA',
        'complete_year': '2017',
        'post': 'Full Stack Developer',
        'current_company': 'ITShastra India Pvt Ltd',
        'tech': 'Nodejs, Reactjs and AWS as deployment',
        'experience': '3 Years 4 Months'

    }

    return {
        statusCode: 200,
        body: JSON.stringify({ data: userData })
    }
}