import * as request from './requester';

const baseUrl = 'https://softuni-practice-server-market.herokuapp.com/data';

export const like = (userId, dealId) => request.post(`${baseUrl}/likes`, { userId, dealId });
export const getDealLikes = (dealId) => {
    const query = encodeURIComponent(`dealId="${dealId}"`);

    return request.get(`${baseUrl}/likes?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId));
};