import fetch from "node-fetch";

const API_ENDPOINT = "https://icanhazdadjoke.com/";

exports.handler = async (event, context, callback) => {
  const data = JSON.parse(event.body)
  return fetch(API_ENDPOINT, { headers: { "Accept": "application/json" } })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: data.joke
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
}