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

        if (gstDetailsResponse.status === 404) {
            return res.status(404).json({ error: 'Invalid GSTIN' });
        }

        const data = gstDetailsResponse.data;
        console.log(data);

        const cleanedData = {
            principalPlaceOfBusinessFields: {
                principalPlaceOfBusinessAddress: {
                    buildingName: data.principalPlaceOfBusinessFields.principalPlaceOfBusinessAddress.buildingName,
                    buildingNumber: data.principalPlaceOfBusinessFields.principalPlaceOfBusinessAddress.buildingNumber,
                    streetName: data.principalPlaceOfBusinessFields.principalPlaceOfBusinessAddress.streetName,
                    location: data.principalPlaceOfBusinessFields.principalPlaceOfBusinessAddress.location,
                    districtName: data.principalPlaceOfBusinessFields.principalPlaceOfBusinessAddress.districtName,
                    stateName: data.principalPlaceOfBusinessFields.principalPlaceOfBusinessAddress.stateName,
                    pincode: data.principalPlaceOfBusinessFields.principalPlaceOfBusinessAddress.pincode,
                }
            }
        };
        console.log(cleanedData)

        res.status(200).send(cleanedData);
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
