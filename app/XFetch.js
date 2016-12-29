var {
    AsyncStorage
} = require('react-native');

const errorMessages = (res) => `${res.status} ${res.statusText}`;

function check404(res) {
  if (res.status === 404) {
    return Promise.reject(errorMessages(res));
  }
  return res;
}
function jsonParse(res) {
   return res.json().then(json=>{return json});
}

function errorMessageParse(res) {
  const {success,result} = res;
  if (!success) {
    return Promise.reject(res.message);
  }
  return result;
}

export default async function xFetch(url, options) {
  const opts = { ...options };
  var Token = await AsyncStorage
              .getItem('Token')
              .then(function(value){
                  return Promise.resolve(value);
              }).catch(function(error){
                  return Promise.reject(error);
              });
  opts.headers = {
    Authorization:Token,
    'Content-Type':'application/json',
    ...opts.headers
  };

  if(!opts.headers.Authorization){
      delete opts.headers.Authorization;
  }

  return fetch(url, opts)
    .then(check404)
    .then(jsonParse)
    .then(errorMessageParse);
}
