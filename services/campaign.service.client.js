let _singleton = Symbol();
const API_URL = 'https://10.0.0.98:3000/api/';

class CampaignService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new CampaignService(_singleton);
        return this[_singleton]
    }

    findAllCampaigns() {
        return fetch(API_URL + 'campaign')
            .then(response => response.json())
    }

    createCampaign(campaign) {
        return fetch(API_URL + 'campaign', {
            body: JSON.stringify(campaign),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });
    }

}
export default CampaignService;
