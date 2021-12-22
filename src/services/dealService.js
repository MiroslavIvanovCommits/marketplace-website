import * as request from './requester';

const baseUrl = 'https://softuni-practice-server-market.herokuapp.com/data';

export const getAll = () => request.get(`${baseUrl}/deals`);

export const getMyDeals = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`);

    return request.get(`${baseUrl}/deals?where=${query}`);
};

export const create = async (dealData, token) => {
    let response = await fetch(`${baseUrl}/deals`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...dealData, likes: []})
    });

    let result = await response.json();

    return result;
};

export const update = (dealId, dealData) => request.put(`${baseUrl}/deals/${dealId}`, dealData);

export const getOne = (dealId, signal) => {
    return fetch(`${baseUrl}/deals/${dealId}`, { signal })
        .then(res => res.json());
};

export const destroy = (dealId, token) => {
    return fetch(`${baseUrl}/deals/${dealId}`, {
        
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
};

export const like = (dealId, deal, token) => {
    return fetch(`${baseUrl}/deals/${dealId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(deal)
    }).then(res => res.json());
};