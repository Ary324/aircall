const axios = require('axios');

export const getActivity = () => {
    try {
        return axios.get('https://aircall-job.herokuapp.com/activities');
    } catch(e) {
        console.log('error', e)
    }
}

export const archiveContact = (id, bool) => {
    try {
        return axios.post(`https://aircall-job.herokuapp.com/activities/${id}`, {is_archived: bool});
    } catch(e) {
        console.log('error', e)
    }
} 