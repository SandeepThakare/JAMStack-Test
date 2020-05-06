export async function handler(event) {
    console.log('Inside Proifle APi ---- ');

    const data = [
        {
            name: 'Tesla Vehicla Automation',
            desc: 'Development and maintain Webapp for tesla vehicle automation for various actions perform and handle vehicle data from web',
        },
        {
            name: 'Realvalue Marketplace',
            desc: 'Development and maintain Webapp for real value marketplace finance app for various actions perform and handle app data from web',
        },
        {
            name: 'CryptoBomaye',
            desc: 'Development and maintain Webapp for Crypto-Bomaye which is a game app purely based on cryptocurrencies. This app is a game app where multiple players can create a battle(game) and multiple people can join this battle.',
        },
        {
            name: 'DNA-DTC',
            desc: 'Development and maintain Webapp for DNA-DTC which is a healthcare app. This app maintains user health and DNA data and suggests meal plan and workout plan according to users DNA requirement.',
        },
        {
            name: 'MyWayy App',
            desc: 'Development and maintain IOS app back-end for MyWayy which is an habit building app. This app Tracks day to day routines created by users and helps them to keep their habits. MyWayy app is based on ​ Amazon Web Services where complete app backends are maintained in microservices (Lambda Service).',
        },
        {
            name: 'Settlement Experience',
            desc: 'Development and maintain Web App which is useful for the employee of ​ Beyond Finance ​ to track the the loans their monthly EMI’s',
        },
        {
            name: 'LoanSTAR',
            desc: 'Development and maintain Web App which is useful for the employee of ​ Beyond Finance ​ to track all the details from providing loans to the time it is completely paid.',
        },
    ]

    return {
        statusCode: 200,
        body: JSON.stringify({ data })
    }
}