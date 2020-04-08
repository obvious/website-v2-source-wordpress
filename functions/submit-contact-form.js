"use strict";

var axios = require('axios');

var _dotenv = require("dotenv");

(0, _dotenv.config)();

exports.handler = async function (event) {
  try {
    const values = event.queryStringParameters;
    const response = await axios({
      method: 'POST',
      url: 'https://content.obvious.in/wp-json/wp/v2/contact_form_entries',
      data: {
        title: values.name,
        fields: { ...values
        },
        status: 'publish'
      },
      headers: {
        'Authorization': process.env.WORDPRESS_AUTH_HEADER,
        'Content-Type': 'application/json',
        'accept': 'application/json'
      }
    });
    const {
      data
    } = response;
    return {
      statusCode: 200,
      body: JSON.stringify(data)
      // body: data
    };
  } catch (e) {
    return {
      statusCode: e.status,
      body: e.toString()
    };
  }
};