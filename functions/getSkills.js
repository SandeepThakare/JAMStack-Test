export async function handler(event) {
    console.log('Inside Proifle APi ---- ');

    const data = [
        {
            technology: 'Nodejs',
            percent: '60%',
        },
        {
            technology: 'Reactjs',
            percent: '60%',
        },
        {
            technology: 'AWS',
            percent: '60%',
        },
        {
            technology: 'Blockchain',
            percent: '60%',
        },
        {
            technology: 'Redis',
            percent: '60%',
        },
        {
            technology: 'Mongodb',
            percent: '60%',
        }
    ]

    return {
        statusCode: 200,
        body: JSON.stringify({ data })
    }
}