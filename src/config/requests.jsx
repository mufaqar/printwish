export const apiRequest = async (method, endPoint, data) => {
    const requestOptions = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
    };
    if (method !== "GET") {
        requestOptions.body = JSON.stringify(data || null);
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/${endPoint}`, requestOptions)
    return await res.json()
}
