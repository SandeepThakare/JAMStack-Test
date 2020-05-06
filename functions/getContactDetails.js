export async function handler(event) {
    console.log('Inside Proifle APi ---- ');

    const data = {
        email: 'sandythakare9@gmail.com',
        mobile: '+91 8956916390',
        address: '102, Santoor Appartment, Balewadi High Street, Pune, India - 411045'
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ data })
    }
}