const request = require('request');

const paystack = req => {
  const mySecretKey = 'Bearer sk_test_dc0d134997b3acb3520f250b1286cd83802a179b';

  const initializePayment = (form, myCallBack) => {
    const option = {
      url: 'https://api.paystack.co/transaction/initialize',
      headers: {
        authorization: mySecretKey,
        'content-type': 'application/json',
        'cache-control': 'no-cache'
      },
      form
    };
    const callBack = (err, res, body) => {
      return myCallBack(err, body);
    };
    request.post(option, callBack);
  };

  const verifyPayment = (ref, myCallBack) => {
    const option = {
      url:
        'https://api.paystack.co/transaction/verify/' + encodeURIComponent(ref),
      headers: {
        authorization: mySecretKey,
        'content-type': 'application/json',
        'cache-control': 'no-cache'
      }
    };
    const callback = (error, response, body) => {
      return mycallback(error, body);
    };
    request(option, callback);
  };

  return {initializePayment, verifyPayment};
};

module.exports = paystack;
