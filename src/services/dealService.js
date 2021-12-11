const baseUrl = "http://localhost:3030/data";

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/deals`);

    let deals = await response.json();

    let result = Object.values(deals);

    return result;
};

export const create = async (dealData, token) => {
    let response = await fetch(`${baseUrl}/deals`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "X-Authorization" : token
        },
        body: JSON.stringify({...dealData, likes: []})
    });
    let result = await response.json();

    return result;
};

export const getOne = (dealId) => {
    return fetch(`${baseUrl}/deals/${dealId}`)
        .then(res => res.json());
};

export const destroy = (dealId, token) => {
    return fetch(`${baseUrl}/deals/${dealId}`, {
        method: "DELETE",
        headers: {
            "X-Authorization" : token
        }
    })
    .then(res => res.json());
};