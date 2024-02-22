export const apiRequest = async (method, endPoint, data) => {
    const requestOptions = {
        method: method,
        mode: "no-cors",
        headers: {
            'Content-Type': 'application/json',
        },
    };
    if (method !== "GET") {
        requestOptions.body = JSON.stringify(data || null);
    }
    const res = await fetch(`https://www.printwish.co.uk/api/${endPoint}`, requestOptions)
    return await res.json()
}
