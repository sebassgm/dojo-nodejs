const axios = require("axios").default;
const qs = require("querystring");
 
const config = {
   headers: {
       "Content-Type": "application/x-www-form-urlencoded",
   },
};
 
let token = "";
 
const getToken = async() => {
   let token;
   const promise = await axios
       .post(
           "https://accounts.spotify.com/api/token",
           qs.stringify({
               grant_type: "client_credentials",
               client_id: "77c097e19d8a464cb12d688421e0fb95",
               client_secret: "1722299b96d4426895f9aea121715f93",
           }),
           config
       )
   token = promise.data;
   return token.access_token;
}
 
module.exports = getToken;