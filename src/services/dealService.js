const baseUrl = "http://localhost:3030/data";

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/deals`);

    let deals = await response.json();

    let result = Object.values(deals);

    return result;
};

export const create = async (petData, token) => {
    let response = await fetch(`${baseUrl}/deals`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "X-Authorization" : token
        },
        body: JSON.stringify({...petData, likes: []})
    });
    let result = await response.json();

    return result;
};

export const getOne = (petId) => {
    return fetch(`${baseUrl}/deals/${petId}`)
        .then(res => res.json());
};

export const destroy = (petId, token) => {
    return fetch(`${baseUrl}/deals/${petId}`, {
        method: "DELETE",
        headers: {
            "X-Authorization" : token
        }
    })
    .then(res => res.json());
};