import { useState, useEffect } from 'react';

import * as dealService from '../services/dealService.js';

const useDealState = (dealId) => {
    const [deal, setDeal] = useState({});

    useEffect(() => {
        dealService.getOne(dealId)
            .then(dealResult => {
                setDeal(dealResult);
            })
            .catch(err => {
                console.log(err);
            });
    }, [dealId]);

    return [
        deal,
        setDeal
    ];
};

export default useDealState;