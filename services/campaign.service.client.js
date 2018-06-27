let _singleton = Symbol();
const API_URL = 'https://project-back-end.herokuapp.com/api/';

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

    findCampaignsForUser() {
        return fetch(API_URL + 'enrollment', {
            credentials: 'include'
        })
            .then(response => response.json());
    }

    findAllCampaigns() {
        return fetch(API_URL + 'campaign')
            .then(response => response.json())
    }

    hasUserJoined(campaignId) {
        return fetch(API_URL + 'enrollment/campaign/' + campaignId)
            .then(response => response.json())
    }

    findCampaignById(campaignId) {
        return fetch(API_URL + 'campaign/' + campaignId)
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

    updateCampaign(campaignId, campaign) {
        return fetch(API_URL + 'update/campaign/' + campaignId, {
            method: 'post',
            body: JSON.stringify(campaign),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    deleteCampaign(campaignId) {
        console.log(campaignId);
        return fetch(API_URL + 'campaign/' + campaignId, {
            method: 'delete',
            credentials: 'include'
        });
    }

    userJoinsCampaign(campaignId) {
        const url = API_URL + 'enrollment/campaign/' + campaignId;
        return fetch(url, {
            method: 'post',
            credentials: 'include'
        });
    }
}
export default CampaignService;
