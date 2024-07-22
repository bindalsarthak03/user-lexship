require('dotenv').config();
const axios = require('axios');

exports.getGstController = async (req, res) => {
    const { gstn } = req.params;
    try {
        const url = process.env.GST_API;
        const apiKey = process.env.APIKEY_APISETU;
        const clientId = process.env.CLIENTID;

        const gstDetailsResponse = await axios.get(`${url}/${gstn}`, {
            headers: {
                'X-APISETU-CLIENTID': clientId,
                'X-APISETU-APIKEY': apiKey
            }
        });

        res.status(200).send(gstDetailsResponse.data);

    } catch (error) {
        if (error.response) {
            console.error('Response error:', error.response.data);
            res.status(error.response.status).send(error.response.data);
        } else if (error.request) {
            console.error('No response received:', error.request);
            res.status(500).send({ message: 'No response received from the server', error: error.request });
        } else {
            console.error('Error setting up request:', error.message);
            res.status(500).send({ message: 'Error in setting up the request', error: error.message });
        }
        console.error('Error details:', error);
    }
};
