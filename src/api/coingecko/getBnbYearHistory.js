import axios from 'axios';

export default async () => {

    try {
        const bnbHistory = await axios.get('https://api.coingecko.com/api/v3/coins/bnb/market_chart', {
            params: {
                'vs_currency': 'usd',
                'days': 365,
                'interval': 'daily'
            }
        });
        return bnbHistory.data;
    } catch {

    }
};