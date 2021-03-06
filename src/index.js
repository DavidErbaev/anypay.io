var https = require('https');
var defaultOptions = {
	apiUrl: 'https://anypay.io/api',
    agent: new https.Agent({
      keepAlive: true,
      keepAliveMsecs: 1000,
    })
}
var { API } = require('./api/methods.js')

class AnyPay {
	constructor(params={}) {
		this.options = { ...params }
        this.apiUrl = defaultOptions.apiUrl
        this.agent = defaultOptions.agent
        
        if (this.apiUrl.startsWith('http://')) {
          this.agent = null;
        }
        
        this.api = new API(this);
  }
  /**
   * 
   * @param {Transfer data} options 
   */
  setOptions(options) {
     Object.assign(this.options, options);
     return this;
  }
}

exports.AnyPay = AnyPay;