require('dotenv').config();
const axios = require('axios');
const { API_END_POINT, API_KEY } = process.env;

exports.handler = async function (event) {
  const params = { ...JSON.parse(event.body), apikey: API_KEY };
  const { data } = await axios({
    url: API_END_POINT,
    method: 'GET',
    params,
  });

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
